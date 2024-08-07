<!-- src/views/HomeView.vue -->
<template>
    <div class="min-h-screen bg-purple-600 flex flex-col">
      <div class="flex-grow flex items-center justify-center">
        <div class="w-full max-w-md p-6 text-center">
          <img src="/logo.svg" alt="ngmusic logo" class="w-[72px] h-[84px] mx-auto mb-4" />
        </div>
      </div>
      <div class="w-full max-w-md mx-auto p-6">
        <SearchBar @search="onSearch" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  import SearchBar from '../components/SearchBar.vue'
  
  const router = useRouter()
  
  const onSearch = (term: string) => {
    router.push({ name: 'search', query: { q: term } })
  }
  </script>