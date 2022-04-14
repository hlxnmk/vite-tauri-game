import { defineStore } from 'pinia'
// 定义数据仓库
import axios from 'axios'

export const useSchulteStore = defineStore('schulte', {
  state: () => {
    return {
      numbers: [
        { id: 1, value: 1, isChecked: false, isMatched: false },
        { id: 2, value: 2, isChecked: false, isMatched: false },
        { id: 3, value: 3, isChecked: false, isMatched: false },
        { id: 4, value: 4, isChecked: false, isMatched: false },
        { id: 5, value: 5, isChecked: false, isMatched: false },
        { id: 6, value: 6, isChecked: false, isMatched: false },
        { id: 7, value: 7, isChecked: false, isMatched: false },
        { id: 8, value: 8, isChecked: false, isMatched: false },
        { id: 9, value: 9, isChecked: false, isMatched: false },
        { id: 10, value: 10, isChecked: false, isMatched: false },
        { id: 11, value: 11, isChecked: false, isMatched: false },
        { id: 12, value: 12, isChecked: false, isMatched: false },
        { id: 13, value: 13, isChecked: false, isMatched: false },
        { id: 14, value: 14, isChecked: false, isMatched: false },
        { id: 15, value: 15, isChecked: false, isMatched: false },
        { id: 16, value: 16, isChecked: false, isMatched: false },
        { id: 17, value: 17, isChecked: false, isMatched: false },
        { id: 18, value: 18, isChecked: false, isMatched: false },
        { id: 19, value: 19, isChecked: false, isMatched: false },
        { id: 20, value: 20, isChecked: false, isMatched: false },
        { id: 21, value: 21, isChecked: false, isMatched: false },
        { id: 22, value: 22, isChecked: false, isMatched: false },
        { id: 23, value: 23, isChecked: false, isMatched: false },
        { id: 24, value: 24, isChecked: false, isMatched: false },
        { id: 25, value: 25, isChecked: false, isMatched: false },
      ],
      number3x3: [
        { id: 1, value: 1, isChecked: false, isMatched: false },
        { id: 2, value: 2, isChecked: false, isMatched: false },
        { id: 3, value: 3, isChecked: false, isMatched: false },
        { id: 4, value: 4, isChecked: false, isMatched: false },
        { id: 5, value: 5, isChecked: false, isMatched: false },
        { id: 6, value: 6, isChecked: false, isMatched: false },
        { id: 7, value: 7, isChecked: false, isMatched: false },
        { id: 8, value: 8, isChecked: false, isMatched: false },
        { id: 9, value: 9, isChecked: false, isMatched: false },
      ],
      number4x4: [
        { id: 1, value: 1, isChecked: false, isMatched: false },
        { id: 2, value: 2, isChecked: false, isMatched: false },
        { id: 3, value: 3, isChecked: false, isMatched: false },
        { id: 4, value: 4, isChecked: false, isMatched: false },
        { id: 5, value: 5, isChecked: false, isMatched: false },
        { id: 6, value: 6, isChecked: false, isMatched: false },
        { id: 7, value: 7, isChecked: false, isMatched: false },
        { id: 8, value: 8, isChecked: false, isMatched: false },
        { id: 9, value: 9, isChecked: false, isMatched: false },
        { id: 10, value: 10, isChecked: false, isMatched: false },
        { id: 11, value: 11, isChecked: false, isMatched: false },
        { id: 12, value: 12, isChecked: false, isMatched: false },
        { id: 13, value: 13, isChecked: false, isMatched: false },
        { id: 14, value: 14, isChecked: false, isMatched: false },
        { id: 15, value: 15, isChecked: false, isMatched: false },
        { id: 16, value: 16, isChecked: false, isMatched: false },
      ],  
    }
  },
  getters: {
    square3x3: (state) => {
      const shuffle = arr => arr.sort(() => 0.5 - Math.random())
      return shuffle(state.number3x3)
    },

    square4x4: (state) => {
      const shuffle = arr => arr.sort(() => 0.5 - Math.random())
      return shuffle(state.number4x4)
    },
    square5x5: (state) => {
      const shuffle = arr => arr.sort(() => 0.5 - Math.random())
      return shuffle(state.numbers)
    },

  },
  actions: {
    handleClick() {
      this.isChecked = !this.isChecked

    },

  },
})