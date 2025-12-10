<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const userName = ref("Sobat MindMate");

//Toggle untuk Sidebar di Mobile
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

//Fungsi Logout
const handleLogout = () => {
  const confirmLogout = confirm("Apakah kamu yakin ingin keluar?")
  if (!confirmLogout) return
  localStorage.removeItem("authToken")
  localStorage.removeItem("user")
  window.dispatchEvent(new Event("user-changed"))
  router.push("/login")
}

</script>

<template>
  <div class="flex h-screen bg-gray-50 font-sans overflow-hidden">

    <div 
      v-if="isSidebarOpen" 
      @click="toggleSidebar"
      class="fixed inset-0 bg-black/50 z-20 md:hidden"
    ></div>

    <aside 
      class="fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-pink-100 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="p-6 border-b border-pink-50 flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold text-[#d86478]">MindMate</h2>
          <p class="text-xs text-gray-400">User Dashboard</p>
        </div>
        <button @click="toggleSidebar" class="md:hidden text-gray-500 hover:text-pink-500">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
        <router-link to="/dashboard" class="flex items-center px-4 py-3 rounded-lg bg-pink-50 text-[#d86478] font-semibold">
          <span class="mr-3">🏠</span> Beranda
        </router-link>
        
        <router-link to="/features/mood-tracker" class="flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-pink-50 hover:text-[#d86478] transition">
          <span class="mr-3">📊</span> Mood Tracker
        </router-link>
        
        <router-link to="/features/mood-journal" class="flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-pink-50 hover:text-[#d86478] transition">
          <span class="mr-3">📝</span> Jurnal Harian
        </router-link>
        
        <router-link to="/articles" class="flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-pink-50 hover:text-[#d86478] transition">
          <span class="mr-3">📖</span> Artikel
        </router-link>

        <router-link to="/features/positive-quotes" class="flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-pink-50 hover:text-[#d86478] transition">
          <span class="mr-3">✨</span> Quotes Positif
        </router-link>
      </nav>

      <div class="p-4 border-t border-pink-50">
        <button 
          @click="handleLogout" 
          class="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          Keluar
        </button>
      </div>
    </aside>


    <main class="flex-1 flex flex-col overflow-hidden relative">
      
      <header class="bg-white border-b border-pink-100 p-4 flex justify-between items-center md:hidden z-10">
        <h1 class="text-xl font-bold text-[#d86478]">MindMate</h1>
        <button @click="toggleSidebar" class="text-gray-600 focus:outline-none">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </header>

      <div class="flex-1 overflow-y-auto p-6 md:p-10 bg-gradient-to-br from-pink-50 to-white">
        
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-800">Halo, {{ userName }}! 👋</h1>
          <p class="text-gray-600 mt-2">Bagaimana perasaanmu hari ini? Jangan lupa untuk mencatatnya ya.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition cursor-pointer group">
            <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition">😊</div>
            <h3 class="font-bold text-gray-800 text-lg">Cek Mood</h3>
            <p class="text-sm text-gray-500 mt-2 mb-4">Lacak perubahan emosimu setiap hari.</p>
            <router-link to="/features/mood-tracker" class="text-[#d86478] font-semibold text-sm hover:underline">Mulai Sekarang &rarr;</router-link>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition cursor-pointer group">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition">📖</div>
            <h3 class="font-bold text-gray-800 text-lg">Tulis Jurnal</h3>
            <p class="text-sm text-gray-500 mt-2 mb-4">Tuangkan pikiranmu agar lebih lega.</p>
            <router-link to="/features/mood-journal" class="text-blue-500 font-semibold text-sm hover:underline">Tulis Sesuatu &rarr;</router-link>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition cursor-pointer group">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition">🧘</div>
            <h3 class="font-bold text-gray-800 text-lg">Baca Artikel</h3>
            <p class="text-sm text-gray-500 mt-2 mb-4">Temukan tips mengelola stres.</p>
            <router-link to="/articles" class="text-green-600 font-semibold text-sm hover:underline">Baca &rarr;</router-link>
          </div>

        </div>

        <div class="bg-[#d86478] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-lg relative overflow-hidden">
          <div class="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          
          <div class="relative z-10 mb-6 md:mb-0">
            <h3 class="text-2xl font-bold mb-2">Butuh Teman Cerita?</h3>
            <p class="text-pink-100 max-w-md">Kami menyediakan daftar kontak profesional dan komunitas yang siap mendengarkanmu.</p>
          </div>
          <router-link 
            to="/contact" 
            class="relative z-10 bg-white text-[#d86478] px-6 py-3 rounded-full font-bold shadow hover:bg-gray-100 transition"
          >
            Hubungi Support
          </router-link>
        </div>

      </div>
    </main>

  </div>
</template>