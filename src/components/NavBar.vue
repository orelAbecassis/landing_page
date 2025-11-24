<script setup>
import { ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { Menu, X } from 'lucide-vue-next'

const { y } = useWindowScroll()
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'À propos', href: '#about' },
  { name: 'Prestations', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[y > 50 ? 'glass py-4' : 'bg-transparent py-6']"
  >
    <div class="container mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="h-28 w-auto transition-transform group-hover:scale-105">
          <img src="/logo.png" alt="AbeWeb" class="h-full w-auto object-contain" />
        </div>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href"
          class="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary-400 after:transition-all hover:after:w-full"
        >
          {{ link.name }}
        </a>
        <a 
          href="#contact" 
          class="px-5 py-2 rounded-full bg-primary-600 text-white font-semibold text-sm hover:bg-primary-500 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
        >
          Me contacter
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-white hover:text-primary-400 transition-colors">
        <Menu v-if="!isMenuOpen" />
        <X v-else />
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-5"
    >
      <div v-if="isMenuOpen" class="absolute top-full left-0 right-0 bg-dark-900/95 backdrop-blur-lg border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href"
          @click="isMenuOpen = false"
          class="text-lg font-medium text-gray-300 hover:text-primary-400 transition-colors"
        >
          {{ link.name }}
        </a>
        <a 
          href="#contact" 
          @click="isMenuOpen = false"
          class="mt-2 text-center px-5 py-3 rounded-lg bg-primary-600 text-white font-bold hover:bg-primary-500 transition-colors"
        >
          Me contacter
        </a>
      </div>
    </transition>
  </nav>
</template>
