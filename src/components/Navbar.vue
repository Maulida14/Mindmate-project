<template>
  <nav class="w-full bg-[#ffd2d8] text-[#333] shadow-sm">
    <div class="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">

      <!-- Logo -->
      <h1 class="text-xl font-semibold text-[#d86478]">MINDMATE</h1>

      <!-- Menu -->
      <ul class="hidden md:flex gap-8 font-medium relative">

        <li>
          <router-link to="/home" class="hover:text-[#d86478]">
            Home
          </router-link>
        </li>

        <li>
          <router-link to="/about" class="hover:text-[#d86478]">
            About Us
          </router-link>
        </li>

        <li class="relative group cursor-pointer flex items-center gap-1">

          <span class="hover:text-[#d86478] flex items-center">
            Features
            <svg
              class="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
          <ul
            class="absolute left-0 top-6 w-44 bg-white rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200"
          >
            <li>
              <router-link
                to="/features/mood-journal"
                class="block px-4 py-2 hover:bg-[#ffd2d8]"
              >Mood Journal</router-link>
            </li>
            <li>
              <router-link
                to="/features/self-reflection"
                class="block px-4 py-2 hover:bg-[#ffd2d8]"
              >Refleksi Diri</router-link>
            </li>
            <li>
              <router-link
                to="/features/mood-tracker"
                class="block px-4 py-2 hover:bg-[#ffd2d8]"
              >Mood Tracker</router-link>
            </li>
            <li>
              <router-link
                to="/features/positive-quotes"
                class="block px-4 py-2 hover:bg-[#ffd2d8]"
              >Quotes Positif</router-link>
            </li>
          </ul>
        </li>

        <li>
          <router-link to="/articles" class="hover:text-[#d86478]">
            Article
          </router-link>
        </li>

        <li>
          <router-link to="/contact" class="hover:text-[#d86478]">
            Contact
          </router-link>
        </li>

      </ul>

      <!-- Login Button -->
      <router-link
        to="/login"
        class="hidden md:block bg-white px-4 py-1 rounded-md border text-[#333] hover:bg-gray-100 transition"
        >
        Login
      </router-link>
    </div>
  </nav>
</template>