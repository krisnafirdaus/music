<template>
    <li class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="flex items-center p-4">
        <div class="relative w-[100px] h-[100px] mr-4">
          <img :src="item.artworkUrl100" alt="Album artwork" class="w-full h-full object-cover rounded-md" />
          <button class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        <div class="flex-grow">
          <h3 class="text-[10px] font-medium">{{ item.trackName }}</h3>
          <p class="text-sm text-[#334155] mt-1 font-bold">{{ item.artistName }}</p>
          <div class="flex items-center justify-between mt-[27px]">
            <span class="bg-green-500 text-white text-xs px-[13px] py-1 rounded-full mr-2">{{ item.primaryGenreName }}</span>
            <span class="text-yellow-500 flex items-center"><img src="/src/assets/currency-dollar.svg" alt="currency" class="mr-[6px]"/>{{ item.trackPrice }}</span>
          </div>
        </div>
      </div>
    </li>
  </template>
  
  <script setup lang="ts">
  import type { MusicItem } from '../types'
  
  defineProps<{
    item: MusicItem
  }>()
  </script>