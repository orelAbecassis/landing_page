<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-dark-900 text-gray-100 selection:bg-primary-500 selection:text-white font-sans">
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="transition-all duration-700 ease-out"
        enter-from-class="opacity-0 blur-md scale-95"
        enter-to-class="opacity-100 blur-0 scale-100"
        leave-active-class="transition-all duration-500 ease-in"
        leave-from-class="opacity-100 blur-0 scale-100"
        leave-to-class="opacity-0 blur-md scale-105"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>
