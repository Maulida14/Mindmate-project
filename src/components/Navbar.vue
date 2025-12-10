<template>
  <nav class="sticky top-0 z-[999] w-full bg-[#ffd2d8]/90 backdrop-blur-md text-[#333] shadow-sm transition-all duration-300">
    <div class="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">

      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2">
        <img 
          src="../assets/logo-mindmate.png" 
          alt="MindMate Logo"
          class="h-9 w-auto object-contain"
        />
      </router-link>


      <!-- Button Mobile -->
      <button 
      @click="isOpen = !isOpen" 
      class="md:hidden text-[#d86478] p-1 rounded-md hover:bg-white/50 transition-all duration-300 focus:outline-none"
      :class="isOpen ? 'rotate-90' : 'rotate-0'"
    >
      <svg v-if="!isOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-12 font-medium items-center">
        <router-link to="/home" class="hover:text-[#d86478] transition-all py-1 border-b-2 hover:border-[#d86478] border-transparent" active-class="text-[#d86478] font-bold border-[#d86478]">Home</router-link>
        <router-link to="/about" class="hover:text-[#d86478] transition-all py-1 border-b-2 hover:border-[#d86478] border-transparent" active-class="text-[#d86478] font-bold border-[#d86478]">About Us</router-link>

        <!-- Features -->
        <li class="relative group cursor-pointer h-full py-1">
          <span 
            class="flex items-center transition-all border-b-2"
            :class="$route.path.includes('/features') 
              ? 'text-[#d86478] font-bold border-[#d86478]' 
              : 'border-transparent hover:text-[#d86478]'"
          >
            Features
            <svg class="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
                 :class="$route.path.includes('/features') ? 'stroke-2' : ''"
                 fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>

          <ul class="absolute top-6 left-0 w-52 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-pink-100 overflow-hidden
                     opacity-0 pointer-events-none group-hover:opacity-100
                     group-hover:pointer-events-auto transition-all duration-300 transform origin-top z-[9999] mt-2">
            
            <router-link to="/features/mood-journal" active-class="bg-[#ffe9ec] text-[#d86478] font-bold" class="block px-4 py-3 hover:bg-[#ffe9ec] hover:text-[#d86478] transition">Mood Journal</router-link>
            <router-link to="/features/self-reflection" active-class="bg-[#ffe9ec] text-[#d86478] font-bold" class="block px-4 py-3 hover:bg-[#ffe9ec] hover:text-[#d86478] transition">Refleksi Diri</router-link>
            <router-link to="/features/mood-tracker" active-class="bg-[#ffe9ec] text-[#d86478] font-bold" class="block px-4 py-3 hover:bg-[#ffe9ec] hover:text-[#d86478] transition">Mood Tracker</router-link>
            <router-link to="/features/positive-quotes" active-class="bg-[#ffe9ec] text-[#d86478] font-bold" class="block px-4 py-3 hover:bg-[#ffe9ec] hover:text-[#d86478] transition">Quotes Positif</router-link>
          </ul>
        </li>

        <router-link to="/articles" class="hover:text-[#d86478] transition-all py-1  border-b-2 hover:border-[#d86478] border-transparent" active-class="text-[#d86478] font-bold border-[#d86478]">Article</router-link>
        <router-link to="/contact" class="hover:text-[#d86478] transition-all py-1 border-b-2 hover:border-[#d86478] border-transparent" active-class="text-[#d86478] font-bold border-[#d86478]">Contact</router-link>
      </ul>

      <!-- LOGIN / PROFILE DESKTOP -->
      <div class="relative hidden md:block">

        <!-- Belum Login -->
        <router-link
          v-if="!user"
          to="/login"
          class="marker:border-2 border-[#d86478] text-[#d86478] bg-pink30 px-8 py-3 rounded-full font-bold hover:bg-[#d86478] hover:text-white transition duration-300 backdrop-blur-sm"
        >
          Login
        </router-link>

        <!-- Sudah Login -->
        <router-link
          v-else
          to="/dashboard"
          class="flex items-center gap-2 hover:text-[#d86478] transition"
        >
          <img 
            v-if="user.avatar" 
            :src="user.avatar" 
            @error="user.avatar = null"
            class="w-8 h-8 rounded-full border border-pink-300 object-cover"
            alt="Profile"
          />

          <div 
            v-else 
            class="w-8 h-8 rounded-full bg-[#d86478] text-white flex items-center justify-center font-bold text-sm border border-pink-300"
          >
            {{ getInitials(user.name) }}
          </div>
          <span class="font-semibold">{{ user.name || 'User' }}</span>
        </router-link>

      </div>

    </div>

    <!-- MOBILE MENU -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isOpen" class="md:hidden bg-white/95 backdrop-blur-xl border-t absolute w-full left-0 shadow-xl z-50 rounded-b-2xl overflow-hidden">
        
        <router-link 
          to="/home" @click="close" active-class="text-[#d86478] bg-pink-50 font-bold border-[#d86478] pl-6" class="block px-4 py-3 border-l-4 border-transparent hover:bg-pink-50 hover:pl-6 transition-all duration-300">Home</router-link>

        <router-link 
          to="/about" @click="close" active-class="text-[#d86478] bg-pink-50 font-bold border-[#d86478] pl-6" class="block px-4 py-3 border-l-4 border-transparent hover:bg-pink-50 hover:pl-6 transition-all duration-300">About Us</router-link>

        <button 
          @click="featuresOpen = !featuresOpen" class="w-full flex justify-between px-4 py-3 font-semibold border-l-4 border-transparent hover:bg-pink-50 hover:pl-6 transition-all duration-300" :class="{ 'text-[#d86478]': $route.path.includes('/features') }"
        >
          Features
          <span class="transition-transform duration-300" :class="featuresOpen ? 'rotate-180' : ''" >⌄</span>
        </button>

        <div v-show="featuresOpen" class="bg-gray-50/50 shadow-inner transition-all duration-300">
          
          <router-link 
            to="/features/mood-journal" @click="close" active-class="text-[#d86478] font-bold bg-pink-100 pl-10" class="block pl-8 pr-4 py-2 text-sm text-gray-600 hover:text-[#d86478] hover:bg-pink-50 hover:pl-10 transition-all duration-300">Mood Journal</router-link>

          <router-link 
            to="/features/self-reflection" @click="close" active-class="text-[#d86478] font-bold bg-pink-100 pl-10" class="block pl-8 pr-4 py-2 text-sm text-gray-600 hover:text-[#d86478] hover:bg-pink-50 hover:pl-10 transition-all duration-300">Refleksi Diri</router-link>

          <router-link 
            to="/features/mood-tracker" @click="close" active-class="text-[#d86478] font-bold bg-pink-100 pl-10" class="block pl-8 pr-4 py-2 text-sm text-gray-600 hover:text-[#d86478] hover:bg-pink-50 hover:pl-10 transition-all duration-300">Mood Tracker</router-link>

          <router-link 
            to="/features/positive-quotes" @click="close" active-class="text-[#d86478] font-bold bg-pink-100 pl-10" class="block pl-8 pr-4 py-2 text-sm text-gray-600 hover:text-[#d86478] hover:bg-pink-50 hover:pl-10 transition-all duration-300">Quotes Positif</router-link>
        </div>

        <router-link 
          to="/articles" @click="close" active-class="text-[#d86478] bg-pink-50 font-bold border-[#d86478] pl-6" class="block px-4 py-3 border-l-4 border-transparent hover:bg-pink-50 hover:pl-6 transition-all duration-300">Article</router-link>

        <router-link 
          to="/contact" @click="close" active-class="text-[#d86478] bg-pink-50 font-bold border-[#d86478] pl-6" class="block px-4 py-3 border-l-4 border-transparent hover:bg-pink-50 hover:pl-6 transition-all duration-300">Contact</router-link>

        <div class="border-t border-pink-100 p-4 bg-pink-50/30">
          <router-link v-if="!user" to="/login" @click="close" class="block w-full text-center bg-[#d86478] text-white font-bold py-3 rounded-xl shadow-md active:scale-95 transition-transform duration-200">
            Login Sekarang
          </router-link>

          <router-link v-else to="/dashboard" class="flex items-center gap-3 font-semibold p-2 bg-white rounded-xl shadow-sm border border-pink-100 active:scale-95 transition-transform duration-200">
            <img v-if="user.avatar" :src="user.avatar" @error="user.avatar = null" class="w-10 h-10 rounded-full border border-pink-300 object-cover" alt="Profile" />
            <div v-else class="w-10 h-10 rounded-full bg-[#d86478] text-white flex items-center justify-center font-bold text-sm border border-pink-300">{{ getInitials(user.name) }}</div>
            <div class="flex flex-col">
              <span class="text-sm text-gray-500 font-normal">Halo,</span>
              <span class="font-bold text-[#d86478]">{{ user.name || 'User' }}</span>
            </div>
          </router-link>
        </div>

      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isOpen = ref(false)
const featuresOpen = ref(false)
const user = ref(null)
const defaultAvatar = '/avatar.png'
const getInitials = (name) => {
  if (!name) return 'U'
  return name.charAt(0).toUpperCase()
}

const syncUser = () => {
  const saved = localStorage.getItem("user")
  user.value = saved ? JSON.parse(saved) : null
}

onMounted(() => {
  syncUser()
  window.addEventListener("user-changed", syncUser)
  window.addEventListener("storage", syncUser)
})

const close = () => {
  isOpen.value = false
  featuresOpen.value = false
}
</script>
