<script setup>
import { ref } from 'vue';

// State untuk mengontrol dropdown Features
const isFeaturesOpen = ref(false);

const toggleFeatures = () => {
  isFeaturesOpen.value = !isFeaturesOpen.value;
};
</script>

<template>
  <footer class="bg-[#ffd2d8] mt-0 py-10 font-sans text-gray-700">

    <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">

      <div>
        <h1 class="text-[#d86478] font-bold text-xl">MINDMATE</h1>
        <p class="text-sm mt-2 text-gray-600">Teman setia perjalanan kesehatan mentalmu.</p>
      </div>

      <div>
        <h3 class="font-bold mb-3 text-gray-800">Quick Links</h3>
        <ul class="space-y-2">

          <li>
            <router-link to="/home" class="hover:text-[#d86478] hover:underline transition-colors">Home</router-link>
          </li>

          <li>
            <router-link to="/about" class="hover:text-[#d86478] hover:underline transition-colors">About Us</router-link>
          </li>

          <li>
            <button 
              @click="toggleFeatures" 
              class="flex items-center gap-2 hover:text-[#d86478] hover:underline transition-colors focus:outline-none w-full text-left"
            >
              Features
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="transition-transform duration-300"
                :class="{ 'rotate-180': isFeaturesOpen }"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            <ul v-if="isFeaturesOpen" class="pl-4 mt-2 space-y-2 border-l-2 border-[#d86478]/30 ml-1">
              <li>
                <router-link to="/features/mood-journal" class="text-sm hover:text-[#d86478] block">Mood Journal</router-link>
              </li>
              <li>
                <router-link to="/features/self-reflection" class="text-sm hover:text-[#d86478] block">Refleksi Diri</router-link>
              </li>
              <li>
                <router-link to="/features/mood-tracker" class="text-sm hover:text-[#d86478] block">Mood Tracker</router-link>
              </li>
              <li>
                <router-link to="/features/positive-quotes" class="text-sm hover:text-[#d86478] block">Quotes Positif</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/articles" class="hover:text-[#d86478] hover:underline transition-colors">Articles</router-link>
          </li>

          <li>
            <router-link to="/contact" class="hover:text-[#d86478] hover:underline transition-colors">Contact</router-link>
          </li>

        </ul>
      </div>

      <div>
        <h3 class="font-bold mb-3 text-gray-800">Support & Resources</h3>
        <ul class="space-y-2">

          <li>
            <router-link to="/faq" class="hover:text-[#d86478] hover:underline transition-colors">FAQ</router-link>
          </li>

          <li>
            <a
              href="https://www.unicef.org/indonesia/id/topics/mental-health"
              target="_blank"
              class="hover:text-[#d86478] hover:underline transition-colors"
              >
              Mental Health Resources
            </a>
          </li>

          <li>
            <router-link to="/privacy-policy" class="hover:text-[#d86478] hover:underline transition-colors">
              Privacy Policy
            </router-link>
          </li>

          <li>
            <router-link to="/terms" class="hover:text-[#d86478] hover:underline transition-colors">
              Terms & Conditions
            </router-link>
          </li>

        </ul>
      </div>

      <div>
        <h3 class="font-bold mb-3 text-gray-800">Contact</h3>
        <p class="text-gray-600 mb-2 text-sm">Ada pertanyaan? Hubungi kami.</p>
        <p class="hover:text-[#d86478] hover:underline cursor-pointer font-medium">
          <a href="mailto:hello@mindmate.id">hello@mindmate.id</a>
        </p>
      </div>

    </div>

    <div class="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[#d86478]/20 text-center text-sm text-gray-500">
      &copy; 2025 MindMate.
    </div>
  </footer>
</template>