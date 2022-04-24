<script setup lang="ts">
import { NLayoutContent, NGrid, NGridItem, NGradientText, NSpace, NButton, useMessage, NImage } from 'naive-ui'
import { useCfopStore } from '../store/cfop'
import { useStopwatch } from 'vue-timer-hook'
import { useRouter } from 'vue-router' //3.2setup中使用路由需要引入


const router = useRouter()
const cfop = useCfopStore()
let stopwatch = useStopwatch()
let message = useMessage()

const initialize = () => {
  stopwatch.reset()
}


// 定义一个接口来约束card类型
interface card {
  id: number;
  name: string;
  subgroups: string;
  icon: string;
  algorithm: string;
}


</script>

<template>
  <n-layout-content>
    <n-space class="h-15 pt-5 pl-48 ">
      <n-button
        class="bi:arrow-left  text-xl text-green-500 animate__animated animate__slideOutLeft animate__slower animate__infinite"
        type="primary" size="tiny" @click="router.back()">
      </n-button>
      <n-gradient-text type="success" class="pl-8 animate-pulse">CFOP公式练习</n-gradient-text>
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
    <div
      class="inline-grid  2xl:grid-flow-col 2xl:grid-rows-7 2xl:grid-cols-6   xl:grid-cols-5   lg:grid-cols-4   md:grid-cols-3 sm:grid-cols-2 ml-1.5 gap-x-2.5 gap-y-3  ">
      <div class="w-[243px] ring-4 rounded-md   " v-for="f2l  in  cfop.f2l" :key="f2l.id">
        <img class=" w-16 mt-2 ml-1" :src="f2l.icon" />
        <div class="float-left ">
          <div class=" text-red-900 ml-1 mt-1 w-5 text-sm font-bold ">{{ f2l.name }}</div>
          <div class=" text-green-500 ml-1  w-5 text-xs ">{{ f2l.subgroups }}</div>
        </div>
        <img class="w-37 mb-1" :src="f2l.algorithm" />
      </div>
    </div>
    <div
      class="inline-grid mt-3 ml-1.5 gap-x-2.5 gap-y-3 2xl:grid-flow-col 2xl:grid-rows-10 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 ">
      <div class="w-[243px] ring-4 rounded-md  " v-for="oll  in  cfop.oll" :key="oll.id">
        <img class=" w-16 mt-2 ml-1" :src="oll.icon" />
        <div class="float-left ">
          <div class=" text-red-900 ml-1 mt-1 w-5 text-sm font-bold ">{{ oll.name }}</div>
          <div class=" text-green-500 ml-1  w-5 text-xs ">{{ oll.subgroups }}</div>
        </div>
        <img class="w-37 mb-1" :src="oll.algorithm" />
      </div>
    </div>
    <div
      class="inline-grid  mt-3 mb-3 ml-1.5 gap-x-2.5 gap-y-3 2xl:grid-flow-col 2xl:grid-rows-4 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 ">
      <div class="w-[243px] ring-4 rounded-md  " v-for="pll  in  cfop.pll" :key="pll.id">
        <img class=" w-16 mt-2 ml-1" :src="pll.icon" />
        <div class="float-left ">
          <div class=" text-red-900 ml-1 mt-1 w-5 text-sm font-bold ">{{ pll.name }}</div>
          <div class=" text-green-500 ml-1  w-5 text-xs ">{{ pll.subgroups }}</div>
        </div>
        <img class="w-37 mb-1" :src="pll.algorithm" />
      </div>
    </div>
  </n-layout-content>
</template>

<style scoped>
.n-layout-content {
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

