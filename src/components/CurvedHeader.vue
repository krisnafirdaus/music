<template>
  <header class="curved-header relative h-20 flex items-center px-5">
    <div class="flex justify-between items-center w-full z-10">
      <button class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <h1 class="text-white text-2xl font-bold">ngmusic</h1>
      <button @click="$emit('toggleSearch')" class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
    <svg class="absolute bottom-0 left-0 w-full h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 40" preserveAspectRatio="none">
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="-1" stdDeviation="2" flood-color="rgba(148, 77, 230, 0.75)" />
        </filter>
      </defs>
      <path fill="#F3F4F6" d="M0,0 C480,40 960,40 1440,0 L1440,40 L0,40 Z" filter="url(#shadow)"></path>
    </svg>
  </header>
</template>

<script setup lang="ts">
defineEmits(['toggleSearch'])
</script>

<style scoped>
.curved-header {
  background-image: linear-gradient(100deg, #712bda -47%, #a45deb 53%);
}
</style>