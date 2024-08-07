<template>
  <div class="min-h-screen bg-gray-100">
    <CurvedHeader @toggleSearch="showSearch = true" />
    <main class="container mx-auto px-4 py-8">
      <MusicList :searchTerm="searchTerm" :musicItems="searchResults" />
    </main>
    <div
      v-if="showSearch"
      class="fixed z-20 inset-0 bg-custom flex items-center justify-center"
    >
      <div class="w-full max-w-md p-6 rounded-lg">
        <div
          class="flex justify-between items-center mb-4 absolute top-3 right-3"
        >
          <button
            @click="showSearch = false"
            class="text-white hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="text-white text-center mb-8 font-bold text-xl">Search</div>
        <SearchBar @search="onSearch" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMusic } from "../store/music";
import SearchBar from "../components/SearchBar.vue";
import MusicList from "../components/MusicList.vue";
import CurvedHeader from "@/components/CurvedHeader.vue";

const route = useRoute();
const router = useRouter();
const music = useMusic();

const showSearch = ref(false);
const searchTerm = computed(() => (route.query.q as string) || "");
const searchResults = computed(() => music.searchResults);

const onSearch = async (term: string) => {
  showSearch.value = false;
  await router.push({ name: "search", query: { q: term } });
  await music.fetchSearchResults(term);
};

onMounted(async () => {
  if (searchTerm.value) {
    await music.fetchSearchResults(searchTerm.value);
  }
});
</script>

<style scoped>
.bg-custom {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
