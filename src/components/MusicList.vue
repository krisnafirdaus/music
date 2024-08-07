<template>
  <div class="space-y-4">
    <h2 class="text-sm font-normal text-center">Search result for : <span class="text-purple-500 font-bold text-lg">{{ searchTerm }}</span></h2>
    <ul class="!mt-[30px]">
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
import type { MusicItem as MusicItemType } from '@/types'

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