<template>
    <Navbar />
    <router-view />
    <Footer v-if="!$route.meta.hideFooter" />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>