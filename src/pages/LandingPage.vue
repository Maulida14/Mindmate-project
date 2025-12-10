<template>
  <section class="bg-[#ffecef] min-h-screen pt-0 pb-0">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center">
      
      <!-- Text -->
      <div>
        <h1 class="text-3xl font-bold text-[#d86478] mb-4">MindMate</h1>
        <p class="text-gray-700 leading-relaxed mb-4">
          Teman digital untuk kesehatan mentalmu.  
          Hidup sering kali penuh tekanan — tugas kuliah, ekspektasi, pertemanan,
          atau sekadar rasa cemas tanpa alasan yang jelas.  
          Tapi kamu tidak harus menghadapinya sendirian.
        </p>

        <p class="text-gray-700 leading-relaxed mb-6">
          MindMate hadir sebagai teman digital yang selalu siap mendengarkan
          dan memahami perasaanmu.  
          Mulai langkah kecil untuk menjaga kesehatan mentalmu hari ini.
        </p>

        <router-link
        to="/home"
        class="inline-block bg-[#d86478] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#c04e63] transition transform hover:-translate-y-1"
        >
        Explore Now
        </router-link>
      </div>

      <!-- Image -->
      <div class="flex justify-center">
        <img 
          src="../assets/bunga-otak.png" 
          alt="hero illustration" 
          class="w-[80%] md:w-[90%]"
        />
      </div>

    </div>
  </section>
</template>

<script>
export default {};
</script>