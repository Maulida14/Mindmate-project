<template>
  <section class="bg-[#ffecef] min-h-screen flex flex-col">
    <div class="max-w-6xl mx-auto grid grid-cols-2 gap-6 md:gap-10 px-4">
      
      <!-- Text -->
      <div>
        <h1 class="text-xl md:text-3xl font-bold text-[#d86478] mt-10 mb-4">MindMate</h1>
        <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Teman digital untuk kesehatan mentalmu.  
        </p>

        <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          MindMate hadir sebagai teman digital yang selalu siap mendengarkan
          dan memahami perasaanmu.  
          Mulai langkah kecil untuk menjaga kesehatan mentalmu hari ini.
        </p>

        <router-link
        to="/home"
        class="inline-block bg-[#d86478] text-white px-4 py-2 text-sm rounded-full font-semibold shadow-lg hover:bg-[#c04e63] transition transform hover:-translate-y-1"
        >
        Explore Now
        </router-link>
      </div>

      <!-- Image -->
      <div class="flex justify-center self-start">
        <img 
          src="../assets/bunga-otak.png" 
          alt="hero illustration" 
          class="w-[70%] md:w-[80%]"
        />
      </div>

    </div>
  </section>
</template>

<script>
export default {};
</script>