<script setup lang="ts">
import { NLayoutContent, NGrid, NGridItem, NGradientText, NSpace, NButton, useMessage, NImage } from 'naive-ui'
import { useCfopStore } from '../store/cfop'
import { useStopwatch } from 'vue-timer-hook'
import { useRouter } from 'vue-router' //3.2setup中使用路由需要引入
import { ref, onMounted } from "vue"
import { createScene } from "../scenes/VillageScene"

const router = useRouter()
const cfop = useCfopStore()
let stopwatch = useStopwatch()
let message = useMessage()
const initialize = () => {
  stopwatch.reset()
}


const bjsCanvas = ref<HTMLCanvasElement | null>(null)

onMounted(async () => {
  if (bjsCanvas.value) {
    createScene(bjsCanvas.value)
  }
})

</script>

<template>
  <n-layout-content>
    <n-space class="h-15 pt-5 pl-48 bg-gray-200">
      <n-button
        class="bi:arrow-left  text-xl text-green-500 animate__animated animate__slideOutLeft animate__slower animate__infinite"
        type="primary" size="tiny" @click="router.back()">
      </n-button>
      <n-gradient-text type="success" class="pl-8 animate-pulse">3D显示</n-gradient-text>
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
    <!-- <babylon id="myViewer" extends="minimal"></babylon> -->
    <!-- <babylon extends="minimal" model="/meshs/village.glb"></babylon> -->
    <canvas ref="bjsCanvas" width="1600" height="700" />
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

