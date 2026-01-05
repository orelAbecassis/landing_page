<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { services } from '../data/services'
import { ArrowLeft, Check, CheckCircle, Sparkles } from 'lucide-vue-next'

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
  <div v-if="service" class="min-h-screen bg-dark-900 pt-24 pb-12 px-6">
    <div class="container mx-auto max-w-6xl">
      <!-- Back Button -->
      <button 
        @click="goBack"
        class="mb-8 flex items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors group"
      >
        <ArrowLeft class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Retour
      </button>

      <!-- RICH LAYOUT (For Site Vitrine etc.) -->
      <div v-if="service.hero">
        <!-- Hero Section -->
        <div class="text-center mb-24 max-w-4xl mx-auto" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">
          <div class="inline-flex items-center justify-center px-4 py-2 bg-dark-800 rounded-full mb-8 border border-white/10 shadow-lg">
             <Sparkles class="w-4 h-4 text-primary-500 mr-2" />
             <span class="text-sm font-bold tracking-wide text-primary-400">{{ service.hero.subtitle }}</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            {{ service.hero.title.split(' ').slice(0, service.hero.colorStartIndex || 4).join(' ') }}
            <br />
            <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              {{ service.hero.title.split(' ').slice(service.hero.colorStartIndex || 4).join(' ') }}
            </span>
          </h1>
          <p class="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {{ service.hero.description }}
          </p>
        </div>

        <!-- Service Card -->
        <div class="max-w-3xl mx-auto mb-24">
          <div 
            class="bg-dark-800 rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden group hover:border-primary-500/30 transition-colors"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          >
            <!-- Background Icon -->
            <div class="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <component :is="service.icon" class="w-64 h-64" />
            </div>
            
            <div class="relative z-10">
              <div class="flex items-baseline gap-4 mb-6">
                <span class="text-primary-500 font-mono text-2xl font-bold">{{ service.number }}.</span>
                <h2 class="text-3xl md:text-4xl font-bold text-white">{{ service.title }}</h2>
              </div>
              
              <div class="text-xl text-gray-300 italic mb-8 border-l-4 border-primary-500 pl-6 py-2">
                "{{ service.quote }}"
              </div>
              
              <p class="text-gray-400 mb-10 leading-relaxed text-lg">{{ service.description }}</p>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div v-for="(feature, index) in service.detailedFeatures" :key="index" class="flex items-center gap-3">
                  <Check class="w-5 h-5 text-primary-400 shrink-0" />
                  <span class="text-gray-300">{{ feature }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sur Mesure Section -->
        <div 
          v-if="service.surMesure"
          class="bg-dark-800 rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden mb-24"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visible="{ opacity: 1, scale: 1, transition: { delay: 400 } }"
        >
          <!-- Dynamic Background Lines -->
          <div class="absolute inset-0 opacity-20 pointer-events-none">
            <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 L100 0" stroke="url(#grad1)" stroke-width="0.5" />
              <path d="M20 100 L100 20" stroke="url(#grad1)" stroke-width="0.5" />
              <path d="M40 100 L100 40" stroke="url(#grad1)" stroke-width="0.5" />
              <path d="M0 80 L80 0" stroke="url(#grad1)" stroke-width="0.5" />
              <path d="M0 60 L60 0" stroke="url(#grad1)" stroke-width="0.5" />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div class="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-dark-900/50"></div>
          
          <div class="grid md:grid-cols-2 gap-12 relative z-10 items-center">
            <div>
              <span v-if="service.surMesure.subtitle" class="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-bold rounded-full mb-6">
                {{ service.surMesure.subtitle }}
              </span>
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{{ service.surMesure.title }}</h2>
              <p class="text-xl text-gray-300 mb-6 font-medium">{{ service.surMesure.description }}</p>
              <p class="text-gray-400 mb-8 leading-relaxed">{{ service.surMesure.details }}</p>
            </div>
            
            <div class="flex justify-center">
              <div class="w-64 h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl flex items-center justify-center relative rotate-3 hover:rotate-6 transition-transform duration-500 border border-white/5 shadow-2xl shadow-primary-500/10">
                <div class="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"></div>
                <component :is="service.surMesure.icon" class="w-24 h-24 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center py-12" v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }">
          <h3 class="text-3xl md:text-4xl font-bold text-white mb-8">Prêt à aller plus loin ?</h3>
          <a 
            href="#contact" 
            class="inline-block px-10 py-5 bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-primary-600/20"
          >
            Demander un devis
          </a>
        </div>
      </div>

      <!-- STANDARD LAYOUT (For other services) -->
      <div v-else>
        <!-- Header -->
        <div class="text-center mb-16" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">
          <div class="w-20 h-20 mx-auto bg-dark-800 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.2)] animate-float">
            <component :is="service.icon" class="w-10 h-10 text-primary-500" />
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{{ service.title }}</h1>
          <p class="text-xl text-primary-400 font-medium mb-6">{{ service.subtitle }}</p>
          <p class="text-gray-400 max-w-2xl mx-auto leading-relaxed">{{ service.fullDescription }}</p>
        </div>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-2 gap-12 mb-16">
          <div class="bg-dark-800 p-8 rounded-2xl border border-white/5" v-motion :initial="{ opacity: 0, x: -50 }" :enter="{ opacity: 1, x: 0, transition: { delay: 200 } }">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <span class="w-8 h-1 bg-primary-500 rounded-full"></span>
              Points clés
            </h3>
            <ul class="space-y-4">
              <li v-for="(feature, index) in service.features" :key="index" class="flex items-center gap-3 text-gray-300">
                <div class="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="bg-dark-800 p-8 rounded-2xl border border-white/5" v-motion :initial="{ opacity: 0, x: 50 }" :enter="{ opacity: 1, x: 0, transition: { delay: 400 } }">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <span class="w-8 h-1 bg-secondary-500 rounded-full"></span>
              Détails de l'offre
            </h3>
            <ul class="space-y-4">
              <li v-for="(detail, index) in service.detailedFeatures" :key="index" class="flex items-center gap-3 text-gray-300">
                <CheckCircle class="w-5 h-5 text-secondary-500" />
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }">
          <a 
            href="#contact" 
            class="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-primary-600/20"
          >
            Demander un devis
            <span class="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="min-h-screen bg-dark-900 flex items-center justify-center text-white">
    Service introuvable
  </div>
</template>
