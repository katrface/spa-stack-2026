<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { PIM_PAGE_NAME } from '@pim'
import { ref } from 'vue'

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

const open = ref(true)
</script>

<template>
  <div class="flex flex-1">
    <USidebar
      v-model:open="open"
      variant="sidebar"
      collapsible="icon"
      :ui="{
        container: 'h-full',
      }"
    >
      <template #header>
        <UIcon name="i-lucide-layout-dashboard" class="size-8" />
        <span v-if="open" class="ml-2">Marketplace</span>
      </template>

      <UNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{ link: 'p-1.5 overflow-hidden' }"
      />

      <template #footer>
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
      </template>
    </USidebar>

    <div
      class="flex-1 flex flex-col overflow-hidden lg:peer-data-[variant=floating]:my-4 peer-data-[variant=inset]:m-4 lg:peer-data-[variant=inset]:not-peer-data-[collapsible=offcanvas]:ms-0 peer-data-[variant=inset]:rounded-xl peer-data-[variant=inset]:shadow-sm peer-data-[variant=inset]:ring peer-data-[variant=inset]:ring-default bg-default"
    >
      <div
        class="h-(--ui-header-height) shrink-0 flex items-center px-4 border-b border-default"
      >
        <UButton
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />
      </div>

      <div class="flex-1 p-4">
        <slot />
      </div>
    </div>
  </div>
</template>
