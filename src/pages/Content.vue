<script setup lang="ts">
import { NLayoutContent, NGrid, NGridItem, NCard,NImage} from 'naive-ui'


</script>

<template>
  <n-layout-content>
    <n-grid :x-gap="20" :y-gap="20" cols="1 s:2 m:3 l:4 xl:4 2xl:5" responsive="screen">
      <n-grid-item>
        <router-link to="/memory">
          <n-card title="记忆卡片游戏">
            <template #cover>
              <div class="carbon:direct-link h-48 pl-80 text-indigo-400 hover:rotate-10"></div>
            </template>
            <div class="text-green-600">根据记忆选择两个相同的图片</div>
          </n-card>
        </router-link>
      </n-grid-item>
      <n-grid-item>
        <router-link to="/schultegrid">
          <n-card title="数字舒尔特表">
            <template #cover>
              <div class="emojione-v1:input-numbers text-9xl h-48 ml-25 hover:rotate-10"></div>
            </template>
            <div class="text-green-600">根据顺序点击数字或字母或汉字</div>
          </n-card>
        </router-link>
      </n-grid-item>
      <n-grid-item>
        <router-link to="/cube">
          <n-card title="魔方练习" class="h-76 pt-4" >  
            <template #cover >
               <n-image class="w-40 mt-1 pl-22 hover:rotate-10"  src="cfop/icon/logo.png" alt="logo"  />
            </template>
            <div class="text-green-600"> 根据CFOP公式练习</div>
          </n-card>
        </router-link>
      </n-grid-item>
      <n-grid-item>
        <router-link to="/babylon">
          <n-card title="巴比伦3D">
            <template #cover>
              <div class="bi:badge-3d mt-4 h-44 pl-80 text-yellow-400 hover:rotate-10"></div>
            </template>
            巴比伦3D
          </n-card>
        </router-link>
      </n-grid-item>
      <n-grid-item>
        <router-link to="/memory">
          <n-card title="记忆游戏">
            <template #cover>
              <div class="carbon:direct-link h-48 pl-80 text-green-600"></div>
              <!-- <img  class="h-48 " src="../assets/icons/at-solid.svg"  /> -->
            </template>
            根据记忆选择两个相同的图片
          </n-card>
        </router-link>
      </n-grid-item>
      <n-grid-item>
        <router-link to="/memory">
          <n-card title="记忆游戏">
            <template #cover>
              <div class="carbon:direct-link h-48 pl-80 text-green-600"></div>
              <!-- <img  class="h-48 " src="../assets/icons/at-solid.svg"  /> -->
            </template>
            根据记忆选择两个相同的图片
          </n-card>
        </router-link>
      </n-grid-item>
      <n-grid-item>
        <router-link to="/memory">
          <n-card title="记忆游戏">
            <template #cover>
              <div class="carbon:direct-link h-48 pl-80 text-green-600"></div>
              <!-- <img  class="h-48 " src="../assets/icons/at-solid.svg"  /> -->
            </template>
            根据记忆选择两个相同的图片
          </n-card>
        </router-link>
      </n-grid-item>
      <n-grid-item>
        <router-link to="/memory">
          <n-card title="记忆游戏">
            <template #cover>
              <div class="carbon:direct-link h-48 pl-80 text-green-600"></div>
              <!-- <img  class="h-48 " src="../assets/icons/at-solid.svg"  /> -->
            </template>
            根据记忆选择两个相同的图片
          </n-card>
        </router-link>
      </n-grid-item>
      <n-grid-item>
        <router-link to="/memory">
          <n-card title="记忆游戏">
            <template #cover>
              <div class="carbon:direct-link h-48 pl-80 text-green-600"></div>
              <!-- <img  class="h-48 " src="../assets/icons/at-solid.svg"  /> -->
            </template>
            根据记忆选择两个相同的图片
          </n-card>
        </router-link>
      </n-grid-item>
      <n-grid-item>
        <router-link to="/memory">
          <n-card title="记忆游戏">
            <template #cover>
              <div class="carbon:direct-link h-48 pl-80 text-green-600"></div>
              <!-- <img  class="h-48 " src="../assets/icons/at-solid.svg"  /> -->
            </template>
            根据记忆选择两个相同的图片
          </n-card>
        </router-link>
      </n-grid-item>
    </n-grid>
  </n-layout-content>
</template>

<style scoped>
.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
  margin: 2px 20px 2px 20px;
}

.light-green {
  height: 140px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 140px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>

