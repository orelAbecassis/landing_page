<script setup>
import orelImage from '../assets/orel_graphic.png'
</script>

<template>
  <section id="about" class="py-20 bg-dark-900 relative overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        <!-- Text Content (Left) -->
        <div 
          class="flex-1 space-y-8"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <span class="text-primary-400 text-xs font-bold tracking-widest uppercase">
            À propos
          </span>
          
          <h2 class="text-4xl md:text-5xl font-bold text-white">
            Orel Abecassis <span class="text-gray-500">|</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Développeur & Chef de Projet</span>
          </h2>

          <div class="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Hello ! Je suis <strong class="text-white">Orel</strong>. Ce qui me passionne avant tout, c'est de <strong class="text-white">donner vie aux idées</strong>.
            </p>
            <p>
              Que ce soit pour lancer un nouveau projet ou trouver des solutions créatives aux problèmes qu'on me soumet, je m'investis pleinement pour concrétiser votre vision et transformer vos concepts en réalité.
            </p>
            <p>
              En tant que développeur full-stack, j'accompagne également les entreprises et les particuliers dans l'optimisation de leur présence digitale. Je propose du conseil et de la conception d'applications sur mesure pour structurer et fluidifier votre façon de travailler.
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
