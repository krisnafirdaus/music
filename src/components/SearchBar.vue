<template>
    <div class="w-full max-w-md mx-auto">
      <form @submit.prevent="onSubmit" class="flex flex-col space-y-4">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Artist / Album / Title"
          class="w-full text-center px-4 py-[13px] font-medium text-xs rounded-full bg-white text-[#64748b]"
        />
        <button
          type="submit"
          class="w-full bg-purple-500 text-white rounded-full py-[13px] text-sm font-medium hover:bg-purple-400 transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const searchTerm = ref('')
  const emit = defineEmits<{
    (e: 'search', term: string): void
  }>()
  
  const onSubmit = () => {
    emit('search', searchTerm.value)
  }
  </script>