<script setup>
import orelImage from '../assets/orel_about.png'
</script>

<template>
  <section id="about" class="py-20 bg-dark-900 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-12 mb-12">
        <div
          class="flex-1 space-y-8"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <span class="text-primary-400 text-xl font-bold tracking-widest uppercase">
            À propos
          </span>
          
          <h2 class="text-4xl md:text-5xl font-bold leading-tight">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Développeur & <span class="whitespace-nowrap">Chef de Projet</span>
            </span>
          </h2>

          <div class="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Titulaire d’un Bac+5 en informatique et actuellement en double master entrepreneuriat, je combine expertise technique et vision stratégique.
            </p>
            <p>
              Passionnée par l'innovation digitale, le DevOps et la gestion de projet, je mets mes compétences au service de vos projets pour créer, automatiser et piloter des solutions web modernes et optimisées.
            </p>
          </div>
        </div>

        <!-- Image Content (Right) -->
        <div 
          class="flex-1 relative flex justify-center md:justify-end"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }"
        >
          <div class="relative w-full max-w-md">
             <img :src="orelImage" alt="Orel Abecassis" class="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700 drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
