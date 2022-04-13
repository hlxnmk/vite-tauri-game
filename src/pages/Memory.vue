<script setup lang="ts">
import { NLayoutContent, NGrid, NGridItem, NGradientText, NSpace, NButton, useMessage } from 'naive-ui'
import { useCheckedStore } from '../store/checked'
import { useStopwatch } from 'vue-timer-hook'
import { useRouter } from 'vue-router' //3.2setup中使用路由需要引入


const router = useRouter()
const checked = useCheckedStore()
let stopwatch = useStopwatch()
let message = useMessage()
// 定义一个接口来约束card类型
interface card {
  id: number;
  url: string;
  isChecked: boolean;
  isMatched: boolean;
}

const initialize = () => {
  stopwatch.reset()
  const shuffle = (arr: any[]) => arr.sort(() => 0.5 - Math.random())
  shuffle(checked.cards)
  checked.cards.forEach((card: { isChecked: boolean; }) => card.isChecked = false)
  checked.cards.forEach((card: { isMatched: boolean; }) => card.isMatched = false)
  flipped_tiles = []
}

let flipped_tiles: card[] = []

const handleClicked = (card: card) => {
  // console.log(card)
  if (!card.isMatched) {
    card.isChecked = true
  }
  if (flipped_tiles.length < 2) {
    flipped_tiles.push(card)
  }
  if (flipped_tiles.length === 2) {
    if (flipped_tiles[0].url === flipped_tiles[1].url && flipped_tiles[0].id !== flipped_tiles[1].id) {
      flipped_tiles.forEach(card => card.isMatched = true)
      flipped_tiles.forEach(card => card.isChecked = true)
    }
    else {
      flipped_tiles.forEach(card => card.isChecked = false)
    }
    flipped_tiles = []
  }
  // console.log('flipped_tiles', flipped_tiles)
  if (checked.cards.every((card: { isMatched: boolean; }) => card.isMatched == true)) {
    message.success(
      "恭喜你完成!!! 你的用时是:" + stopwatch.hours.value + "时" +
      stopwatch.minutes.value + "分 " +
      stopwatch.seconds.value + "秒 ",
      { duration: 3000 }
    )
    stopwatch.minutes.value = 0
    stopwatch.start()
  }
}

</script>

<template>
  <n-layout-content>
    <n-space class="h-15 pt-5 pl-48 bg-gray-200">
      <n-button
        class="bi:arrow-left  text-xl text-green-500 animate__animated animate__slideOutLeft animate__slower animate__infinite"
        type="primary" size="tiny" @click="router.back()">
      </n-button>
      <n-gradient-text type="success" class="pl-8 animate-pulse">翻转两个相同的卡片</n-gradient-text>
      <n-button class=" ml-5" type="primary" size="tiny" @click="initialize">
        开始
      </n-button>
      <n-gradient-text type="error" class="pl-8 animate-pulse">
        <div>
          <span class="text-green-600 pr-5">用时:</span>
          <span>{{ stopwatch.hours }}</span>:
          <span>{{ stopwatch.minutes }}</span>:
          <span>{{ stopwatch.seconds }}</span>
        </div>
      </n-gradient-text>
    </n-space>
    <n-grid class="absolute bg-gray-200 px-10" x-gap="2" y-gap="6" cols="1 s:4 m:4 l:4 xl:4 2xl:4" responsive="screen">
      <n-grid-item v-for="(card)  in  checked.cards" :key="card.id" @click="handleClicked(card)">
        <div>
          <img v-show="!card.isChecked" src="/tile_logo.png "
            class="bg-blue-700 rounded-lg animate__animated animate__flipInY" />
          <img v-show="card.isChecked" :class="card.isMatched ? 'bg-green-600' : 'bg-blue-700'"
            class="rounded-lg animate__animated animate__flipInY" :src="card.url" />
        </div>
      </n-grid-item>
    </n-grid>
  </n-layout-content>
</template>

<style scoped>
.n-layout-content {
  background: #E5E7EB;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

