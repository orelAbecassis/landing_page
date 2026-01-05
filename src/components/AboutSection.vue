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
          
          <h2 class="text-4xl md:text-5xl font-bold text-white">
            Orel Abecassis <span class="text-gray-500">|</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Développeur & Chef de Projet</span>
          </h2>

          <div class="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Cheffe de projet et développeuse web, passionnée par l’innovation digitale et les nouvelles technologies. Titulaire d’un Bac+5 en informatique, spécialisé en développement web et en gestion de projet, je poursuis actuellement un double master en entrepreneuriat afin de renforcer mes compétences en management, en stratégie et en leadership.
            </p>
            <p>
              Animée par le DevOps, la gestion de projet et le développement web, j’ai choisi de me lancer en freelance pour mettre mon expertise au service de projets innovants. 
              <br>Mon quotidien : créer, automatiser, optimiser et piloter des solutions digitales modernes.
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
