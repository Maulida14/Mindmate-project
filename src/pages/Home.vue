<script setup>
import { useRouter } from 'vue-router';
import bungaotak from '../assets/bunga-otak.png'; 
import image1 from '../assets/home-img1.png';
import image2 from '../assets/home-img2.png';
import image3 from '../assets/home-img3.png';

const router = useRouter();

// --- DATA ARTIKEL ---
const articles = [
  { 
    title: 'Membangun Kesejahteraan Pikiran', 
    desc: 'Menulis setiap hari bisa bantu kamu memahami perasaan dan pikiran dengan lebih jujur.',
    file: '/pdf/Membangun-Kesejahteraan-Pikiran-untuk-Kesehatan-Mental-Melalui-Gaya-Hidup-Sehat.pdf' 
  },
  { 
    title: 'Mengatasi Overthinking', 
    desc: 'Nggak perlu rumit! Coba tarik napas dalam-dalam, dengarkan musik tenang.',
    file: '/pdf/Mengatasi-Overthingking.pdf' 
  },
  { 
    title: 'Mindfulness sebagai Strategi Regulasi Emosi', 
    desc: 'Menolak bukan berarti egois. Kadang itu bentuk terbaik dari menghargai diri sendiri.',
    file: '/pdf/Mindfullness-sebagai-Strategi-Regulasi-Emosi.pdf' 
  }
];

// --- DATA FITUR ---
const features = [
  {
    title: "Mood Jurnal",
    desc: "Catat perasaanmu setiap hari dan lihat bagaimana suasana hatimu berubah dari waktu ke waktu.",
    icon: "📝"
  },
  {
    title: "Refleksi Diri",
    desc: "Pahami apa yang kamu rasakan dan dapatkan insight mendalam tentang dirimu.",
    icon: "🧠"
  },
  {
    title: "Mood Tracker",
    desc: "Pantau perkembangan emosi lewat grafik visual yang mudah dipahami.",
    icon: "❤"
  },
  {
    title: "Quotes & Tips Positif",
    desc: "Dapatkan kutipan motivasi harian untuk menjaga semangatmu tetap hidup.",
    icon: "💬"
  }
];

const goToArticles = () => {
  router.push('/articles');
};
</script>

<template>
  <div class="bg-[#ffe9ec] min-h-screen font-sans text-gray-700 pb-20">

    <section class="px-6 pt-0 pb-12 md:pt-0 md-pb-20">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-[#d86478] font-bold text-xl mb-2">MindMate</h2>
          <h1 class="text-4xl md:text-5xl font-bold text-[#d86478] leading-tight mb-6">
            Teman Digital untuk <br> Kesehatan Mentalmu
          </h1>
          <p class="text-gray-600 mb-8 text-lg leading-relaxed">
            Hidup gak selalu mudah, dan kadang kita cuma butuh tempat untuk berhenti sejenak dan bernapas.
            Mindmate hadir untuk menemanimu merawat kesehatan mentalmu.
          </p>
        </div>
        <div class="flex justify-center">
          <img :src="bungaotak" alt="Ilustrasi Otak Bunga" class="w-full max-w-md drop-shadow-xl" />
        </div>
      </div>
    </section>

    <section class="px-6 py-16">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white/50 p-8 rounded-3xl backdrop-blur-sm border border-white/60">
        <div class="bg-white rounded-3xl overflow-hidden h-64 md:h-80 shadow-md">
          <img :src="image1" alt="mindmate" class="object-cover w-full h-full" />
        </div>
        <div>
          <h2 class="text-3xl font-bold text-[#d86478] mb-6">Apa itu Mindmate?</h2>
          <p class="text-gray-600 leading-relaxed mb-4 text-lg">
            Mindmate adalah ruang digital untuk kamu yang ingin menjaga keseimbangan antara pikiran dan perasaan.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Melalui refleksi harian, latihan sederhana, dan journaling interaktif, kami bisa memahami emosi dengan cara yang positif dan menyenangkan.
          </p>
        </div>
      </div>
    </section>

    <section class="px-6 py-16">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-[#d86478] mb-2">Temukan Fitur yang membantumu</h2>
        <p class="text-gray-500 mb-12">Fitur Your MindMate</p>

        <div class="space-y-6">
          <div v-for="(feature, idx) in features" :key="idx" class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col md:flex-row items-start md:items-center gap-6">
            <div class="w-16 h-16 bg-[#ffe9ec] rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
              {{ feature.icon }}
            </div>
            <div class="flex-grow">
              <h3 class="text-xl font-bold text-[#d86478] mb-2">{{ feature.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ feature.desc }}</p>
            </div>
            <button class="bg-[#ffe9ec] text-[#d86478] px-6 py-2 rounded-full text-sm font-bold hover:bg-[#d86478] hover:text-white transition">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 py-16">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-[#d86478] mb-12">Tips Self Care Harian</h2>

        <div class="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div class="rounded-3xl overflow-hidden h-70 shadow-lg bg-white">
             <img :src="image2" alt="morning" class="w-full h-full object-cover" />
          </div>
          <div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Buat Rutinitas Tenang</h3>
            <p class="text-gray-600 leading-relaxed">
              Bangun 15 menit lebih awal, tarik napas dalam, dan tulis satu hal yang kamu syukuri. Rutinitas kecil ini membantumu memulai hari dengan energi positif.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div class="order-2 md:order-1">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Kenali Batas Dirimu</h3>
            <p class="text-gray-600 leading-relaxed">
              Nggak apa-apa kok buat bilang "aku butuh waktu sebentar". Kamu berhak untuk berhenti sejenak sebelum melanjutkan aktivitasmu. Istirahat bukan kesalahan.
            </p>
          </div>
          <div class="order-1 md:order-2 rounded-3xl overflow-hidden h-66 shadow-lg bg-white">
             <img :src="image3" alt="your passion" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 py-16">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-[#d86478] mb-10 text-center">Apa Kata Pengguna?</h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-8 rounded-2xl shadow hover:-translate-y-2 transition duration-300">
            <div class="flex text-yellow-400 mb-4">★★★★★</div>
            <h3 class="font-bold text-gray-800 mb-2">Belajar mengenal diri</h3>
            <p class="text-gray-500 text-sm italic mb-6">"Kini aku lebih jarang burnout karena tau kapan harus istirahat..."</p>
            <div class="flex items-center gap-3 border-t pt-4">
              <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <p class="text-sm font-bold text-[#d86478]">Rina</p>
                <p class="text-xs text-gray-400">Mahasiswi, 21</p>
              </div>
            </div>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow hover:-translate-y-2 transition duration-300">
            <div class="flex text-yellow-400 mb-4">★★★★☆</div>
            <h3 class="font-bold text-gray-800 mb-2">Lebih Tenang</h3>
            <p class="text-gray-500 text-sm italic mb-6">"MindMate bantu aku tracking mood pas lagi skripsi..."</p>
            <div class="flex items-center gap-3 border-t pt-4">
              <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <p class="text-sm font-bold text-[#d86478]">Budi</p>
                <p class="text-xs text-gray-400">Desainer, 24</p>
              </div>
            </div>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow hover:-translate-y-2 transition duration-300">
            <div class="flex text-yellow-400 mb-4">★★★★★</div>
            <h3 class="font-bold text-gray-800 mb-2">Fitur Lengkap</h3>
            <p class="text-gray-500 text-sm italic mb-6">"Suka banget sama fitur quotes hariannya, bikin semangat..."</p>
            <div class="flex items-center gap-3 border-t pt-4">
              <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <p class="text-sm font-bold text-[#d86478]">Sarah</p>
                <p class="text-xs text-gray-400">Penulis, 22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 py-16">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-[#d86478] mb-2">Artikel & Insight Terbaru</h2>
          <p class="text-gray-500">Bacaan ringan untuk bantu kamu memahami diri</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(item, index) in articles" 
            :key="index"
            @click="goToArticles"
            class="bg-white p-6 rounded-2xl shadow cursor-pointer group hover:shadow-xl transition duration-300"
          >
            <div class="bg-[#ffe9ec] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#d86478]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h3 class="font-bold text-xl text-gray-800 mb-3 group-hover:text-[#d86478] transition">{{ item.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-4">{{ item.desc }}</p>
            <span class="text-[#d86478] text-sm font-bold">Baca Selengkapnya →</span>
          </div>
        </div>

        <div class="mt-16 text-center">
             <button @click="goToArticles" class="border-2 border-[#d86478] text-[#d86478] px-8 py-3 rounded-full font-bold hover:bg-[#d86478] hover:text-white transition">Lihat Semua Artikel</button>
        </div>
      </div>
    </section>

  </div>
</template>