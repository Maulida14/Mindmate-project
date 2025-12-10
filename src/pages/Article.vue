<script setup>
import { ref, nextTick, computed} from 'vue';

// Data Artikel
const articles = [
  { 
    title: 'Membangun Kesejahteraan Pikiran', 
    desc: 'Menjaga ketenangan  dan keseimbangan emosi agar hidup terasa lebih ringan dan sehat.',
    file: '/pdf/Membangun-Kesejahteraan-Pikiran-untuk-Kesehatan-Mental-Melalui-Gaya-Hidup-Sehat.pdf' 
  },
  { 
    title: 'Mengatasi Overthinking dengan Cara Sederhana', 
    desc: 'Menenangkan pikiran yang berputar berlebihan dengan fokus pada hal-hal yang dapat dikendalikan.',
    file: '/pdf/Mengatasi-Overthingking.pdf' 
  },
  { 
    title: 'Mindfulness sebagai Strategi Regulasi Emosi', 
    desc: 'Membantu seseorang menyadari perasaan dan pikirannya secara penuh di saat ini.',
    file: '/pdf/Mindfullness-sebagai-Strategi-Regulasi-Emosi.pdf' 
  },
  {
    title: 'Peran Self-care sebagai Strategi Pencegahan & Pemulihan',
    desc: 'Memberi ruang bagi tubuh dan pikiran untuk beristirahat, memulihkan energi, serta menjaga keseimbangan emosional sebelum tekanan menjadi lebih berat.',
    file: '/pdf/Peran-SelfCare-sebagai-Strategi-Pencegahan&Pemulihan-Gangguan-Kesehatan-Mental.pdf'
  },
  {
    title: 'Strategi Efektif Mengelola Stres',
    desc: 'Melibatkan cara-cara terarah untuk menenangkan pikiran, mengatur emosi, dan menjaga tubuh tetap stabil.',
    file: '/pdf/Strategi-Efektif-Mengelola-Stres-di-Tengah-Kehidupan-Digital.pdf'
  },
  {
    title: 'Strategi Menangani Overthingking di Era Digital',
    desc: 'Berfokus pada membatasi paparan informasi yang berlebihan, mengatur penggunaan teknologi, dan membangun kebiasaan sadar diri.',
    file: '/pdf/Strategi-Menangani-Overthingking-di-Era-Digital.pdf'
  },
  {
    title: 'Pentingnya Self Love Serta Cara Menerapkannya Dalam Diri',
    desc: 'Membantu individu menghargai dirinya dan menjaga ketahanan mental.',
    file: '/pdf/Pentingnya-Self-Love-Serta-Cara-Menerapkannya-Dalam-Diri.pdf'
  },
  {
    title: 'Self Healing? Terapi atau Rekreasi',
    desc: 'Proses pemulihan diri yang dapat dilakukan melalui pendekatan terapi maupun aktivitas rekreasi.',
    file: '/pdf/Self-Healing-Terapi-atau-Rekreasi.pdf'
  },
  {
    title: 'Mindfullness dengan Kesejahteraan Psikologis',
    desc: 'Latihan menyadari pikiran, emosi, dan sensasi tubuh secara penuh, sehingga individu dapat merespons situasi dengan lebih tenang dan terkontrol.',
    file: '/pdf/Mindfullness-dengan-Kesejahteraan-Psikologis.pdf'
  },
  {
    title: 'Peningkatan Pikiran Positif Pada Remaja Melalui Terapi Relaksasi',
    desc: 'Membantu menenangkan sistem saraf, meredakan ketegangan, dan menciptakan ruang mental yang lebih jernih.',
    file: '/pdf/Peningkatan-Pikiran-Positif-Pada-Remaja-Melalui-Terapi-Relaksasi.pdf'
  }
];

const selectedPdf = ref(null);
const lastScrollPosition = ref(0);

const limit = ref(8);
const visibleArticles = computed(() => {
  return articles.slice(0, limit.value);
});
const loadMore = () => {
  limit.value += 4;
};
const hasMoreArticles = computed(() => {
  return limit.value < articles.length;
});

const openArticle = (filePath) => {
  lastScrollPosition.value = window.scrollY;
  selectedPdf.value = filePath;
  window.scrollTo({ top: 0, behavior: 'auto' });
};

const closeArticle = async () => {
  selectedPdf.value = null;
  await nextTick();
  window.scrollTo({ 
    top: lastScrollPosition.value, behavior: 'auto'
  });
};
</script>

<template>
  <div class="min-h-screen px-5 py-10 bg-[#fff5f7] font-sans">
    
    <div v-if="!selectedPdf">
      
      <div class="max-w-[1200px] mx-auto text-left mb-10">
        <h2 class="text-[1.8rem] text-[#333] font-bold mb-2">Artikel & Insight Terbaru</h2>
        <p class="text-[#666] text-base">Bacaan ringan untuk bantu kamu memahami diri dan menjaga pikiran tetap tenang.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-[30px] max-w-[1200px] mx-auto">
        <div 
          v-for="(item, index) in visibleArticles" 
          :key="index" 
          class="bg-white p-6 rounded-2xl shadow cursor-pointer group hover:shadow-xl transition duration-300"
          @click="openArticle(item.file)"
        >
          <div class="bg-[#ffe9ec] w-100 h-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-100 w-100 text-[#d86478]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <h3 class="font-bold text-xl text-gray-800 mb-3 group-hover:text-[#d86478] transition">{{ item.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-4">{{ item.desc }}</p>
          <span class="text-[#d86478] text-sm font-bold">Baca Selengkapnya →</span>
        </div>
      </div>
      
      <div v-if="hasMoreArticles" class="text-center mt-[50px]">
        <button 
          @click="loadMore"
          class="border-2 border-[#d86478] text-[#d86478] px-8 py-3 rounded-full font-bold hover:bg-[#d86478] hover:text-white transition"
        >
          Load more
        </button>
      </div>

      <div v-else class="text-center mt-[50px] text-gray-400 text-sm">
        Semua artikel sudah ditampilkan
      </div>

    </div>

    <div v-else class="max-w-[1200px] mx-auto">
      <button 
        @click="closeArticle" 
        class="bg-transparent border-none text-[#ff8fa3] font-bold text-base cursor-pointer mb-5 flex items-center gap-2 hover:underline"
      >
        ← Kembali ke Daftar Artikel
      </button>
      
      <div class="w-full h-[85vh] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] bg-white">
        <iframe :src="selectedPdf" title="PDF Reader" class="w-full h-full border-none"></iframe>
      </div>
    </div>

  </div>
</template>