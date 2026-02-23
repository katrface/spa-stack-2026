<script setup lang="ts">
import BaseLayout from '@components/BaseLayout.vue';
import { ru } from '@nuxt/ui/locale'
import { RouterView } from 'vue-router'
import { usePimQueryClient } from './init/usePimQueryClient';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

usePimQueryClient();

</script>
<template>
  <VueQueryDevtools />
  <UApp :locale="ru">
    <div class="flex h-screen w-full">
      <BaseLayout />

      <UMain class="flex-1 min-w-0 overflow-y-auto">
        <RouterView />
      </UMain>
    </div>
  </UApp>
</template>

