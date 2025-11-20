<template>
  <div class="w-full bg-[#FFE9E9] pb-20">

    <!-- Top Section with Image -->
    <section class="max-w-5xl mx-auto px-6 pt-20 flex flex-col md:flex-row items-center gap-10">
      <!-- IMAGE 1 -->
      <img
        src="../assets/aboutus-img1.png"
        alt="MindMate Illustration"
        class="w-72 md:w-80"
      />

      <div class="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-md">
        <h2 class="text-2xl font-semibold text-gray-800 mb-3">About MindMate</h2>
        <p class="text-gray-600 leading-relaxed">
          <span class="font-semibold">Teman Digital untuk Kesehatan Mental</span><br><br>
          MindMate hadir sebagai ruang aman untuk mengenal diri sendiri, mengelola stres,
          dan tumbuh jadi pribadi yang lebih bahagia.
        </p>
      </div>
    </section>

    <!-- Our Story -->
    <section class="max-w-5xl mx-auto px-6 mt-20 flex flex-col md:flex-row items-center gap-10">
      <div class="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-md">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Our Story</h3>
        <p class="text-gray-600 leading-relaxed">
          MindMate lahir dari keinginan untuk membantu remaja dan mahasiswa memahami
          perasaan mereka sendiri. Kami percaya bahwa kesehatan mental itu sangat penting, 
          dan setiap orang membutuhkan ruang aman untuk bercerita, mendengarkan, serta dipahami.
          <br><br>
          Dengan tekanan kuliah, sosial, dan tuntutan hidup sehari-hari, banyak anak muda yang
          merasa cemas, lelah, atau bahkan kehilangan arah. MindMate hadir sebagai tempat bagi 
          mereka untuk kembali memahami diri.
          <br><br>
          Kami ingin setiap pengguna merasa diterima apa adanya. Karena di MindMate, tidak ada 
          yang harus sempurna—cukup jadi dirimu sendiri.
        </p>
      </div>

      <!-- IMAGE 2 -->
      <img
        src="../assets/aboutus-img2.png"
        alt="Our Story Illustration"
        class="w-72 md:w-80"
      />
    </section>

    <!-- Visi & Misi -->
    <section class="max-w-4xl mx-auto px-6 mt-20">
      <div class="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-md text-center">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">VISI</h3>
        <p class="text-gray-600 mb-8">
          Membangun generasi muda yang sadar akan pentingnya kesehatan mental, mampu memahami 
          diri sendiri, dan tumbuh menjadi pribadi yang bahagia dan seimbang.
        </p>

        <h3 class="text-xl font-semibold text-gray-800 mb-4">MISI</h3>
        <ul class="text-gray-600 space-y-2 text-left list-disc pl-6">
          <li>Menyediakan ruang refleksi pribadi yang aman dan nyaman.</li>
          <li>Mendampingi proses pemahaman diri.</li>
          <li>Menyebarkan edukasi dan kesadaran tentang kesehatan mental.</li>
          <li>Mendorong self-love dan self-growth.</li>
          <li>Membangun komunitas positif dan suportif.</li>
          <li>Menghadirkan pengalaman digital yang manusiawi.</li>
        </ul>
      </div>
    </section>

    <!-- What Makes Special -->
    <section class="max-w-4xl mx-auto px-6 mt-20">
      <div class="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-md">
        <h3 class="text-xl font-semibold text-center text-gray-800 mb-6">
          What Makes MindMate Spesial
        </h3>

        <ul class="text-gray-600 space-y-3 list-decimal pl-6">
          <li><span class="font-medium">Friendly Design</span> — Tampilan lembut untuk menemani hari-hari berat.</li>
          <li><span class="font-medium">Personal Space</span> — Tempat aman untuk refleksi diri.</li>
          <li><span class="font-medium">Daily Balance</span> — Bantu menjaga keseimbangan emosi.</li>
          <li><span class="font-medium">Positive Growth</span> — Dorongan kecil untuk berkembang setiap hari.</li>
        </ul>
      </div>
    </section>

    <!-- Bottom Image + CTA -->
    <section class="max-w-3xl mx-auto px-6 mt-20 text-center">
      <!-- IMAGE 3 -->
      <img 
        src="../assets/aboutus-img3.png"
        alt="Meditation Illustration"
        class="w-100 mx-auto"
      />

      <p class="text-gray-700 mt-6 italic">
        “Kami percaya bahwa setiap langkah kecil menuju ketenangan itu berarti.” <br>
        Yuk, tumbuh bersama MindMate
      </p>

        <button 
        @click="$router.push('/login')" 
        class="border-2 border-[#d86478] text-[#d86478] bg-pink/30 px-8 py-3 rounded-full font-bold hover:bg-[#d86478] hover:text-white transition duration-300 backdrop-blur-sm"
        >
        Start Your Journey
        </button>
    </section>

  </div>
</template>

<script setup>
</script>

<style scoped>
</style>