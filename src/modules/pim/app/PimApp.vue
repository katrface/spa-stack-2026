<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { RouterView } from 'vue-router'
import { usePimQueryClient } from './init/usePimQueryClient'

const pimQueryClient = usePimQueryClient()
</script>

<template>
  <RouterView />
  <VueQueryDevtools :client="pimQueryClient" />
</template>
