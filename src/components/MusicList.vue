<template>
  <div class="space-y-4">
    <h2 class="text-sm font-normal text-center">Search result for : <span class="text-purple-500 font-bold text-lg">{{ searchTerm }}</span></h2>
    <div v-if="musicItems.length === 0" class="text-center py-8">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p class="text-xl font-semibold text-gray-700">No results found</p>
      <p class="text-gray-500 mt-2">Try adjusting your search or filter to find what you're looking for.</p>
    </div>
    <ul v-else class="!mt-[30px]">
      <MusicItem v-for="item in displayedItems" :key="item.trackId" :item="item" />
    </ul>
    <div v-if="hasMoreItems" class="text-center mt-4">
      <button @click="loadMore" class="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300">
        Load More
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MusicItem from './MusicItem.vue'
import type { MusicItem as MusicItemType } from '../types'

const props = defineProps<{
  searchTerm: string,
  musicItems: MusicItemType[]
}>()

const itemsPerPage = 4
const currentPage = ref(1)

const displayedItems = computed(() => {
  return props.musicItems.slice(0, currentPage.value * itemsPerPage)
})

const hasMoreItems = computed(() => {
  return displayedItems.value.length < props.musicItems.length
})

const loadMore = () => {
  currentPage.value++
}
</script>