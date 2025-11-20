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
              class="w-full mt-1 p-3 border rounded-lg"
              required
            />
          </div>

          <div>
            <label class="font-semibold">Email Address</label>
            <input 
              v-model="form.email"
              type="email" 
              placeholder="Enter your email"
              class="w-full mt-1 p-3 border rounded-lg"
              required
            />
          </div>

          <div>
            <label class="font-semibold">Subject</label>
            <select 
              v-model="form.subject"
              class="w-full mt-1 p-3 border rounded-lg"
              required
            >
              <option value="">Select a subject</option>
              <option>General Inquiry</option>
              <option>Technical Support</option>
              <option>Feedback</option>
            </select>
          </div>

          <div>
            <label class="font-semibold">Message</label>
            <textarea
              v-model="form.message"
              placeholder="Write your message here..."
              class="w-full mt-1 p-3 border rounded-lg min-h-[120px]"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
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
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", form);
  alert("Thank you! Your message has been sent.");
};
</script>

<style scoped>
</style>