<script setup>
import { ref, computed, onMounted, onUnmounted} from 'vue';

// Data kutipan
const allQuotes = [
  { id: 1, text: "Jangan bandingkan prosesmu dengan orang lain. Bunga tidak tumbuh dan mekar secara bersamaan.", author: "Zen Habits", category: 'Motivasi' },
  { id: 2, text: "Bernapaslah. Ini hanya hari yang buruk, bukan kehidupan yang buruk.", author: "Anonim", category: 'Ketenangan' },
  { id: 3, text: "Mencintai diri sendiri adalah awal dari romansa seumur hidup.", author: "Oscar Wilde", category: 'Cinta Diri' },
  { id: 4, text: "Kamu lebih berani dari yang kamu yakini, dan lebih kuat dari yang kamu kira.", author: "A.A. Milne", category: 'Harapan' },
  { id: 5, text: "Istirahat itu produktif. Kamu tidak perlu selalu sibuk untuk merasa berharga.", author: "MindMate", category: 'Ketenangan' },
  { id: 6, text: "Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang kamu lakukan.", author: "Steve Jobs", category: 'Motivasi' },
  { id: 7, text: "Tidak apa-apa untuk tidak baik-baik saja. Tidak apa-apa untuk memulai lagi.", author: "Anonim", category: 'Harapan' },
  { id: 8, text: "Bicaralah pada dirimu sendiri seperti kamu berbicara pada seseorang yang kamu cintai.", author: "Brene Brown", category: 'Cinta Diri' },
  { id: 9, text: "Kecepatanmu tidak masalah, asalkan kamu tidak berhenti.", author: "Confucius", category: 'Motivasi' },
  { id: 10, text: "Kedamaian dimulai dengan sebuah senyuman.", author: "Bunda Teresa", category: 'Ketenangan' },
  { id: 11, text: "Hargai langkah-langkah kecilmu. Setiap langkah membawamu lebih dekat.", author: "Anonim", category: 'Motivasi' },
  { id: 12, text: "Kamu cukup. Kamu sangat cukup.", author: "Maya Angelou", category: 'Cinta Diri' },
];

const categories = ['Semua', 'Motivasi', 'Ketenangan', 'Cinta Diri', 'Harapan'];

//State
const currentCategory = ref('Semua');
const currentIndex = ref(0);
const showToast = ref(false);
let autoSlideInterval = null;

//logika
const filteredQuotes = computed(() => {
  if (currentCategory.value === 'Semua') {
    return allQuotes;
  }
  return allQuotes.filter(q => q.category === currentCategory.value);
});

const currentQuote = computed(() => {
  if (currentIndex.value >= filteredQuotes.value.length) {
     currentIndex.value = 0;
  }
  return filteredQuotes.value[currentIndex.value];
});

// Fungsi Navigasi 
const moveNext = () => {
  if (currentIndex.value < filteredQuotes.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const movePrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = filteredQuotes.value.length - 1;
  }
};

// Fungsi Auto Slide
const startAutoSlide = () => {
  stopAutoSlide();
  autoSlideInterval = setInterval(() => {
    moveNext();
  }, 3000); //Waktu ganti slide
};

const stopAutoSlide = () => {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
};

//Fungsi Tombol Manual
const handleNext = () => {
  stopAutoSlide();
  moveNext();
  startAutoSlide();
};

const handlePrev = () => {
  stopAutoSlide();
  movePrev();
  startAutoSlide();
};

const selectCategory = (cat) => {
  currentCategory.value = cat;
  currentIndex.value = 0;
  stopAutoSlide();
  startAutoSlide();
};

const copyToClipboard = () => {
  const textToCopy = `"${currentQuote.value.text}" — ${currentQuote.value.author}`;
  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast.value = true;
    setTimeout(() => showToast.value = false, 2000);
  });
};

const shareTwitter = () => {
  const text = encodeURIComponent(`"${currentQuote.value.text}" — ${currentQuote.value.author} #MindMate`);
  window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<template>
  <div class="min-h-screen bg-[#fff5f7] py-10 px-4 font-sans text-gray-700 relative overflow-hidden flex flex-col items-center">
    
    <div class="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-80 h-80 bg-[#d86478] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse translate-x-1/2 translate-y-1/2"></div>

    <div class="w-full max-w-5xl mx-auto relative z-10">
      
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-[#d86478] mb-2">Pojok Positif</h1>
        <p class="text-gray-500">Kata-kata sederhana untuk menemani harimu.</p>
      </div>

      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="selectCategory(cat)"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border"
          :class="currentCategory === cat 
            ? 'bg-[#d86478] text-white border-[#d86478] shadow-md transform scale-105' 
            : 'bg-white text-gray-500 border-pink-100 hover:border-[#d86478] hover:text-[#d86478]'"
        >
          {{ cat }}
        </button>
      </div>

      <div class="flex items-center justify-center gap-4 md:gap-8" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
        
        <button 
          @click="handlePrev"
          class="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-md border border-pink-100 text-[#d86478] flex items-center justify-center hover:bg-[#d86478] hover:text-white hover:scale-110 transition-all duration-300 active:scale-95"
          title="Sebelumnya"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <div class="flex-1 max-w-2xl bg-white rounded-3xl shadow-xl border border-pink-50 p-8 md:p-12 text-center relative min-h-[300px] flex flex-col justify-center items-center">
          
          <div class="absolute top-6 left-8 text-6xl text-[#fff0f3] font-serif leading-none select-none">“</div>
          
          <Transition
            mode="out-in"
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="transform translate-x-10 opacity-0"
            enter-to-class="transform translate-x-0 opacity-100"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="transform translate-x-0 opacity-100"
            leave-to-class="transform -translate-x-10 opacity-0"
          >
            <div :key="currentQuote.id" class="relative z-10 px-2 md:px-4">
              <p class="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed mb-6">
                {{ currentQuote.text }}
              </p>
              <div class="w-16 h-1 bg-[#d86478] mx-auto rounded-full mb-4"></div>
              <p class="text-gray-500 font-medium italic">
                — {{ currentQuote.author }}
              </p>
              <span class="inline-block mt-4 px-3 py-1 bg-[#fff5f7] text-[#d86478] text-xs font-bold rounded-lg uppercase tracking-wider">
                {{ currentQuote.category }}
              </span>
            </div>
          </Transition>

          <div class="absolute bottom-6 right-8 text-6xl text-[#fff0f3] font-serif leading-none select-none rotate-180">“</div>
        </div>

        <button 
          @click="handleNext"
          class="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-md border border-pink-100 text-[#d86478] flex items-center justify-center hover:bg-[#d86478] hover:text-white hover:scale-110 transition-all duration-300 active:scale-95"
          title="Selanjutnya"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>

      </div>

      <p class="text-center mt-6 text-sm text-gray-400">
        {{ currentIndex + 1 }} dari {{ filteredQuotes.length }} Kutipan
      </p>

      <div class="flex justify-center items-center gap-4 mt-4">
        <button 
          @click="copyToClipboard"
          class="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm border border-pink-100 text-gray-500 hover:text-[#d86478] hover:border-[#d86478] hover:shadow-md transition-all active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span class="text-sm font-semibold">Salin</span>
        </button>

        <button 
          @click="shareTwitter"
          class="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm border border-pink-100 text-gray-500 hover:text-blue-400 hover:border-blue-200 hover:shadow-md transition-all active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          <span class="text-sm font-semibold">Share</span>
        </button>
      </div>

    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-10 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-10 opacity-0"
    >
      <div v-if="showToast" class="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-[#333] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span class="text-sm font-medium">Berhasil disalin!</span>
      </div>
    </Transition>

  </div>
</template>