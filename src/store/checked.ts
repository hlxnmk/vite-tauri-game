import { defineStore } from 'pinia'
// 定义数据仓库
import axios from 'axios'

export const useCheckedStore = defineStore('checked', {
  state: () => {
    return {
      urls: [
        { id: 1, url: '/icons/at.png', isChecked: false, isMatched: false },
        { id: 2, url: '/icons/balance-scale.png', isChecked: false, isMatched: false },
        { id: 3, url: '/icons/bicycle.png', isChecked: false, isMatched: false },
        { id: 4, url: '/icons/bus.png', isChecked: false, isMatched: false },
        { id: 5, url: '/icons/cloud.png', isChecked: false, isMatched: false },
        { id: 6, url: '/icons/cogs.png', isChecked: false, isMatched: false },
        { id: 7, url: '/icons/motorcycle.png', isChecked: false, isMatched: false },
        { id: 8, url: '/icons/video.png', isChecked: false, isMatched: false },
        { id: 9, url: '/icons/at.png', isChecked: false, isMatched: false },
        { id: 10, url: '/icons/balance-scale.png', isChecked: false, isMatched: false },
        { id: 11, url: '/icons/bicycle.png', isChecked: false, isMatched: false },
        { id: 12, url: '/icons/bus.png', isChecked: false, isMatched: false },
        { id: 13, url: '/icons/cloud.png', isChecked: false, isMatched: false },
        { id: 14, url: '/icons/cogs.png', isChecked: false, isMatched: false },
        { id: 15, url: '/icons/motorcycle.png', isChecked: false, isMatched: false },
        { id: 16, url: '/icons/video.png', isChecked: false, isMatched: false },
      ],
    }
  },
  getters: {
    cards: (state) => {
      const shuffle = arr => arr.sort(() => 0.5 - Math.random())
      return shuffle(state.urls)
    },


  },
  actions: {
    handleClick() {
      this.isChecked = !this.isChecked

    },

  },
})