<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

const roles = ['Chef de Projet', 'Développeur', 'Community Manager']
const currentRole = ref('')
const roleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
const typingSpeed = 100
const deletingSpeed = 50
const pauseTime = 2000

let timer = null

const typeRole = () => {
  const currentFullRole = roles[roleIndex.value]

  if (isDeleting.value) {
    currentRole.value = currentFullRole.substring(0, charIndex.value - 1)
    charIndex.value--
  } else {
    currentRole.value = currentFullRole.substring(0, charIndex.value + 1)
    charIndex.value++
  }

  if (!isDeleting.value && charIndex.value === currentFullRole.length) {
    isDeleting.value = true
    timer = setTimeout(typeRole, pauseTime)
  } else if (isDeleting.value && charIndex.value === 0) {
    isDeleting.value = false
    roleIndex.value = (roleIndex.value + 1) % roles.length
    timer = setTimeout(typeRole, typingSpeed)
  } else {
    timer = setTimeout(typeRole, isDeleting.value ? deletingSpeed : typingSpeed)
  }
}

onMounted(() => {
  typeRole()
})

onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <!-- Background Effects -->
    <!-- Background Effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Top Right Wave -->
      <div 
        class="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] opacity-60"
        v-motion
        :initial="{ opacity: 0, x: 100, y: -100 }"
        :enter="{ opacity: 0.6, x: 0, y: 0, transition: { duration: 1500, ease: 'easeOut' } }"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
          <path fill="url(#grad1)" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.8,33.6C59.4,44.1,47.9,51.4,36.4,56.6C24.9,61.8,13.4,64.9,1.5,62.3C-10.4,59.7,-22.7,51.4,-33.8,43.2C-44.9,35,-54.8,26.9,-62.8,16.2C-70.8,5.5,-76.9,-7.8,-74.7,-20.2C-72.5,-32.6,-62,-44.1,-50.3,-52.1C-38.6,-60.1,-25.7,-64.6,-12.6,-66.8C0.5,-69,13.6,-68.9,30.5,-76.4Z" transform="translate(100 100)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#a78bfa;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Bottom Left Wave -->
      <div 
        class="absolute -bottom-[10%] -left-[10%] w-[70%] h-[70%] opacity-60"
        v-motion
        :initial="{ opacity: 0, x: -100, y: 100 }"
        :enter="{ opacity: 0.6, x: 0, y: 0, transition: { duration: 1500, ease: 'easeOut', delay: 300 } }"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
          <path fill="url(#grad2)" d="M41.3,-70.5C54.4,-63.7,66.4,-55.2,75.3,-44.1C84.2,-33,90,-19.3,88.4,-6.1C86.8,7.1,77.8,19.8,67.8,30.3C57.8,40.8,46.8,49.1,35.3,55.5C23.8,61.9,11.9,66.4,-0.6,67.4C-13.1,68.4,-26.2,65.9,-37.6,59.2C-49,52.5,-58.7,41.6,-65.4,29.2C-72.1,16.8,-75.8,2.9,-73.4,-9.8C-71,-22.5,-62.5,-34,-52.2,-42.6C-41.9,-51.2,-29.8,-56.9,-17.6,-60.5C-5.4,-64.1,6.8,-65.6,28.2,-77.3Z" transform="translate(100 100)" />
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#60a5fa;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10 text-center">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
        class="max-w-5xl mx-auto space-y-8"
      >

        <!-- Animated Roles -->
        <div class="h-8 md:h-10 flex items-center justify-center">
          <h2 class="text-lg md:text-2xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
            {{ currentRole }}<span class="animate-pulse text-white">|</span>
          </h2>
        </div>

        <!-- Massive Name -->
        <h1 class="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
          Orel Abecassis
        </h1>

        <!-- Quote -->
        <div class="py-8">
          <p class="text-xl md:text-3xl text-gray-400 font-light italic font-serif relative inline-block">
            <span class="text-primary-500 text-4xl absolute -top-4 -left-8">"</span>
            La créativité, c’est l’intelligence qui s’amuse.
            <span class="text-primary-500 text-4xl absolute -bottom-4 -right-8">"</span>
          </p>
          <p class="text-base md:text-lg text-gray-500 mt-4"> Albert Einstein</p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <a 
            href="#contact" 
            class="group relative px-10 py-5 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
          >
            <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span class="relative flex items-center gap-3">
              Démarrer un projet
              <ArrowRight class="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="#portfolio" 
            class="px-10 py-5 rounded-full border border-white/10 hover:bg-white/5 text-white font-semibold text-lg transition-all hover:border-white/30"
          >
            Voir mon portfolio
          </a>
        </div>
      </div>
    </div>
    
  </section>
</template>
