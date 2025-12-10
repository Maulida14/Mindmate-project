<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import bungaotak from '../assets/bunga-otak.png';

const router = useRouter();

// 1. Variabel untuk menampung input user
const email = ref('');
const password = ref('');

const isForgotPassword = ref(false);
const resetEmail = ref('');

// 2. Fungsi saat tombol Sign In diklik
const handleLogin = () => {
  if (!email.value || !password.value) {
    alert("Harap isi email dan password!");
    return;
  }

  // --- Logika Login ---
  console.log("Login Berhasil:", email.value);

  // A. simpan tiket masuk
  localStorage.setItem('authToken', 'token-rahasia-user-123');

  // B. simpan data useruntuk navbar
  localStorage.setItem("user", JSON.stringify({
    name: email.value.split("@")[0],
    email: email.value,
    avatar: "/avatar.png"

  }));

  // trigger navbar update
window.dispatchEvent(new Event("user-changed"))


  // C. pindah ke dashboard
  router.push('/dashboard');
};

const handleResetPassword = () => {
  if (!resetEmail.value) {
    alert("Harap masukkan email Anda!");
    return;
  }
  // Simulasi kirim email
  alert(`Link reset password telah dikirim ke ${resetEmail.value}`);
  
  // Kembalikan ke tampilan login
  isForgotPassword.value = false;
  resetEmail.value = '';
};
</script>

<template>
  <section class="min-h-screen bg-[#ffe9ec] px-6 pt-0 pb-12 md:pb-20 font-sans flex flex-row">

    <div class="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-4 md:gap-12">

      <div class="flex-1 md:pt-24 w-full z-10 md:pl-40">
        
        <div class="bg-white/70 backdrop-blur-md shadow-lg rounded-xl p-8 w-full max-w-sm mx-auto md:mx-0 transition-all duration-300">
          
          <div v-if="!isForgotPassword">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
            
            <form @submit.prevent="handleLogin">
               <div class="mb-4">
                  <label class="text-gray-700 font-medium">Email</label>
                  <input v-model="email" type="email" required class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Your email" />
               </div>
               <div class="mb-4">
                  <label class="text-gray-700 font-medium">Password</label>
                  <input v-model="password" type="password" required class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Your password" />
               </div>
               <button type="submit" class="w-full bg-[#d86478] text-white py-2 rounded-lg hover:bg-[#c05567] transition duration-200 shadow-md">Sign In</button>
            </form>
            
            <div class="mt-4 text-right">
              <button 
                @click="isForgotPassword = true" 
                class="text-sm text-gray-600 hover:text-[#d86478] hover:underline transition"
              >
                Forgot password?
              </button>
            </div>
          </div>

          <div v-else>
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">Reset Password</h2>
            <p class="text-sm text-gray-500 mb-6">Masukkan email Anda, kami akan mengirimkan link untuk mereset password.</p>
            
            <form @submit.prevent="handleResetPassword">
              <div class="mb-6">
                <label class="text-gray-700 font-medium">Email Address</label>
                <input 
                  v-model="resetEmail" 
                  type="email" 
                  required 
                  class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" 
                  placeholder="name@example.com" 
                />
              </div>
              
              <button type="submit" class="w-full bg-[#d86478] text-white py-2 rounded-lg hover:bg-[#c05567] transition duration-200 shadow-md">
                Send Reset Link
              </button>
            </form>

            <div class="mt-4 text-center">
              <button 
                @click="isForgotPassword = false" 
                class="text-sm text-gray-500 hover:text-gray-800 flex items-center justify-center gap-1 mx-auto transition"
              >
                ← Back to Login
              </button>
            </div>
          </div>

        </div>
        </div>

      <div class="w-1/2 mx-auto md:mx-0 md:w-1/3 flex justify-center flex-shrink-0 mt-0 md:-mt-0 mb-4 md:mb-0 relative z-0">
        <img
          :src="bungaotak"
          alt="bunga otak"
          class="w-full h-auto object-contain"
        />
      </div>

    </div>

  </section>
</template>