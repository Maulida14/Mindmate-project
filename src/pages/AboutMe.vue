<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import myfoto from '../assets/Maulida-Rahmayanti.jpg';

const skils = [
    'Manajemen waktu',
    'Mudah adaptasi',
    'Komuikasi'
]
</script>

<template>
  <div class="bg-[#ffe9ec] min-h-screen font-sans text-gray-700 pb-20">

    <div v-if="!selectedPdf">
      
      <section class="px-6 pt-0 pb-12 md:pt-0 md:pb-8">
        <div class="max-w-6xl mx-auto flex flex-row items-start md:items-start gap-4 md:gap-12">
          
          <div class="flex-1 pt-8 md:pt-14">
            <h2 class="text-[#d86478] font-bold text-sm md:text-xl mb-1 md:mb-2">My Profil</h2>
            
            <h1 class="text-2xl md:text-5xl font-bold text-[#d86478] leading-tight mb-3 md:mb-6">
              Maulida Rahmayanti
            </h1>
            
            <p class="text-gray-600 mb-4 md:mb-8 text-xs md:text-lg leading-relaxed">
              Mahasiswa Informatika Institut Teknologi Kalimantan Angkatan 2023 .
            </p>
          </div>

          <div class="w-[35%] md:w-1/3 flex md:max-w-sm justify-center flex-shrink-0 -mt-0 md:-mt-0 z-10">
            <img 
              :src="myfoto" 
              alt="Ilustrasi Otak Bunga" 
              class="w-[2/3] object-contain" 
            />
          </div>

        </div>
      </section>
      <div class="grid md:grid-cols-3 gap-6">
            <div 
              v-for="(index) in skils"
              :key="index"
              class="bg-white p-8 rounded-2xl shadow hover:-translate-y-2 transition duration-300"
            >
              <div class="flex text-[#d86478] font-bold mb-4 justify-center">{{ index}}</div>
              
              </div>
            </div>
            </div>
    </div>
</template>

