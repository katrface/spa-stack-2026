<script setup lang="ts">
import type { TProduct } from '../api'

defineProps<{ row: TProduct }>()
</script>

<template>
  <UPopover mode="hover" :open-delay="100" :close-delay="150">
    <UButton icon="i-lucide-ellipsis" color="neutral" variant="ghost" size="sm" />

    <template #content>
      <div class="flex flex-col p-1 min-w-32">
        <UButton
          label="Редактировать"
          icon="i-lucide-pencil"
          color="neutral"
          variant="ghost"
          class="justify-start"
          @click="$emit('edit', row)"
        />
        <UButton
          label="Архивировать"
          icon="i-lucide-archive"
          color="neutral"
          variant="ghost"
          class="justify-start"
          @click="$emit('archive', row)"
        />
        <USeparator class="my-1" />
        <UButton
          label="Удалить"
          icon="i-lucide-trash"
          color="error"
          variant="ghost"
          class="justify-start"
          @click="$emit('delete', row)"
        />
      </div>
    </template>
  </UPopover>
</template>
