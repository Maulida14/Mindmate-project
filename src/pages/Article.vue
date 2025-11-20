<script setup>
import { ref } from 'vue';

// Data Artikel (Saya tambahkan 'desc' agar mirip desain Figma)
const articles = [
  { 
    title: 'Membangun Kesejahteraan Pikiran', 
    desc: 'Menulis setiap hari bisa bantu kamu memahami perasaan dan pikiran dengan lebih jujur.',
    file: '/pdf/Membangun-Kesejahteraan-Pikiran-untuk-Kesehatan-Mental-Melalui-Gaya-Hidup-Sehat.pdf' 
  },
  { 
    title: 'Mengatasi Overthinking dengan Cara Sederhana', 
    desc: 'Nggak perlu rumit! Coba tarik napas dalam-dalam, dengarkan musik tenang.',
    file: '/pdf/Mengatasi-Overthingking.pdf' 
  },
  { 
    title: 'Mindfulness sebagai Strategi Regulasi Emosi', 
    desc: 'Menolak bukan berarti egois. Kadang itu bentuk terbaik dari menghargai diri sendiri.',
    file: '/pdf/Mindfullness-sebagai-Strategi-Regulasi-Emosi.pdf' 
  },
  {
    title: 'Peran Self-care sebagai Strategi Pencegahan & Pemulihan',
    desc: 'Tidur yang cukup bantu otakmu pulih dan bikin kamu lebih siap menghadapi hari esok.',
    file: '/pdf/Peran-SelfCare-sebagai-Strategi-Pencegahan&Pemulihan-Gangguan-Kesehatan-Mental.pdf'
  },
  {
    title: 'Strategi Efektif Mengelola Stres',
    desc: 'Mencintai diri sendiri bukan berarti sombong, tapi sadar bahwa kamu pantas bahagia.',
    file: '/pdf/Strategi-Efektif-Mengelola-Stres-di-Tengah-Kehidupan-Digital.pdf'
  },
  {
    title: 'Strategi Menangani Overthingking di Era Digital',
    desc: 'Kadang langkah baik bukan maju terus, tapi berhenti sejenak dan bernapas.',
    file: '/pdf/Strategi-Menangani-Overthingking-di-Era-Digital.pdf'
  }
];

const selectedPdf = ref(null);

const openArticle = (filePath) => {
  selectedPdf.value = filePath;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const goBack = () => {
  selectedPdf.value = null;
};
</script>

<template>
  <div class="page-container">
    
    <div v-if="!selectedPdf" class="grid-view">
      <div class="header-section">
        <h2>Artikel & Insight Terbaru</h2>
        <p>Bacaan ringan untuk bantu kamu memahami diri dan menjaga pikiran tetap tenang.</p>
      </div>

      <div class="card-grid">
        <div 
          v-for="(item, index) in articles" 
          :key="index" 
          class="card"
          @click="openArticle(item.file)"
        >
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff8fa3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
      
      <div class="load-more-container">
        <button class="load-more-btn">Load more</button>
      </div>
    </div>


    <div v-else class="viewer-view">
      <button @click="goBack" class="back-btn">
        ← Kembali ke Daftar Artikel
      </button>
      
      <div class="iframe-container">
        <iframe :src="selectedPdf" title="PDF Reader"></iframe>
      </div>
    </div>

  </div>
</template>

<style scoped>
.page-container {
  padding: 40px 20px;
  background-color: #fff5f7;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
}

.header-section {
  text-align: left;
  margin-bottom: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.header-section h2 {
  font-size: 1.8rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 8px;
}

.header-section p {
  color: #666;
  font-size: 1rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}

/* Kartu Artikel */
.card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(255, 182, 193, 0.2); 
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(255, 182, 193, 0.4);
}

.icon-wrapper {
  background-color: #fff0f3;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 20px;
  display: inline-block;
}

.card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 10px;
  line-height: 1.4;
}

.card p {
  font-size: 0.9rem;
  color: #777;
  line-height: 1.6;
}

/* Tombol Load More */
.load-more-container {
  text-align: center;
  margin-top: 50px;
}

.load-more-btn {
  background-color: #fff0f3;
  color: #ff8fa3;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.load-more-btn:hover {
  background-color: #ffccd5;
}

/* STYLE UNTUK PDF VIEWER */
.viewer-view {
  max-width: 1200px;
  margin: 0 auto;
}

.back-btn {
  background: none;
  border: none;
  color: #ff8fa3;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.back-btn:hover {
  text-decoration: underline;
}

.iframe-container {
  width: 100%;
  height: 85vh;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  background: white;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>