import { defineStore } from 'pinia'
// 定义数据仓库
import axios from 'axios'
export const useHitokotoStore = defineStore('hitokoto', {
  state: () => {
    return { text: 'Hitokoto' }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async get_Hitokoto() {
      axios.get('https://v1.hitokoto.cn', { timeout: 2000 })
        .then(({ data }) => {
          this.text = data.hitokoto
        })
        .catch(console.error)
    },


  },
})