<script setup>
import { ref } from 'vue';

// State untuk melacak pertanyaan mana yang sedang terbuka
const activeIndex = ref(null);

// Data FAQ 
const faqItems = ref([
  {
    question: "Apa itu MindMate?",
    answer: "MindMate adalah teman setia perjalanan kesehatan mentalmu. Kami menyediakan platform aman untuk pelacakan suasana hati, artikel edukasi, dan akses mudah ke konseling profesional."
  },
  {
    question: "Bagaimana cara menjaga kerahasiaan data saya?",
    answer: "Privasi adalah prioritas kami. Seluruh data percakapan dan catatan jurnal Anda dienkripsi end-to-end. Kami tidak menjual data Anda ke pihak manapun."
  },
  {
    question: "Apakah tersedia layanan darurat 24 jam?",
    answer: "MindMate berfokus pada konseling preventif dan rehabilitatif. Jika Anda dalam keadaan darurat atau membahayakan diri sendiri, harap segera hubungi hotline bunuh diri nasional atau rumah sakit terdekat."
  }
]);

// Fungsi untuk membuka/tutup accordion
const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div class="min-h-screen bg-pink-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-3xl mx-auto">
      
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Frequently Asked <span class="text-pink-500">Questions</span>
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Punya pertanyaan seputar MindMate? Cari jawabannya di sini.
        </p>
      </div>

      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="bg-white border border-pink-100 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full flex justify-between items-center p-5 text-left focus:outline-none bg-white hover:bg-pink-50 transition-colors duration-200"
          >
            <span class="text-lg font-medium text-gray-800" :class="{ 'text-pink-600': activeIndex === index }">
              {{ item.question }}
            </span>
            
            <span class="ml-6 flex-shrink-0">
              <svg 
                class="w-6 h-6 text-pink-400 transform transition-transform duration-200"
                :class="{ 'rotate-180': activeIndex === index }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <div 
            v-show="activeIndex === index" 
            class="p-5 pt-0 text-gray-600 leading-relaxed bg-white border-t border-pink-50"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>

      <div class="mt-10 text-center">
        <p class="text-gray-600">
          Tidak menemukan jawaban? 
          <router-link
            to="/contact"
            class="font-medium text-pink-600 hover:text-pink-500 hover:underline"
            >
            Hubungi Tim Support Kami
          </router-link>
        </p>
      </div>

    </div>
  </div>
</template>