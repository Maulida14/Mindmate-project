<script setup>
import { ref, computed } from 'vue';

//Data
const reflectionTopics = [
  {
    id: 1,
    title: 'Rasa Syukur Harian',
    desc: 'Temukan hal-hal kecil yang membuat hari ini berharga.',
    icon: '✨',
    color: 'bg-yellow-50 text-yellow-600 border-yellow-100',
    questions: [
      "Apa satu hal kecil yang membuatmu tersenyum hari ini?",
      "Siapa orang yang berkontribusi membuat harimu lebih mudah?",
      "Apa satu pencapaian (sekecil apapun) yang berhasil kamu lakukan?",
      "Apa pelajaran berharga yang kamu dapatkan hari ini?"
    ]
  },
  {
    id: 2,
    title: 'Meredakan Kecemasan',
    desc: 'Urai benang kusut di kepalamu agar lebih tenang.',
    icon: '🍃',
    color: 'bg-green-50 text-green-600 border-green-100',
    questions: [
      "Apa hal utama yang sedang mengganggu pikiranmu saat ini?",
      "Apakah hal tersebut berada di dalam kendalimu atau di luar kendalimu?",
      "Jika skenario terburuk terjadi, apa yang sebenarnya bisa kamu lakukan?",
      "Sebutkan 3 hal yang ada di sekitarmu saat ini yang nyata dan aman."
    ]
  },
  {
    id: 3,
    title: 'Mengenal Diri Sendiri',
    desc: 'Selami siapa dirimu dan apa yang kamu butuhkan.',
    icon: '🪞',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    questions: [
      "Kapan terakhir kali kamu merasa benar-benar menjadi dirimu sendiri?",
      "Apa satu kelebihan dirimu yang sering kamu lupakan?",
      "Apa yang tubuhmu butuhkan saat ini? (Istirahat, gerak, atau nutrisi?)",
      "Satu kalimat penyemangat apa yang ingin kamu dengar sekarang?"
    ]
  },
  {
    id: 4,
    title: 'Melepaskan Beban',
    desc: 'Ikhlaskan apa yang sudah berlalu.',
    icon: '🎈',
    color: 'bg-red-50 text-red-500 border-red-100',
    questions: [
      "Emosi apa yang sedang kamu tahan dan ingin kamu lepaskan?",
      "Maafkan dirimu untuk satu kesalahan di masa lalu. Apa itu?",
      "Apa ekspektasi orang lain yang membebanimu?",
      "Tarik napas dalam... Apa rasanya setelah mengakui hal-hal di atas?"
    ]
  }
];

//State
const viewState = ref('menu'); // 'menu' | 'session' | 'completed'
const currentTopic = ref(null);
const currentStep = ref(0);
const userAnswers = ref([]);
const currentAnswer = ref('');

//Logika
const startSession = (topic) => {
  currentTopic.value = topic;
  currentStep.value = 0;
  userAnswers.value = [];
  currentAnswer.value = '';
  viewState.value = 'session';
};

const nextQuestion = () => {
  userAnswers.value.push({
    question: currentTopic.value.questions[currentStep.value],
    answer: currentAnswer.value
  });

  if (currentStep.value < currentTopic.value.questions.length - 1) {
    currentStep.value++;
    currentAnswer.value = ''; 
  } else {
    viewState.value = 'completed';
  }
};

const resetMenu = () => {
  viewState.value = 'menu';
  currentTopic.value = null;
};

const progressPercentage = computed(() => {
  if (!currentTopic.value) return 0;
  return ((currentStep.value + 1) / currentTopic.value.questions.length) * 100;
});
</script>

<template>
  <div class="min-h-screen bg-[#fff5f7] py-10 px-4 font-sans text-gray-700">
    <div class="max-w-2xl mx-auto">
      
      <div v-if="viewState === 'menu'" class="text-center mb-10">
        <h1 class="text-3xl font-bold text-[#d86478] mb-2">Refleksi Diri</h1>
        <p class="text-gray-500">Pilih topik untuk memandu pikiranmu menemukan ketenangan.</p>
      </div>

      <Transition
        mode="out-in"
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="transform translate-y-5 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform translate-y-5 opacity-0"
      >
        
        <div v-if="viewState === 'menu'" class="grid grid-cols-1 md:grid-cols-2 gap-5" key="menu">
          <button 
            v-for="topic in reflectionTopics" 
            :key="topic.id"
            @click="startSession(topic)"
            class="bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-[#ff8fa3] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left group flex flex-col h-full"
          >
            <div class="flex items-center gap-3 mb-4">
              <span class="text-3xl p-3 rounded-xl border" :class="topic.color">{{ topic.icon }}</span>
              <h3 class="font-bold text-lg text-gray-800 group-hover:text-[#d86478] transition-colors">{{ topic.title }}</h3>
            </div>
            <p class="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">{{ topic.desc }}</p>
            <div class="flex items-center text-[#d86478] font-bold text-sm">
              Mulai Refleksi <span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </button>
        </div>

        <div v-else-if="viewState === 'session'" class="bg-white rounded-3xl shadow-lg border border-pink-100 overflow-hidden min-h-[500px] flex flex-col relative" key="session">
          <div class="px-8 pt-8 pb-4">
            <div class="flex justify-between items-center mb-4">
              <span class="text-xs font-bold text-[#d86478] uppercase tracking-wider bg-[#fff0f3] px-3 py-1 rounded-full">
                {{ currentTopic.title }}
              </span>
              <button @click="resetMenu" class="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors">
                ✕ Keluar
              </button>
            </div>
            <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                class="h-full bg-[#d86478] transition-all duration-500 ease-out" 
                :style="{ width: `${progressPercentage}%` }"
              ></div>
            </div>
          </div>

          <div class="flex-1 flex flex-col justify-center px-8 pb-8">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">
              {{ currentTopic.questions[currentStep] }}
            </h2>

            <textarea 
              v-model="currentAnswer"
              placeholder="Tuliskan pikiranmu di sini..."
              class="w-full flex-1 bg-[#fffcfd] p-5 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-[#d86478] focus:border-transparent resize-none text-lg text-gray-700 placeholder-gray-300 transition-all mb-6 min-h-[150px]"
              autofocus
            ></textarea>

            <div class="flex justify-end">
              <button 
                @click="nextQuestion"
                class="bg-[#d86478] text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-[#c04e63] transition-all transform active:scale-95 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                :disabled="!currentAnswer.trim()"
              >
                {{ currentStep === currentTopic.questions.length - 1 ? 'Selesai' : 'Lanjut' }}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        </div>

        <div v-else-if="viewState === 'completed'" class="bg-white rounded-3xl shadow-lg border border-pink-100 p-10 text-center" key="completed">
          <div class="w-24 h-24 bg-[#fff0f3] rounded-full flex items-center justify-center text-5xl mx-auto mb-6 animate-bounce">
            {{ currentTopic.icon }}
          </div>
          
          <h2 class="text-2xl font-bold text-gray-800 mb-2">Refleksi Selesai!</h2>
          <p class="text-gray-500 mb-8 max-w-md mx-auto">
            Terima kasih telah meluangkan waktu untuk dirimu sendiri. Semoga pikiranmu menjadi lebih jernih.
          </p>

          <div class="text-left bg-gray-50 rounded-xl p-6 mb-8 max-h-60 overflow-y-auto border border-gray-100 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-pink-200 [&::-webkit-scrollbar-thumb]:rounded-full">
            <h4 class="font-bold text-gray-700 mb-4 text-xs uppercase tracking-wider border-b pb-2">Ringkasan Pikiranmu:</h4>
            <div v-for="(item, idx) in userAnswers" :key="idx" class="mb-5 last:mb-0">
              <p class="text-sm text-[#d86478] font-bold mb-1">{{ item.question }}</p>
              <p class="text-sm text-gray-600 italic bg-white p-3 rounded-lg border border-gray-100">"{{ item.answer }}"</p>
            </div>
          </div>

          <button 
            @click="resetMenu"
            class="bg-white border-2 border-[#d86478] text-[#d86478] px-8 py-3 rounded-full font-bold hover:bg-[#d86478] hover:text-white transition-colors shadow-sm"
          >
            Kembali ke Menu
          </button>
        </div>

      </Transition>

    </div>
  </div>
</template>