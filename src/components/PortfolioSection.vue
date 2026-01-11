<script setup>
import { ref, onMounted } from 'vue'
import { ExternalLink, ArrowRight } from 'lucide-vue-next'

const projects = ref([])
const isLoading = ref(true)

const fetchProjects = async () => {
  try {
    const response = await fetch('https://n8n.abeweb.fr/webhook/3fe1db06-bb6c-4c18-a9ad-65b2248e9836')
    const data = await response.json()
    
    projects.value = data
      .filter(item => item.name !== 'Projects')
      .map(item => ({
      title: item.name,
      category: item.property_tags && item.property_tags.length > 0 ? item.property_tags[0] : 'Projet',
      image: item.property_page && item.property_page.length > 0 ? item.property_page[0] : '/placeholder.jpg',
      tags: item.property_techno || [],
      link: item.property_url
    }))
  } catch (error) {
    console.error('Error fetching projects:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchProjects()
})
</script>

<template>
  <section id="portfolio" class="py-24 bg-dark-900 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-[100px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-3">Mon <span class="text-gradient">Portfolio</span></h2>
          <p class="text-gray-400 max-w-lg">Découvrez mes derniers projets, alliant design moderne et performance technique.</p>
        </div>
        <a href="https://github.com/orelAbecassis" target="_blank" rel="noopener noreferrer" class="hidden md:flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group">
          Voir tout le catalogue
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div v-if="isLoading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary-500"></div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a 
          v-for="(project, index) in projects" 
          :key="index"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative block rounded-xl overflow-hidden bg-dark-800 border border-white/5 shadow-lg hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1"
        >
          <div 
            class="flex flex-col h-full"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          >
            <!-- Image Section -->
            <div class="relative h-48 overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <!-- Overlay with Button -->
              <div class="absolute inset-0 bg-dark-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div class="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center text-white shadow-lg transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <ExternalLink class="w-6 h-6" />
                </div>
              </div>
            </div>
            
            <!-- Content Section -->
            <div class="p-6 flex flex-col flex-grow border-t border-white/5 bg-dark-800">
              <span class="text-primary-400 text-xs font-bold tracking-wider uppercase mb-2">{{ project.category }}</span>
              <h3 class="text-xl font-bold text-white mb-4 leading-tight group-hover:text-primary-400 transition-colors">{{ project.title }}</h3>
              
              <!-- Tags -->
              <div class="mt-auto flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span 
                  v-for="tag in project.tags.slice(0, 3)" 
                  :key="tag"
                  class="px-3 py-1 text-xs font-medium text-gray-300 bg-dark-900 border border-white/10 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
      
      <div class="mt-10 text-center md:hidden">
        <a href="https://github.com/orelAbecassis" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
          Voir tout le catalogue
          <ArrowRight class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
</template>
