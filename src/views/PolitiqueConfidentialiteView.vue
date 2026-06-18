<script setup>
import { useRouter } from 'vue-router'
import { ArrowLeft, ShieldCheck } from 'lucide-vue-next'

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
        <div class="inline-flex items-center justify-center p-3 bg-secondary-500/10 rounded-2xl mb-6 border border-secondary-500/20">
          <ShieldCheck class="w-8 h-8 text-secondary-400" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Politique de <span class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">Confidentialité</span>
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
        <!-- 1. Introduction -->
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-white border-l-4 border-secondary-500 pl-4 py-1">1. Introduction</h2>
          <p class="text-gray-400 leading-relaxed">
            La protection de vos données personnelles est une priorité absolue. Cette politique de confidentialité vous explique quelles informations sont collectées lorsque vous utilisez ce site internet, comment elles sont traitées, stockées, et quels sont vos droits à leur sujet.
          </p>
        </section>

        <hr class="border-white/5" />

        <!-- 2. Données collectées -->
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-white border-l-4 border-secondary-500 pl-4 py-1">2. Données Collectées</h2>
          <p class="text-gray-400 leading-relaxed">
            Nous collectons uniquement les données personnelles que vous soumettez de plein gré via le formulaire de contact :
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-400">
            <li><strong>Nom et prénom</strong> : pour pouvoir vous identifier dans nos échanges.</li>
            <li><strong>Adresse email</strong> : pour pouvoir vous répondre directement.</li>
            <li><strong>Message</strong> : contenant les détails de votre demande ou projet.</li>
          </ul>
        </section>

        <hr class="border-white/5" />

        <!-- 3. Traitement et Hébergement des Données -->
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-white border-l-4 border-secondary-500 pl-4 py-1">3. Traitement et Stockage</h2>
          <p class="text-gray-400 leading-relaxed">
            Afin de traiter efficacement vos demandes de contact, le site utilise des services automatisés sécurisés :
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-400">
            <li>
              <strong>n8n Webhook</strong> : Les données du formulaire de contact sont envoyées directement et de façon sécurisée à notre outil d'automatisation n8n (hébergé en France).
            </li>
            <li>
              <strong>Notion Database</strong> : Ces informations sont ensuite structurées et stockées dans une base de données Notion interne et privée à des fins de gestion de la relation client.
            </li>
          </ul>
          <p class="text-gray-400 leading-relaxed">
            Vos données ne sont jamais partagées, vendues ou louées à des tiers.
          </p>
        </section>

        <hr class="border-white/5" />

        <!-- 4. Durée de conservation -->
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-white border-l-4 border-secondary-500 pl-4 py-1">4. Durée de Conservation</h2>
          <p class="text-gray-400 leading-relaxed">
            Les données personnelles transmises via le formulaire de contact sont conservées pour une durée maximale de <strong>3 ans</strong> à compter du dernier contact avec vous (réponse à votre demande, fin de projet, etc.).
          </p>
        </section>

        <hr class="border-white/5" />

        <!-- 5. Vos droits (RGPD) -->
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-white border-l-4 border-secondary-500 pl-4 py-1">5. Vos Droits (RGPD)</h2>
          <p class="text-gray-400 leading-relaxed">
            Conformément à la réglementation européenne sur la protection des données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-400">
            <li><strong>Droit d'accès</strong> : Obtenir une copie de vos données personnelles détenues.</li>
            <li><strong>Droit de rectification</strong> : Demander la correction d'informations inexactes.</li>
            <li><strong>Droit à l'effacement</strong> : Demander la suppression définitive de vos données personnelles.</li>
            <li><strong>Droit d'opposition</strong> : Vous opposer à tout moment au traitement de vos données.</li>
          </ul>
          <p class="text-gray-400 leading-relaxed">
            Pour exercer l'un de ces droits, vous pouvez me contacter via le formulaire de contact du site.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
