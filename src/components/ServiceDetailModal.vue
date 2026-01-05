<script setup>
import { X, CheckCircle } from 'lucide-vue-next'

defineProps({
  isOpen: Boolean,
  service: Object
})

defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <!-- Backdrop -->
      <div 
        class="absolute inset-0 bg-dark-900/90 backdrop-blur-md"
        @click="$emit('close')"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :leave="{ opacity: 0 }"
      ></div>

      <!-- Modal Content -->
      <div 
        class="relative w-full max-w-4xl bg-dark-800 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        v-motion
        :initial="{ opacity: 0, scale: 0.9, y: 20 }"
        :enter="{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } }"
        :leave="{ opacity: 0, scale: 0.9, y: 20 }"
      >
        <!-- Close Button -->
        <button 
          @click="$emit('close')"
          class="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <X class="w-6 h-6" />
        </button>

        <!-- Left Side: Visual & Icon -->
        <div class="w-full md:w-1/3 bg-gradient-to-br from-primary-900/50 to-dark-900 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-dark-800/50"></div>
          
          <div class="relative z-10 w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            <component :is="service.icon" class="w-12 h-12 text-primary-400" />
          </div>
          
          <h3 class="relative z-10 text-2xl font-bold text-white mb-2">{{ service.title }}</h3>
          <div class="relative z-10 w-12 h-1 bg-primary-500 rounded-full"></div>
        </div>

        <!-- Right Side: Details -->
        <div class="w-full md:w-2/3 p-8 md:p-10 overflow-y-auto custom-scrollbar bg-dark-800">
          <h4 class="text-xl font-semibold text-white mb-4">Description</h4>
          <p class="text-gray-400 leading-relaxed mb-8">
            {{ service.fullDescription }}
          </p>

          <h4 class="text-xl font-semibold text-white mb-4">Ce que cela inclut :</h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <li v-for="feature in service.detailedFeatures" :key="feature" class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <span class="text-gray-300 text-sm">{{ feature }}</span>
            </li>
          </ul>

          <div class="flex justify-end">
            <a 
              href="#contact" 
              @click="$emit('close')"
              class="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-primary-500/20"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
