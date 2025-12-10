<template>
  <div class="w-full bg-[#ffe9ec]">

    <!-- HERO -->
    <section class="w-full bg-white py-16 text-center px-4">
      <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
      <p class="max-w-xl mx-auto text-gray-600">
        Have questions or need assistance? Fill out the form or reach us through the contact information below.
      </p>
    </section>

    <!-- MAIN CONTENT -->
    <section class="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

      <!-- CONTACT INFO -->
      <div>
        <h2 class="text-3xl font-bold mb-6">Get in Touch</h2>

        <div class="mb-6">
          <h3 class="text-xl font-semibold">Email</h3>
          <a
            href="mailto:hell0@mindmate.id"
            class="text-gray-600 hover:text-[#d86478] underline">
            hello@mindmate.id
            </a>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold">Phone</h3>
          <a
            href="tel:+6285161726522"
            class="text-gray-600 hover:text-[#d86478] underline">
            +62 851-6172-6522
          </a>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold">Office Address</h3>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Kontrakan+Simultas+(Teknik+Perkapalan)"
            target="_blank"
            class="text-gray-600 hover:text-[#d86478] underline">
            Jl. Giri Mulyo RT.24
          </a>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold">Working Hours</h3>
          <p class="text-gray-600">Mon – Fri, 09.00 – 17.00</p>
        </div>
      </div>

      <!-- CONTACT FORM -->
      <div>
        <h2 class="text-3xl font-bold mb-6">Send Us a Message</h2>

        <form @submit.prevent="submitForm" class="space-y-5">

          <div>
            <label class="font-semibold">Full Name</label>
            <input 
              v-model="form.name"
              type="text" 
              placeholder="Enter your name"
              class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div>
            <label class="font-semibold">Email Address</label>
            <input 
              v-model="form.email"
              type="email" 
              placeholder="Enter your email"
              class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div class="relative">
            <label class="font-semibold block mb-1">Subject</label>
            
            <button 
              type="button"
              @click="isDropdownOpen = !isDropdownOpen"
              class="mt-1 w-full px-4 py-2 border rounded-lg bg-white text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
              :class="isDropdownOpen ? 'border-pink-300 ring-2 ring-pink-300' : 'border-gray-200'"
            >
              <span :class="form.subject ? 'text-black' : 'text-gray-400'">
                {{ form.subject || 'Select a subject' }}
              </span>

              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5 text-gray-500 transition-transform duration-200"
                :class="{ 'rotate-180': isDropdownOpen }"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>

            <div 
              v-if="isDropdownOpen"
              class="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-xl border border-pink-100 overflow-hidden"
            >
              <ul class="py-1">
                <li 
                  v-for="option in subjectOptions" 
                  :key="option"
                  @click="selectOption(option)"
                  class="px-4 py-2 text-gray-600 hover:bg-[#ffe9ec] hover:text-[#d86478] cursor-pointer transition-colors duration-200 flex items-center justify-between"
                >
                  {{ option }}
                  
                  <span v-if="form.subject === option" class="text-[#d86478] font-bold">✓</span>
                </li>
              </ul>
            </div>
            
            <div v-if="isDropdownOpen" @click="isDropdownOpen = false" class="fixed inset-0 z-0 bg-transparent cursor-default"></div>
          </div>
          <div>
            <label class="font-semibold">Message</label>
            <textarea
              v-model="form.message"
              placeholder="Write your message here..."
              class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="w-full bg-[#d86478] text-white py-2 rounded-lg hover:bg-[#c05567] transition duration-200 shadow-md"
          >
            Submit
          </button>

        </form>
      </div>

    </section>

    <!-- MAPS SECTION -->
    <section class="max-w-6xl mx-auto px-6 pb-20">
      <h2 class="text-3xl font-bold mb-6">Our Location</h2>

      <iframe
        class="w-full h-[350px] rounded-lg shadow"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.799873054164!2d116.89003317367194!3d-1.155381098833557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14f0047a9df31%3A0xe2bd321662cd0b12!2sKontrakan%20Simultas%20(Teknik%20Perkapalan)!5e1!3m2!1sen!2sid!4v1763077909438!5m2!1sen!2sid" 
        loading="lazy"
      ></iframe>
    </section>

  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isDropdownOpen = ref(false); 
const subjectOptions = ["General Inquiry", "Technical Support", "Feedback"]; 

const selectOption = (value) => {
  form.subject = value;     
  isDropdownOpen.value = false;
};

const submitForm = () => {
  console.log("Form submitted:", form);
  alert("Thank you! Your message has been sent.");
};
</script>
