<script setup>
import { h, ref, onMounted } from 'vue'
import { Github, Linkedin, Instagram, Eye } from 'lucide-vue-next'

const DiscordIcon = {
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    stroke: 'none'
  }, [
    h('path', {
      d: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.48 13.48 0 0 0-.59 1.227 18.355 18.355 0 0 0-5.526 0 13.482 13.482 0 0 0-.59-1.227.074.074 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z'
    })
  ])
}

const socials = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/orelAbecassis' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/orel-abecassis-488ba7203/' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/abe.web/' },
  { name: 'Discord', icon: DiscordIcon, href: 'https://discordapp.com/users/775785441198211113' },
]

const currentYear = new Date().getFullYear()

const visitCount = ref(0)
const isLoading = ref(true)

onMounted(async () => {
  try {
    const namespace = 'abeweb-portfolio'
    const key = 'visits'
    
    const hasVisitedThisSession = sessionStorage.getItem('has_visited_portfolio')
    let url = `https://api.counterapi.dev/v1/${namespace}/${key}`
    
    if (!hasVisitedThisSession) {
      url += '/up'
      sessionStorage.setItem('has_visited_portfolio', 'true')
    } else {
      url += '/'
    }
    
    const response = await fetch(url)
    const data = await response.json()
    visitCount.value = data.count || 0
  } catch (error) {
    console.error('Error fetching visitor count:', error)
    visitCount.value = 124 // Fallback default view count
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <footer class="bg-dark-900 border-t border-white/5 pt-16 pb-8">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="h-24 w-auto">
            <img src="/logo.png" alt="AbeWeb" class="h-full w-auto object-contain" />
          </div>
        </div>

        <!-- Socials & Visitor Counter -->
        <div class="flex flex-col items-center md:items-end gap-4">
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
          
          <!-- Visitor Counter -->
          <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/5 bg-white/[0.02] text-[10px] text-gray-500 font-mono select-none">
            <span class="w-1.5 h-1.5 rounded-full bg-primary-500/80 animate-pulse"></span>
            <span v-if="isLoading" class="animate-pulse">chargement...</span>
            <span v-else>{{ visitCount }} visites</span>
          </div>
        </div>
      </div>

      <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>&copy; {{ currentYear }} Orel Abecassis. Tous droits réservés.</p>
        <div class="flex gap-6">
          <router-link to="/mentions-legales" class="hover:text-primary-400 transition-colors">Mentions Légales</router-link>
          <router-link to="/politique-de-confidentialite" class="hover:text-primary-400 transition-colors">Politique de Confidentialité</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
