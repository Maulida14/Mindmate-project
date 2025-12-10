<script setup>
import { ref, onMounted } from 'vue';

// Data pilihan mood
const moods = [
  { icon: '😆', label: 'Senang', value: 'happy', color: 'bg-green-100 border-green-200' },
  { icon: '🙂', label: 'Tenang', value: 'calm', color: 'bg-blue-100 border-blue-200' },
  { icon: '😐', label: 'Biasa', value: 'neutral', color: 'bg-gray-100 border-gray-200' },
  { icon: '😔', label: 'Sedih', value: 'sad', color: 'bg-indigo-100 border-indigo-200' },
  { icon: '😫', label: 'Lelah', value: 'tired', color: 'bg-orange-100 border-orange-200' },
  { icon: '😡', label: 'Marah', value: 'angry', color: 'bg-red-100 border-red-200' },
];

// state
const selectedMood = ref(null);
const note = ref('');
const journalEntries = ref([]);

// --- Function ---

// 1. Load data dari LocalStorage saat halaman dibuka
onMounted(() => {
  const saved = localStorage.getItem('mood_journal');
  if (saved) {
    journalEntries.value = JSON.parse(saved);
  }
});

// 2. Pilih Mood
const selectMood = (mood) => {
  selectedMood.value = mood;
};

// 3. Simpan Jurnal
const saveEntry = () => {
  if (!selectedMood.value) {
    alert("Pilih mood kamu dulu ya! 😊");
    return;
  }

  const newEntry = {
    id: Date.now(),
    date: new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    mood: selectedMood.value,
    note: note.value,
  };

  // Masukkan ke daftar paling atas
  journalEntries.value.unshift(newEntry);

  // Simpan ke browser
  localStorage.setItem('mood_journal', JSON.stringify(journalEntries.value));

  // Reset form
  selectedMood.value = null;
  note.value = '';
};

// 4. Hapus Jurnal
const deleteEntry = (id) => {
  if(confirm('Yakin mau hapus catatan ini?')) {
    journalEntries.value = journalEntries.value.filter(entry => entry.id !== id);
    localStorage.setItem('mood_journal', JSON.stringify(journalEntries.value));
  }
};
</script>

<template>
  <div class="min-h-screen bg-[#ffe9ec] py-10 px-4 font-sans text-gray-700">
    
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-[#d86478] mb-2">Mood Journal</h1>
        <p class="text-gray-500">Ceritakan harimu, kenali perasaanmu.</p>
      </div>

      <div class="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-10 border border-pink-100">
        
        <h3 class="font-bold text-gray-800 mb-4">Bagaimana perasaanmu saat ini?</h3>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
          <button 
            v-for="item in moods" 
            :key="item.value"
            @click="selectMood(item)"
            class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all duration-200 hover:scale-105"
            :class="selectedMood?.value === item.value ? `${item.color} border-[#d86478] ring-2 ring-[#d86478] ring-offset-1` : 'bg-white border-gray-100 hover:bg-gray-50'"
          >
            <span class="text-3xl mb-1">{{ item.icon }}</span>
            <span class="text-xs font-medium text-gray-600">{{ item.label }}</span>
          </button>
        </div>

        <h3 class="font-bold text-gray-800 mb-3">Ceritakan sedikit tentang harimu (Opsional)</h3>
        <textarea 
          v-model="note"
          placeholder="Apa yang bikin kamu merasa gitu? Tulis di sini..."
          class="w-full h-32 p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d86478] focus:bg-white transition resize-none mb-6"
        ></textarea>

        <button 
          @click="saveEntry"
          class="w-full bg-[#d86478] text-white py-3 rounded-full font-bold shadow-md hover:bg-[#c04e63] transition transform hover:-translate-y-1"
        >
          Simpan Jurnal
        </button>
      </div>

      <div v-if="journalEntries.length > 0">
        <h2 class="text-xl font-bold text-[#d86478] mb-6">Riwayat Jurnalmu</h2>
        
        <div class="space-y-4">
          <div 
            v-for="entry in journalEntries" 
            :key="entry.id" 
            class="bg-white p-5 rounded-2xl shadow-sm border border-pink-50 flex gap-4 relative group hover:shadow-md transition"
          >
            <div class="flex-shrink-0 text-4xl bg-[#ffe9ec] w-14 h-14 flex items-center justify-center rounded-full">
              {{ entry.mood.icon }}
            </div>

            <div class="flex-grow">
              <div class="flex justify-between items-start mb-1">
                <h4 class="font-bold text-gray-800">{{ entry.mood.label }}</h4>
                <span class="text-xs text-gray-400">{{ entry.date }} • {{ entry.time }}</span>
              </div>
              <p class="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                {{ entry.note || "Tidak ada catatan tambahan." }}
              </p>
            </div>

            <button 
              @click="deleteEntry(entry.id)"
              class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition"
              title="Hapus"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-10 opacity-60">
        <p class="text-gray-500">Belum ada catatan. Yuk mulai journaling hari ini!</p>
      </div>

    </div>
  </div>
</template>