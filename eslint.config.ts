import eslintPluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginQuery from '@tanstack/eslint-plugin-query'


export default defineConfigWithVueTs(
  ...eslintPluginVue.configs['flat/recommended'],

  vueTsConfigs.recommended,

  ...pluginQuery.configs['flat/recommended'],

  {
    ignores: ['dist/**', 'node_modules/**', 'vendor/**'],
  }
)
