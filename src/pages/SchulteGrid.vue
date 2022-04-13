<script setup lang="ts">
import { NLayoutContent, NGrid, NGridItem, NGradientText, NSpace, NRadioGroup, NRadio, NButton, useMessage } from 'naive-ui'
import { useSchulteStore } from '../store/schulte'
import { ref } from 'vue'
import { useStopwatch } from 'vue-timer-hook'
import { useRouter } from 'vue-router' //3.2setup中使用路由需要引入
const router = useRouter()

let stopwatch = useStopwatch()
let message = useMessage()

const schulte = useSchulteStore()
const value = ref<string | null>('3')

let squaregird = schulte.square3x3
function handleChange() {
  if (value.value == '3') {
    squaregird = schulte.square3x3
  } else if (value.value == '4') {
    squaregird = schulte.square4x4

  } else if (value.value == '5') {
    squaregird = schulte.square5x5
  }

  return squaregird
}

const square = [
  {
    value: '3',
    label: "3X3"
  },
  {
    value: '4',
    label: '4X4'
  },
  {
    value: '5',
    label: '5X5'
  },
]

const initialize = () => {
  stopwatch.reset()
  const shuffle = (arr: any[]) => arr.sort(() => 0.5 - Math.random())
  shuffle(handleChange())
  handleChange().forEach((card: { isChecked: boolean; }) => card.isChecked = false)
  handleChange().forEach((card: { isMatched: boolean; }) => card.isMatched = false)
  clickedCard = []
}

// 定义一个接口来约束card类型
interface card {
  id: number;
  value: number;
  isChecked: boolean;
  isMatched: boolean;
}

let clickedCard: card[] = []
const handleClicked = (card: card) => {
  // console.log('all', handleChange())
  // console.log('1111', handleChange().some(item => { return item.id == 1 && item.isMatched }))
  // console.log('clickedCard', clickedCard)
  if (card.isMatched) {
    card.isChecked = true
  }
  if (clickedCard.length < 2) {
    clickedCard.push(card)
  }
  if (clickedCard.length == 1 && clickedCard[0].id == 1) {
    clickedCard[0].isChecked = true
    clickedCard[0].isMatched = true
  }
  if (!handleChange().some((item: { id: number; isMatched: any; }) => { return item.id == 1 && item.isMatched })) {
    clickedCard = []
  }
  if (clickedCard.length === 2) {

    if (handleChange().some((item: { id: number; isMatched: any; }) => { return item.id == 1 && item.isMatched }) && clickedCard[0].id + 1 == clickedCard[1].id) {
      clickedCard.forEach(card => card.isChecked = true)
      clickedCard.forEach(card => card.isMatched = true)
      clickedCard.shift()
      // console.log('clickedCardshift', clickedCard)
    } else {
      // clickedCard[1].isMatched = false
      // clickedCard[1].isChecked = false
      clickedCard.pop()
      // console.log('clickedCardpop', clickedCard)
    }
  }
  if (squaregird.every((card: { isMatched: boolean; }) => card.isMatched == true)) {
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
       <n-button class="bi:arrow-left  text-xl text-green-500 animate__animated animate__slideOutLeft animate__slower animate__infinite" type="primary" size="tiny" @click="router.back()">
      </n-button>
      <n-gradient-text type="success" class="pl-8 animate-pulse">请选择数字方格大小</n-gradient-text>
      <n-radio-group v-model:value="value" name="radiogroup">
        <n-radio v-for="s in square" :key="s.value" :value="s.value" @change="handleChange()">
          <div class="text-green-600">{{ s.label }}</div>
        </n-radio>
      </n-radio-group>
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
    <n-grid class="bg-gray-200 pl-8 " x-gap="2" y-gap="6" :cols="value">
      <n-grid-item :class="card.isMatched && card.isChecked ? 'bg-sky-700' : 'bg-indigo-400'"
        class="animate__animated animate__heartBeat rounded-lg w-30 h-30 flex justify-center items-center text-6xl"
        v-for="card in handleChange()" :key="card.id" @click="handleClicked(card)">
        <div>{{ card.value }}</div>
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

