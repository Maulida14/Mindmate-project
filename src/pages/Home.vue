<script setup>
import { ref, nextTick, computed} from 'vue';
import { useRouter } from 'vue-router';
import bungaotak from '../assets/bunga-otak.png'; 
import image1 from '../assets/home-img1.png';
import image2 from '../assets/home-img2.png';
import image3 from '../assets/home-img3.png';

const router = useRouter();

const selectedPdf = ref(null); 
const lastScrollPosition = ref(0);

// Data artikel
const articles = [
  { 
    title: 'Membangun Kesejahteraan Pikiran', 
    desc: 'Menjaga ketenangan  dan keseimbangan emosi agar hidup terasa lebih ringan dan sehat.',
    file: '/pdf/Membangun-Kesejahteraan-Pikiran-untuk-Kesehatan-Mental-Melalui-Gaya-Hidup-Sehat.pdf' 
  },
  { 
    title: 'Mengatasi Overthinking', 
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
  }
];

// Data Fitur
const features = [
  {
    title: "Mood Jurnal",
    desc: "Catat perasaanmu setiap hari dan lihat bagaimana suasana hatimu berubah dari waktu ke waktu.",
    icon: "📝",
    path: "/features/mood-journal"
  },
  {
    title: "Refleksi Diri",
    desc: "Pahami apa yang kamu rasakan dan dapatkan insight mendalam tentang dirimu.",
    icon: "🧠",
    path: "/features/self-reflection"
  },
  {
    title: "Mood Tracker",
    desc: "Pantau perkembangan emosi lewat grafik visual yang mudah dipahami.",
    icon: "❤",
    path: "/features/mood-tracker"
  },
  {
    title: "Quotes & Tips Positif",
    desc: "Dapatkan kutipan motivasi harian untuk menjaga semangatmu tetap hidup.",
    icon: "💬",
    path: "/features/positive-quotes"
  }
];

const testimonials = [
  { 
    rating: '★★★★★', 
    title: 'Belajar mengenal diri', 
    quote: '"Kini aku lebih jarang burnout karena tau kapan harus istirahat..."', 
    name: 'Rina', 
    info: 'Mahasiswi, 21' 
  },
  { 
    rating: '★★★★☆', 
    title: 'Lebih Tenang', 
    quote: '"MindMate bantu aku tracking mood pas lagi skripsi..."', 
    name: 'Budi', 
    info: 'Desainer, 24' 
  },
  { 
    rating: '★★★★★', 
    title: 'Fitur Lengkap', 
    quote: '"Suka banget sama fitur quotes hariannya, bikin semangat..."', 
    name: 'Sarah', 
    info: 'Penulis, 22' 
  },
  { 
    rating: '★★★★★', 
    title: 'Pencerahan', 
    quote: '"Aplikasinya sangat membantu dalam mengelola stres kerja..."', 
    name: 'David', 
    info: 'Karyawan Swasta, 28' 
  },
  { 
    rating: '★★★★☆', 
    title: 'Sangat Membantu', 
    quote: '"Desainnya yang ramah membuat journaling menjadi lebih menyenangkan."', 
    name: 'Santi', 
    info: 'Freelancer, 30' 
  },
];

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

const goToArticles = () => {
  router.push('/articles');
};

const initialTestimonialsCount = 3;
const loadMoreStep = 3;
const visibleCount = ref(initialTestimonialsCount);

const visibleTestimonials = computed(() => {
  return testimonials.slice(0, visibleCount.value);
});

const hasMoreTestimonials = computed(() => {
  return visibleCount.value < testimonials.length;
});

const loadMoreTestimonials = () => {
  visibleCount.value += loadMoreStep;
  if (visibleCount.value > testimonials.length) {
    visibleCount.value = testimonials.length;
  }
};
</script>

<template>
  <div class="bg-[#ffe9ec] min-h-screen font-sans text-gray-700 pb-20">

    <div v-if="!selectedPdf">
      
      <section class="px-6 pt-0 pb-12 md:pt-0 md:pb-8">
        <div class="max-w-6xl mx-auto flex flex-row items-start md:items-start gap-4 md:gap-12">
          
          <div class="flex-1 pt-8 md:pt-14">
            <h2 class="text-[#d86478] font-bold text-sm md:text-xl mb-1 md:mb-2">MindMate</h2>
            
            <h1 class="text-2xl md:text-5xl font-bold text-[#d86478] leading-tight mb-3 md:mb-6">
              Teman Digital untuk <br class="hidden md:block"> Kesehatan Mentalmu
            </h1>
            
            <p class="text-gray-600 mb-4 md:mb-8 text-xs md:text-lg leading-relaxed">
              Hidup gak selalu mudah. Mindmate hadir untuk menemanimu merawat kesehatan mentalmu.
            </p>
          </div>

          <div class="w-[35%] md:w-1/3 flex md:max-w-sm justify-center flex-shrink-0 -mt-0 md:-mt-0 z-10">
            <img 
              :src="bungaotak" 
              alt="Ilustrasi Otak Bunga" 
              class="w-full h-auto object-contain" 
            />
          </div>

        </div>
      </section>

      <section class="px-6 py-8">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-white/50 p-8 rounded-3xl backdrop-blur-sm border border-white/60">
          <div class="bg-white rounded-3xl overflow-hidden shadow-md flex justify-center p-6">
            <img :src="image1" alt="mindmate" class="object-contain w-[2/3] h-full" />
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

      <section class="px-6 py-8">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-[#d86478] mb-2">Temukan Fitur yang membantumu</h2>
          <p class="text-gray-500 mb-12">Fitur Your MindMate</p>

          <div class="space-y-6">
            <div 
              v-for="(feature, idx) in features" 
              :key="idx" 
              class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div class="w-16 h-16 bg-[#ffe9ec] rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                {{ feature.icon }}
              </div>
              <div class="flex-grow">
                <h3 class="text-xl font-bold text-[#d86478] mb-2">{{ feature.title }}</h3>
                <p class="text-gray-500 text-sm leading-relaxed">{{ feature.desc }}</p>
              </div>
              
              <button 
                @click="router.push(feature.path)"
                class="bg-[#ffe9ec] text-[#d86478] px-6 py-2 rounded-full text-sm font-bold hover:bg-[#d86478] hover:text-white transition"
              >
                Explore
              </button>

            </div>
          </div>
        </div>
      </section>

      <section class="px-6 py-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-[#d86478] mb-12">Tips Self Care Harian</h2>

          <div class="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div class="rounded-3xl overflow-hidden shadow-lg bg-white p-0 flex justify-center">
               <img :src="image2" alt="morning" class="w-[2/3] h-full object-contain" />
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
            <div class="order-1 md:order-2 rounded-3xl overflow-hidden shadow-lg bg-white p-0 flex justify-center">
               <img :src="image3" alt="your passion" class="w-[2/3] h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 py-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-2xl font-bold text-[#d86478] mb-10 text-center">Apa Kata Pengguna?</h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div 
              v-for="(t, index) in visibleTestimonials"
              :key="index"
              class="bg-white p-8 rounded-2xl shadow hover:-translate-y-2 transition duration-300"
            >
              <div class="flex text-yellow-400 mb-4">{{ t.rating }}</div>
              <h3 class="font-bold text-gray-800 mb-2">{{ t.title }}</h3>
              <p class="text-gray-500 text-sm italic mb-6">{{ t.quote }}</p>
              <div class="flex items-center gap-3 border-t pt-4">
                <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p class="text-sm font-bold text-[#d86478]">{{ t.name }}</p>
                  <p class="text-xs text-gray-400">{{ t.info }}</p>
                </div>
              </div>
            </div>
            </div>
          
          <div class="text-center mt-10" v-if="hasMoreTestimonials">
            <button 
              @click="loadMoreTestimonials"
              class="border-2 border-[#d86478] text-[#d86478] px-8 py-3 rounded-full font-bold hover:bg-[#d86478] hover:text-white transition"
            >
              Lihat Lebih Banyak Testimoni
            </button>
          </div>

        </div>
      </section>

      <section class="px-6 py-8" id="article-section">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-[#d86478] mb-2">Artikel & Insight Terbaru</h2>
            <p class="text-gray-500">Bacaan ringan untuk bantu kamu memahami diri</p>
          </div>

          <div class="grid grid-cols-1 px-5 md:px-0 md:grid-cols-4 gap-[30px] max-w-[1200px] mx-auto">
            <div 
              v-for="(item, index) in articles" 
              :key="index"
              @click="openArticle(item.file)" 
              class="bg-white p-6 rounded-2xl shadow cursor-pointer group hover:shadow-xl transition duration-300"
            >
              <div class="bg-[#ffe9ec] h-[160px] rounded-xl overflow-hidden mb-6">
                <iframe
                  :src="item.file + '#page=1'"
                  class="w-full h-full"
                ></iframe>
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
    <div v-else class="max-w-6xl mx-auto px-6 py-10">
      <button 
        @click="closeArticle" 
        class="bg-transparent border-none text-[#d86478] font-bold text-base cursor-pointer mb-5 flex items-center gap-2 hover:underline"
      >
        ← Kembali ke Home
      </button>
      
      <div class="w-full h-[85vh] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] bg-white">
        <iframe :src="selectedPdf" title="PDF Reader" class="w-full h-full border-none"></iframe>
      </div>
    </div>

  </div>
</template>