<script setup>
import { ref } from 'vue'
import { Send, Mail, MapPin, Phone } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    const response = await fetch('https://n8n.abeweb.fr/webhook/638a927a-8eca-47bb-be42-c5d4eeffa72c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value)
    })

    if (response.ok) {
      alert('Message envoyé avec succès !')
      form.value = { name: '', email: '', message: '' }
    } else {
      throw new Error('Erreur lors de l\'envoi')
    }
  } catch (error) {
    console.error('Error sending message:', error)
    alert('Une erreur est survenue. Veuillez réessayer.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-24 relative overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Contact Info -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Parlons de votre <span class="text-gradient">Projet</span></h2>
          <p class="text-gray-400 text-lg mb-12 leading-relaxed">
            Vous avez une idée ? Un projet ambitieux ? Discutons-en autour d'un café virtuel.
            Je suis toujours à la recherche de nouveaux défis.
          </p>

          <div class="space-y-8">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                <Mail class="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <h3 class="text-white font-bold mb-1">Email</h3>
                <a href="mailto:orel.abecassis.pro@gmail.com" class="text-gray-400 hover:text-primary-400 transition-colors">orel.abecassis.pro@gmail.com</a>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                <MapPin class="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <h3 class="text-white font-bold mb-1">Localisation</h3>
                <p class="text-gray-400">Créteil, France</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }"
          class="bg-dark-900 p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl"
        >
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-400 ml-1">Votre Nom</label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder:text-gray-600"
                placeholder="Orel Abecassis"
              />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-400 ml-1">Votre Email</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder:text-gray-600"
                placeholder="orel@example.com"
              />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-400 ml-1">Votre Message</label>
              <textarea 
                v-model="form.message"
                rows="4" 
                required
                class="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder:text-gray-600 resize-none"
                placeholder="Parlez-moi de votre projet..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary-500/20"
            >
              <span v-if="!isSubmitting">Envoyer le message</span>
              <span v-else>Envoi en cours...</span>
              <Send v-if="!isSubmitting" class="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
