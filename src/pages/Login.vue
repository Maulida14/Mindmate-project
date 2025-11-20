<template>
  <div class="min-h-[calc(100vh-64px)]w-full bg-gradient-to-b from-[#FFE5E8] to-white flex items-center justify-center px-6">

    <div class="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">

      <!-- FORM LOGIN -->
      <div class="bg-white/70 backdrop-blur-md shadow-lg rounded-xl p-8 w-full max-w-sm">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Login</h2>

        <!-- Email -->
        <div class="mb-4">
          <label class="text-gray-700 font-medium">Email</label>
          <input
            type="email"
            class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="Your email"
          />
        </div>

        <!-- Password -->
        <div class="mb-4">
          <label class="text-gray-700 font-medium">Password</label>
          <input
            type="password"
            class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="Your password"
          />
        </div>

        <!-- Button -->
        <button
          class="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-200"
        >
          Sign In
        </button>

        <!-- Forgot -->
        <div class="mt-4 text-right">
          <button class="text-sm text-gray-600 hover:underline">Forgot password?</button>
        </div>
      </div>

      <!-- IMAGE (Right) -->
      <div class="hidden md:block">
        <img
          src="../assets/bunga-otak.png"
          alt="bunga otak"
          class="w-[420px] md:w-[520px]"
        />
      </div>
    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>
</style>