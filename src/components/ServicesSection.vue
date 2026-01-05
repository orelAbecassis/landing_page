<script setup>
import { useRouter } from 'vue-router'
import { services } from '../data/services'

const router = useRouter()

const goToService = (id) => {
  router.push(`/service/${id}`)
}
</script>

<template>
  <section id="services" class="py-24 bg-dark-800 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-dark-700/30 to-transparent"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Mes Prestations</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        <p class="mt-4 text-gray-400 max-w-2xl mx-auto">
          Des solutions digitales complètes pour propulser votre activité vers de nouveaux sommets.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          @click="goToService(service.id)"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: index * 200 } }"
          class="group p-8 rounded-2xl bg-dark-800 border border-white/5 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] cursor-pointer relative overflow-hidden"
        >
          <!-- Hover Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative z-10">
            <div class="w-14 h-14 rounded-xl bg-dark-700 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
              <component :is="service.icon" class="w-7 h-7 text-primary-500 group-hover:text-primary-400" />
            </div>
            
            <h3 class="text-xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors">{{ service.title }}</h3>
            <p class="text-gray-400 mb-6 leading-relaxed">{{ service.description }}</p>
            
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" class="flex items-center gap-2 text-sm text-gray-500">
                <span class="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
