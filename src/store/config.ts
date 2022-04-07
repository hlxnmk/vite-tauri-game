import { defineStore } from 'pinia'
import { ref } from 'vue'
import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
import type { GlobalTheme, NLocale, NDateLocale } from 'naive-ui'
const theme = ref<GlobalTheme | null>(null)
const locale = ref<NLocale | null>(null)
const dateLocale = ref<NDateLocale | null>(null)
// 定义数据仓库
// 参数1 ID 必须唯一 后面挂载到根容器
export const useConfigStore = defineStore('config', {
    //    容器的状态
    //   必须是箭头函数 
    state: () => {
        return {
            theme: darkTheme,
            locale: zhCN,
            dateLocale: dateZhCN,
        }
    },
    // 类似组件计算属性
    getters: {
        themes: (state) => {
            return state.theme
        }

    },
    // 封装业务逻辑修改state (同步异步)
    actions: {
        changeTheme() {
            if (this.theme !== null) {
                this.theme = null
            } else {
                this.theme = darkTheme

            }
        },
         
    },
})