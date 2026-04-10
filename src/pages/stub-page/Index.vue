<script setup lang="ts">
import { PAGE_NAME } from "@shared/config/pages";

// Используем встроенные иконки (требуется @nuxt/icon)
const iconName = "i-lucide-construction";
</script>

<template>
  <UContainer class="min-h-screen flex items-center justify-center">
    <div class="text-center max-w-md mx-auto">
      <!-- Анимированная иконка -->
      <div class="mb-6 flex justify-center">
        <UIcon :name="iconName" class="w-20 h-20 text-primary animate-pulse" />
      </div>

      <!-- Заголовок и текст -->
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        Раздел в разработке
      </h1>

      <p class="mt-4 text-base text-gray-500 dark:text-gray-400">
        Мы вовсю работаем над этим разделом. Загляните чуть позже, чтобы увидеть результат!
      </p>

      <!-- Кнопка возврата -->
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <UButton
          :to="{ name: PAGE_NAME.HOME }"
          icon="i-lucide-arrow-left"
          size="lg"
          variant="solid"
          label="Вернуться на главную"
        />

        <UButton variant="ghost" size="lg" label="Связаться с нами" to="#" />
      </div>
    </div>
  </UContainer>
</template>
