<script setup lang="ts">
import { NLayoutFooter, NEllipsis } from 'naive-ui'
import { useHitokotoStore } from '../store/hitokoto'
import { storeToRefs } from 'pinia'
const hitokoto = useHitokotoStore()
const { text } = storeToRefs(hitokoto)//设置响应式

setInterval(()=>hitokoto.get_Hitokoto(), 20000)//比settimeout好用


</script>

<template>
  <n-layout-footer>
    <div class="text-green-600">
      <n-ellipsis style="max-width: 240px ;padding-left: 20px; padding-right:300px">{{ text }}
       <template #tooltip>
      <div class="text-green-500 ">
        {{ text }}
      </div>
    </template>
      </n-ellipsis>
      <div class="inline-block text-sm">Copyright © 2022 Technical support by Xiao Ming</div>
    </div>
  </n-layout-footer>
</template>

<style>
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 10px;
}
</style>

