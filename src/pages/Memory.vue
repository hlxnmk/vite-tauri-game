<script setup lang="ts">
import { NLayoutContent, NGrid, NGridItem } from 'naive-ui'
import { useCheckedStore } from '../store/checked'
// import { storeToRefs } from 'pinia'
const checked = useCheckedStore()
// const { cards, urls } = storeToRefs(checked)//设置响应式

// 定义一个接口来约束card类型
  interface card{
    id:number;
    url:string;
    isChecked:boolean;
    isMatched: boolean;
  }

let flipped_tiles:card[]= []

const handleClicked = (card:card) => {
  console.log(card)
  if (!card.isMatched) {
    card.isChecked = true
  }

  if (flipped_tiles.length < 2) {
    flipped_tiles.push(card)
  }

  // console.log('flipped_tiles_length', flipped_tiles.length)
  // console.log('flipped_tiles', flipped_tiles)

  if (flipped_tiles.length === 2) {
    if (flipped_tiles[0].url === flipped_tiles[1].url && flipped_tiles[0].id !== flipped_tiles[1].id) {
      flipped_tiles.forEach(card=>card.isMatched=true)
    } else {
     flipped_tiles.forEach(card=>card.isChecked=false)
    }
    flipped_tiles = []
  }
  // console.log('flipped_tiles', flipped_tiles)
}

</script>

<template>
  <n-layout-content>
    <n-grid
      class="absolute bg-gray-200"
      x-gap="2"
      y-gap="6"
      cols="1 s:4 m:4 l:4 xl:4 2xl:4"
      responsive="screen"
    >
      <n-grid-item v-for="(card)  in  checked.cards" :key="card.id" @click="handleClicked(card)">
        <div>
          <img
            v-show="!card.isChecked"
            src="/tile_logo.png "
            class="bg-blue-700 rounded-lg animate__animated animate__flipInY"
          />
          <img
            v-show="card.isChecked"
            :class="card.isMatched ? 'bg-green-600' : 'bg-blue-700'"
            class="rounded-lg animate__animated animate__flipInY"
            :src="card.url"
          />
        </div>
      </n-grid-item>
    </n-grid>
  </n-layout-content>
</template>

<style scoped>
.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

