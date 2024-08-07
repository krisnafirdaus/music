import { defineStore } from 'pinia'
import dummyData from '../assets/dummyData.json'
import type { MusicItem } from '../types'

interface MusicState {
  searchResults: MusicItem[]
}

export const useMusic = defineStore('music', {
  state: (): MusicState => ({
    searchResults: []
  }),
  actions: {
    async fetchSearchResults(term: string) {
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Assert the type of dummyData.results
      this.searchResults = (dummyData.results as MusicItem[]).filter(item => 
        item.artistName.toLowerCase().includes(term.toLowerCase()) ||
        item.trackName.toLowerCase().includes(term.toLowerCase())
      )
    }
  }
})