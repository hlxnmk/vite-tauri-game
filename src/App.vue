<script setup lang="ts">
import { NSpace, NLayout,NConfigProvider} from 'naive-ui';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { useConfigStore } from './store/config'
import { storeToRefs } from 'pinia'
const config = useConfigStore()
const {theme,locale,dateLocale}= storeToRefs(config)//设置响应式


</script>

<template>
<n-config-provider :theme="theme" :locale="locale" :date-locale="dateLocale">
  <n-space vertical size="large">
    <n-layout>
      <Header />
      <router-view></router-view>
      <Footer />
    </n-layout>
  </n-space>
  </n-config-provider>
</template>

<style scoped>
</style>
