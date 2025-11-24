<script setup>
import { Github, Linkedin, Instagram, Disc } from 'lucide-vue-next'

const socials = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Discord', icon: Disc, href: '#' },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-dark-900 border-t border-white/5 pt-16 pb-8">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="h-12 w-auto">
            <img src="/logo.png" alt="AbeWeb" class="h-full w-auto object-contain" />
          </div>
        </div>

        <!-- Socials -->
        <div class="flex items-center gap-6">
          <a 
            v-for="social in socials" 
            :key="social.name" 
            :href="social.href"
            class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
            :aria-label="social.name"
          >
            <component :is="social.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>

      <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>&copy; {{ currentYear }} Orel Abecassis. Tous droits réservés.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-primary-400 transition-colors">Mentions Légales</a>
          <a href="#" class="hover:text-primary-400 transition-colors">Politique de Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
</template>
