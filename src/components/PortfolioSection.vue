<script setup>
import { ExternalLink } from 'lucide-vue-next'

const projects = [
  {
    title: 'E-Commerce Luxe',
    category: 'Site Vitrine & Boutique',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Vue.js', 'Tailwind', 'Stripe']
  },
  {
    title: 'Event App',
    category: 'Carte Digitale',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'Socket.io']
  },
  {
    title: 'Dashboard Analytics',
    category: 'Application Web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Vue 3', 'Chart.js', 'Firebase']
  }
]
</script>

<template>
  <section id="portfolio" class="py-24 bg-dark-900">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Mon Portfolio</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
        </div>
        <a href="#" class="text-primary-400 hover:text-primary-300 font-medium flex items-center gap-2 transition-colors">
          Voir tous les projets
          <ExternalLink class="w-4 h-4" />
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1, transition: { delay: index * 150 } }"
          class="group relative rounded-xl overflow-hidden cursor-pointer"
        >
          <!-- Image -->
          <div class="aspect-video w-full overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/90 to-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span class="text-primary-400 text-sm font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{{ project.category }}</span>
            <h3 class="text-2xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{{ project.title }}</h3>
            
            <div class="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 backdrop-blur-sm border border-white/5"
              >
                {{ tag }}
              </span>
            </div>
            
            <button class="mt-6 w-full py-3 bg-primary-600 text-white font-bold rounded-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 hover:bg-primary-500 shadow-lg shadow-primary-500/20">
              Voir le projet
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
