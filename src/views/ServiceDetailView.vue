<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { services } from '../data/services'
import { ArrowLeft, CheckCircle } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const service = computed(() => {
  return services.find(s => s.id === route.params.id)
})

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div v-if="service" class="min-h-screen bg-dark-900 pt-32 pb-20 px-6">
    <div class="container mx-auto max-w-4xl">
      <!-- Back Button -->
      <button 
        @click="goBack"
        class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
      >
        <ArrowLeft class="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        Retour à l'accueil
      </button>

      <!-- Header -->
      <div class="text-center mb-16" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">
        <div class="w-20 h-20 mx-auto bg-dark-800 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
          <component :is="service.icon" class="w-10 h-10 text-primary-500" />
        </div>
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">{{ service.title }}</h1>
        <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
      </div>

      <!-- Content -->
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Description -->
        <div 
          class="bg-dark-800 rounded-2xl p-8 border border-white/5"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 200 } }"
        >
          <h2 class="text-2xl font-bold text-white mb-6">À propos du service</h2>
          <p class="text-gray-300 leading-relaxed text-lg">
            {{ service.fullDescription }}
          </p>
        </div>

        <!-- Features -->
        <div 
          class="bg-dark-800 rounded-2xl p-8 border border-white/5"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 400 } }"
        >
          <h2 class="text-2xl font-bold text-white mb-6">Ce que cela inclut</h2>
          <ul class="space-y-4">
            <li v-for="feature in service.detailedFeatures" :key="feature" class="flex items-start gap-3">
              <CheckCircle class="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
              <span class="text-gray-300">{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- CTA -->
      <div 
        class="mt-16 text-center"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
      >
        <h3 class="text-2xl font-bold text-white mb-8">Prêt à lancer votre projet ?</h3>
        <router-link 
          to="/#contact" 
          class="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-primary-500/20"
        >
          Demander un devis gratuit
        </router-link>
      </div>
    </div>
  </div>
  <div v-else class="min-h-screen bg-dark-900 flex items-center justify-center text-white">
    Service introuvable
  </div>
</template>
