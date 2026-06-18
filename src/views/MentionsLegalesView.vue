<script setup>
import { useRouter } from 'vue-router'
import { ArrowLeft, ShieldAlert } from 'lucide-vue-next'

const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-dark-900 pt-32 pb-24 px-6 text-gray-300">
    <div class="container mx-auto max-w-4xl">
      <!-- Back Button -->
      <button 
        @click="goBack"
        class="mb-8 flex items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors group"
      >
        <ArrowLeft class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Retour à l'accueil
      </button>

      <!-- Page Header -->
      <div 
        class="mb-12 text-center md:text-left"
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <div class="inline-flex items-center justify-center p-3 bg-primary-500/10 rounded-2xl mb-6 border border-primary-500/20">
          <ShieldAlert class="w-8 h-8 text-primary-400" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Mentions <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Légales</span>
        </h1>
        <p class="text-gray-500 text-sm">Dernière mise à jour : Juin 2026</p>
      </div>

      <!-- Content Grid -->
      <div 
        class="space-y-8 bg-dark-800/50 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-md"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
      >
        <!-- 1. Éditeur du site -->
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-white border-l-4 border-primary-500 pl-4 py-1">1. Éditeur du Site</h2>
          <div class="text-gray-400 leading-relaxed space-y-2">
            <p>Le site internet <strong>AbeWeb</strong> est édité par :</p>
            <ul class="list-disc pl-6 space-y-1">
              <li><strong>Nom :</strong> Orel Abecassis</li>
              <li><strong>Statut :</strong> Développeur Web Indépendant (Freelance)</li>
              <li><strong>Contact :</strong> Via le formulaire de contact du site.</li>
            </ul>
          </div>
        </section>

        <hr class="border-white/5" />

        <!-- 2. Hébergement -->
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-white border-l-4 border-primary-500 pl-4 py-1">2. Hébergement du Site</h2>
          <div class="text-gray-400 leading-relaxed space-y-2">
            <p>Le site est hébergé par <strong>Firebase Hosting</strong>, un service fourni par Google :</p>
            <ul class="list-disc pl-6 space-y-1">
              <li><strong>Hébergeur :</strong> Google Ireland Limited</li>
              <li><strong>Adresse :</strong> Gordon House, Barrow Street, Dublin 4, Irlande</li>
              <li><strong>Site web :</strong> <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:text-primary-300 underline transition-colors">https://firebase.google.com</a></li>
            </ul>
          </div>
        </section>

        <hr class="border-white/5" />

        <!-- 3. Propriété intellectuelle -->
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-white border-l-4 border-primary-500 pl-4 py-1">3. Propriété Intellectuelle</h2>
          <p class="text-gray-400 leading-relaxed">
            L'ensemble des contenus de ce site (structure, design, textes, logos, images, animations et code source) est la propriété exclusive de Orel Abecassis, sauf mention contraire.
          </p>
          <p class="text-gray-400 leading-relaxed">
            Toute reproduction, représentation, modification ou adaptation de tout ou partie des éléments de ce site, par quelque moyen que ce soit, est strictement interdite sans autorisation écrite préalable de l'auteur.
          </p>
        </section>

        <hr class="border-white/5" />

        <!-- 4. Limitation de responsabilité -->
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-white border-l-4 border-primary-500 pl-4 py-1">4. Limitation de Responsabilité</h2>
          <p class="text-gray-400 leading-relaxed">
            L'éditeur s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, il ne saurait être tenu responsable des erreurs, omissions, interruptions de service ou des résultats qui pourraient être obtenus par l'usage de ces informations.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
