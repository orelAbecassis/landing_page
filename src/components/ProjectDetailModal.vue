<script setup>
import { ref, computed } from 'vue'
import { X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-vue-next'

const props = defineProps({
  isOpen: Boolean,
  project: Object
})

const emit = defineEmits(['close'])

const activeImageIndex = ref(0)

const images = computed(() => {
  return props.project?.images && props.project.images.length > 0
    ? props.project.images
    : [props.project?.image || '/placeholder.jpg']
})

const nextImage = () => {
  activeImageIndex.value = (activeImageIndex.value + 1) % images.value.length
}

const prevImage = () => {
  activeImageIndex.value = (activeImageIndex.value - 1 + images.value.length) % images.value.length
}

const selectImage = (index) => {
  activeImageIndex.value = index
}
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      <!-- Backdrop -->
      <div 
        class="absolute inset-0 bg-dark-900/90 backdrop-blur-md"
        @click="emit('close')"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :leave="{ opacity: 0 }"
      ></div>

      <!-- Modal Content -->
      <div 
        class="relative w-full max-w-5xl bg-dark-800 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] z-10"
        v-motion
        :initial="{ opacity: 0, scale: 0.9, y: 20 }"
        :enter="{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } }"
        :leave="{ opacity: 0, scale: 0.9, y: 20 }"
      >
        <!-- Close Button -->
        <button 
          @click="emit('close')"
          class="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <X class="w-6 h-6" />
        </button>

        <!-- Left Side: Screenshot Gallery -->
        <div class="w-full md:w-3/5 bg-black/50 flex flex-col justify-between relative overflow-hidden h-[320px] md:h-auto min-h-[320px] md:min-h-[480px]">
          <!-- Main Image Area -->
          <div class="relative flex-grow flex items-center justify-center overflow-hidden bg-dark-950/40 group">
            <!-- Blurred background for aesthetics -->
            <img 
              :src="images[activeImageIndex]" 
              class="absolute inset-0 w-full h-full object-cover filter blur-2xl opacity-20 scale-110 select-none pointer-events-none" 
            />
            
            <!-- Main foreground image -->
            <img 
              :src="images[activeImageIndex]" 
              :alt="project?.title"
              class="relative z-10 max-w-full max-h-full object-contain p-4 transition-all duration-300"
            />

            <!-- Prev/Next Navigation Overlay -->
            <div v-if="images.length > 1" class="absolute inset-0 z-20 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <button 
                @click.stop="prevImage"
                class="p-2.5 rounded-full bg-black/60 hover:bg-primary-600 text-white transition-all transform hover:scale-105 pointer-events-auto shadow-md"
              >
                <ChevronLeft class="w-5 h-5" />
              </button>
              <button 
                @click.stop="nextImage"
                class="p-2.5 rounded-full bg-black/60 hover:bg-primary-600 text-white transition-all transform hover:scale-105 pointer-events-auto shadow-md"
              >
                <ChevronRight class="w-5 h-5" />
              </button>
            </div>

            <!-- Page Counter Tag -->
            <div v-if="images.length > 1" class="absolute bottom-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-gray-300 border border-white/5">
              {{ activeImageIndex + 1 }} / {{ images.length }}
            </div>
          </div>

          <!-- Thumbnail Row (hidden if only 1 image) -->
          <div v-if="images.length > 1" class="p-3 bg-dark-900/60 border-t border-white/5 flex gap-2 overflow-x-auto custom-scrollbar select-none shrink-0">
            <button 
              v-for="(img, idx) in images" 
              :key="idx"
              @click="selectImage(idx)"
              class="w-16 h-10 md:w-20 md:h-12 rounded-md overflow-hidden border-2 shrink-0 transition-all focus:outline-none"
              :class="activeImageIndex === idx ? 'border-primary-500 scale-95 shadow-lg shadow-primary-500/20' : 'border-transparent opacity-40 hover:opacity-100'"
            >
              <img :src="img" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <!-- Right Side: Details -->
        <div class="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-between overflow-y-auto bg-dark-800 max-h-[50vh] md:max-h-none md:h-auto custom-scrollbar">
          <div class="flex-grow">
            <!-- Category and Status -->
            <div class="flex items-center gap-3 mb-5">
              <span class="px-3 py-1 text-xs font-semibold bg-primary-500/10 text-primary-400 border border-primary-500/20 rounded-full tracking-wider uppercase">
                {{ project?.category }}
              </span>
              <span class="flex items-center gap-1.5 text-xs text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 font-medium">
                <CheckCircle2 class="w-3.5 h-3.5" />
                Shipped
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-2xl md:text-3xl font-extrabold text-white mb-6 leading-tight">
              {{ project?.title }}
            </h3>

            <!-- Description -->
            <div class="mb-8">
              <h4 class="text-sm font-bold tracking-wider uppercase text-gray-400 mb-3">Description</h4>
              <p class="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-line">
                {{ project?.description }}
              </p>
            </div>

            <!-- Technologies -->
            <div v-if="project?.tags && project.tags.length > 0" class="mb-8">
              <h4 class="text-sm font-bold tracking-wider uppercase text-gray-400 mb-3">Technologies</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="px-3 py-1.5 text-xs font-medium text-gray-300 bg-dark-900 border border-white/10 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom CTA (Close) -->
          <div class="pt-6 border-t border-white/5 flex justify-end shrink-0">
            <button 
              @click="emit('close')"
              class="w-full md:w-auto px-6 py-2.5 bg-dark-900 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-medium rounded-lg transition-colors text-center cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.02);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
