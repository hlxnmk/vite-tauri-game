# Vue 3 + Typescript + vite2 + tauri + naiveui + unocss + animatecss + pinia + axios + vue-router


   - pnpm dev
   - pnpm build
   - pnpm tauri dev
   - pnpm tauri build

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) + [Tauri](https://tauri.studio/) + [Naivi-ui](https://www.naiveui.com/en-US/os-theme) + [Unocss](https://github.com/unocss/unocss) + [Pinia](https://pinia.vuejs.org/) + [Animatecss](https://animate.style/)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

    
    
    
