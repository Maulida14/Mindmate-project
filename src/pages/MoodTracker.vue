<script setup>
import { ref, onMounted, computed } from 'vue';

// Data konfigurasi mood 
const moods = [
  { icon: '😆', label: 'Senang', value: 'happy', color: 'text-green-500', barColor: 'bg-green-400' },
  { icon: '🙂', label: 'Tenang', value: 'calm', color: 'text-blue-500', barColor: 'bg-blue-400' },
  { icon: '😐', label: 'Biasa', value: 'neutral', color: 'text-gray-500', barColor: 'bg-gray-400' },
  { icon: '😔', label: 'Sedih', value: 'sad', color: 'text-indigo-500', barColor: 'bg-indigo-400' },
  { icon: '😫', label: 'Lelah', value: 'tired', color: 'text-orange-500', barColor: 'bg-orange-400' },
  { icon: '😡', label: 'Marah', value: 'angry', color: 'text-red-500', barColor: 'bg-red-400' },
];

//State
const journalEntries = ref([]);
const isLoading = ref(true);

//Logika statistik
const moodStats = computed(() => {
  if (journalEntries.value.length === 0) return [];
  const total = journalEntries.value.length;
  
  return moods.map(moodItem => {
    const count = journalEntries.value.filter(entry => entry.mood.value === moodItem.value).length;
    const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
    return { ...moodItem, count, percentage };
  }).sort((a, b) => b.count - a.count);
});

const dominantMood = computed(() => {
  if (moodStats.value.length === 0 || moodStats.value[0].count === 0) return null;
  return moodStats.value[0];
});

const insightMessage = computed(() => {
  if (!dominantMood.value) return "Data belum cukup untuk memberikan insight.";
  switch(dominantMood.value.value) {
    case 'happy': return "Energi positifmu luar biasa! Bagikan kebahagiaan ini ke orang sekitar.";
    case 'calm': return "Ketenangan adalah kekuatan. Pertahankan kedamaian ini.";
    case 'neutral': return "Hari yang stabil. Kadang 'biasa saja' adalah hal yang patut disyukuri.";
    case 'sad': return "Tidak apa-apa merasa sedih. Izinkan dirimu menangis jika perlu, lalu bangkit perlahan.";
    case 'tired': return "Tubuhmu butuh istirahat. Jangan memaksakan diri, ambil waktu jeda sejenak.";
    case 'angry': return "Emosi adalah sinyal. Coba tarik napas dalam atau tuliskan kekesalanmu di kertas.";
    default: return "Tetap semangat menjalani hari!";
  }
});

//Load data
onMounted(() => {
  const saved = localStorage.getItem('mood_journal');
  if (saved) {
    journalEntries.value = JSON.parse(saved);
  }
  isLoading.value = false;
});
</script>

<template>
  <div class="min-h-screen bg-[#fff5f7] py-10 px-4 font-sans text-gray-700">
    
    <div class="max-w-[1000px] mx-auto">
      
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-[#d86478] mb-2">Mood Tracker & Analisis</h1>
        <p class="text-gray-500">Lihat pola emosimu dalam grafik visual.</p>
      </div>

      <div v-if="journalEntries.length === 0 && !isLoading" class="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-dashed border-pink-200 shadow-sm">
        <div class="text-6xl mb-4">📊</div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">Belum ada data statistik</h3>
        <p class="text-gray-500 mb-6 text-center max-w-md">
          Kamu belum mengisi jurnal. Mulai catat perasaanmu di menu <b>Mood Journal</b> untuk melihat statistik di sini.
        </p>
      </div>

      <Transition
        appear
        enter-active-class="transition-all duration-[600ms] ease-out"
        enter-from-class="opacity-0 translate-y-[20px]"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div v-if="journalEntries.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="space-y-6">
            
            <div class="bg-white p-6 rounded-3xl shadow-sm border border-pink-50 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div class="absolute right-0 top-0 w-24 h-24 bg-pink-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <h3 class="text-gray-500 font-bold text-xs uppercase tracking-wider mb-2 relative z-10">Total Check-in</h3>
              <div class="flex items-baseline gap-2 relative z-10">
                <span class="text-5xl font-extrabold text-[#d86478]">{{ journalEntries.length }}</span>
                <span class="text-gray-400 font-medium">kali</span>
              </div>
            </div>

            <div class="bg-white p-6 rounded-3xl shadow-sm border border-pink-50 hover:-translate-y-1 transition-transform duration-300">
              <h3 class="text-gray-500 font-bold text-xs uppercase tracking-wider mb-4">Mood Terbanyak</h3>
              <div v-if="dominantMood" class="flex items-center gap-4">
                <div class="text-5xl bg-[#fff0f3] w-20 h-20 flex items-center justify-center rounded-2xl">
                  {{ dominantMood.icon }}
                </div>
                <div>
                  <p class="text-2xl font-bold text-gray-800">{{ dominantMood.label }}</p>
                  <p class="text-sm text-gray-500 font-medium">{{ dominantMood.percentage }}% dari waktumu</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-[#d86478] to-[#ff8fa3] p-6 rounded-3xl shadow-lg text-white">
              <div class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 class="font-bold text-lg mb-1">Insight Buat Kamu</h3>
                  <p class="text-white/90 text-sm leading-relaxed">{{ insightMessage }}</p>
                </div>
              </div>
            </div>

          </div>

          <div class="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-pink-50">
            <h3 class="font-bold text-xl text-gray-800 mb-8 flex items-center gap-2">
              <span class="w-2 h-8 bg-[#d86478] rounded-full inline-block"></span>
              Distribusi Perasaan
            </h3>
            
            <div class="space-y-6">
              <div v-for="stat in moodStats" :key="stat.value">
                <div class="flex justify-between items-end mb-2">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl">{{ stat.icon }}</span>
                    <span class="font-bold text-gray-700">{{ stat.label }}</span>
                  </div>
                  <div class="text-right">
                    <span class="font-bold text-gray-800">{{ stat.percentage }}%</span>
                    <span class="text-xs text-gray-400 ml-1">({{ stat.count }} kali)</span>
                  </div>
                </div>

                <div class="w-full h-4 bg-gray-100 rounded-full overflow-hidden relative">
                  <div 
                    class="h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                    :class="stat.barColor"
                    :style="{ width: `${stat.percentage}%` }"
                  >
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-10 pt-6 border-t border-gray-100 text-center text-sm text-gray-400">
              <p>Data diambil dari riwayat jurnal mood kamu.</p>
            </div>
          </div>

        </div>
      </Transition>

    </div>
  </div>
</template>