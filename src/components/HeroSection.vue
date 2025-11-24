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
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-900 to-dark-900"></div>
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[128px] animate-pulse-slow"></div>
    <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-600/20 rounded-full blur-[96px] animate-pulse-slow delay-1000"></div>

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
        <h1 class="text-7xl md:text-9xl font-black tracking-tighter text-white drop-shadow-2xl">
          Orel
          <span class="block">Abecassis</span>
        </h1>

        <!-- Quote -->
        <div class="py-8">
          <p class="text-xl md:text-3xl text-gray-400 font-light italic font-serif relative inline-block">
            <span class="text-primary-500 text-4xl absolute -top-4 -left-8">"</span>
            La créativité, c’est l’intelligence qui s’amuse.
            <span class="text-primary-500 text-4xl absolute -bottom-4 -right-8">"</span>
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <a 
            href="#contact" 
            class="group relative px-10 py-5 bg-primary-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
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
