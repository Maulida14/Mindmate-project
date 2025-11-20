<template>
  <footer class="bg-[#ffd2d8] mt-0 py-10">

    <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">

      <div>
        <h1 class="text-[#d86478] font-bold text-xl">MINDMATE</h1>
      </div>

      <div>
        <h3 class="font-semibold mb-2">Quick Links</h3>
        <ul class="space-y-1">

          <li>
            <router-link to="/home" class="hover:underline">Home</router-link>
          </li>

          <li>
            <router-link to="/about" class="hover:underline">About Us</router-link>
          </li>

          <li>
            <router-link to="/features" class="hover:underline">Features</router-link>
          </li>

          <li>
            <router-link to="/articles" class="hover:underline">Articles</router-link>
          </li>

          <li>
            <router-link to="/contact" class="hover:underline">Contact</router-link>
          </li>

        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-2">Support & Resources</h3>
        <ul class="space-y-1">

          <li>
            <router-link to="/faq" class="hover:underline">FAQ</router-link>
          </li>

          <li>
            <router-link to="/resources" class="hover:underline">
              Mental Health Resources
            </router-link>
          </li>

          <li>
            <router-link to="/privacy-policy" class="hover:underline">
              Privacy Policy
            </router-link>
          </li>

          <li>
            <router-link to="/terms" class="hover:underline">
              Terms & Conditions
            </router-link>
          </li>

        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-2">Contact</h3>
        <p class="hover:underline cursor-pointer">
          <a href="mailto:hello@mindmate.id">hello@mindmate.id</a>
        </p>
      </div>

    </div>
  </footer>
</template>