<script setup lang="ts">
import { ref } from 'vue'
import { NLayoutHeader, NSpace, NSwitch, NDatePicker, NSelect } from 'naive-ui'
import { zhCN, dateZhCN } from 'naive-ui'
import { useConfigStore } from '../store/config'
const config = useConfigStore()
const active = ref(false)
const value = ref('zhCN')
const options = [
    {
        label: '中文',
        value: 'zhCN'

    },
    {
        label: 'English',
        value: 'English'
    },
]


function handleChange() {
    config.changeTheme()
}

function handleUpdateValue(value: string) {
    if (value == 'zhCN') {
        config.locale = zhCN
        config.dateLocale = dateZhCN
    } else {
        config.locale = null!
        config.dateLocale = null!
    }
}

</script>

<template>
    <n-layout-header>
        <n-space class="mr-9" justify="end">
            <n-switch v-model:value="active" @update:value="handleChange" size="large">
                <template #checked-icon>
                    <div class="carbon-sun text-orange-600" />
                </template>
                <template #unchecked-icon>
                    <div class="carbon-moon text-dark-700" />
                </template>
            </n-switch>
            <n-space vertical>
                <n-select
                    v-model:value="value"
                    :options="options"
                    placeholder="语言"
                    @update:value="handleUpdateValue(value)"
                    size="small"
                />
            </n-space>
            <n-date-picker size="small" />
        </n-space>
    </n-layout-header>
</template>

<style scoped>
.n-layout-header {
    background: rgba(128, 128, 128, 0.2);
    padding: 12px;
}
.n-select {
    display: inline-block;
    width: 90px;
}
</style>

