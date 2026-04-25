<script setup lang="ts">
// В v4 типы импортируются из @nuxt/ui
import type { NavigationMenuItem } from '@nuxt/ui'
import { PIM_PAGE_NAME } from '@pim'

const items: NavigationMenuItem[][] = [
  [
    {
      label: 'Товары',
      icon: 'i-lucide-package',
      to: { name: PIM_PAGE_NAME.HOME },
    },
    {
      label: 'Цены',
      icon: 'i-lucide-banknote',
      to: '/prices',
    },
    {
      label: 'FBO',
      icon: 'i-lucide-warehouse',
      to: '/fbo',
      description: 'Склад маркетплейса',
    },
    {
      label: 'FBS',
      icon: 'i-lucide-truck',
      to: '/fbs',
      badge: 10,
    },
    {
      label: 'Чаты',
      icon: 'i-lucide-message-circle',
      to: '/chats',
      badge: 5,
    },
    {
      label: 'Аналитика',
      icon: 'i-lucide-bar-chart-3',
      to: '/analytics',
    },
    {
      label: 'Финансы',
      icon: 'i-lucide-wallet',
      to: '/finance',
    },
  ],
  [
    {
      label: 'Обратная связь',
      icon: 'i-lucide-message-circle',
      to: 'https://github.com',
      target: '_blank',
    },
    {
      label: 'Поддержка',
      icon: 'i-lucide-info',
      to: 'https://github.com',
      target: '_blank',
    },
  ],
]
</script>

<template>
  <div
    class="flex flex-col h-screen w-64 border-r border-[var(--ui-border-muted)] bg-[var(--ui-bg)] p-4"
  >
    <div class="mb-6 px-4">
      <h1 class="text-xl font-bold flex items-center gap-2">
        <UIcon name="i-lucide-layout-dashboard" class="text-primary" />
        Marketplace
      </h1>
    </div>

    <UNavigationMenu
      :items="items"
      orientation="vertical"
      class="flex-1"
      :ui="{
        link: 'px-4 py-2.5 rounded-lg transition-colors hover:bg-[var(--ui-bg-elevated)]',
        linkLeadingIcon: 'size-5',
      }"
    />

    <div class="mt-auto pt-4 border-t border-[var(--ui-border-muted)]">
      <UButton variant="ghost" color="neutral" class="w-full justify-start gap-3 px-3 py-2">
        <UAvatar src="https://github.com" size="sm" />
        <div class="text-left">
          <p class="text-sm font-medium">
            Max Jdanov
          </p>
          <p class="text-xs text-[var(--ui-text-muted)]">
            Premium Plan
          </p>
        </div>
      </UButton>
    </div>
  </div>
</template>
