<script setup>
import { ExternalLink } from 'lucide-vue-next'

const projects = [
  {
    title: 'Mel Marciano',
    category: 'Site Vitrine',
    image: '/mel-marciano.png',
    tags: ['Odoo', 'Web', 'Design'],
    link: 'https://mel-marciano.odoo.com/'
  },
  {
    title: 'Makhome des étudiants',
    category: 'Réseaux Sociaux',
    image: '/makhome.jpg',
    tags: ['Instagram', 'Community Management', 'Stratégie'],
    link: 'https://www.instagram.com/makhomedesetudiants/'
  },
  {
    title: 'Société Générale',
    category: 'Gestion de Projet',
    image: '/sg-notion.png',
    tags: ['Notion', 'Agile', 'Coordination'],
    link: '#'
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
        <a href="https://github.com/orelAbecassis" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:text-primary-300 font-medium flex items-center gap-2 transition-colors">
          Voir tous les projets
          <ExternalLink class="w-4 h-4" />
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a 
          v-for="(project, index) in projects" 
          :key="index"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1, transition: { delay: index * 150 } }"
          class="group relative rounded-xl overflow-hidden cursor-pointer block"
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
            
            <div class="mt-6 w-full py-3 bg-primary-600 text-white font-bold rounded-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 hover:bg-primary-500 shadow-lg shadow-primary-500/20 text-center">
              En voir plus 
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
