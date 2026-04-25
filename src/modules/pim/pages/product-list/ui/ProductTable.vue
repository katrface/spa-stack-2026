<script setup lang="ts">
import { ref } from 'vue'
import SkuActions from './SkuActions.vue'

// Описание колонок
const columns = [
  {
    accessorKey: 'sku',
    header: 'SKU',
  },
  {
    accessorKey: 'stockFBO',
    header: 'Остатки FBO, в шт.',
  },
  {
    accessorKey: 'stockFBS',
    header: 'Остатки FBS, в шт.',
  },
  {
    accessorKey: 'price',
    header: 'Цена',
  },
  { id: 'actions', header: '' },
]

// Тестовые данные
const items = ref([
  {
    sku: {
      image: 'https://image.kazanexpress.ru/ctghqh6mgl6h3d8muhqg/t_product_240_low.jpg',
      title: 'Пластиковый чемодан на колесах, с кодовым замком, белый',
      internalId: '872b795c-467d-4b20-bcc6-4f0de9933ce5',
      externalId: '872b795c-467d-4b20-bcc6-4f0de9933ce5',
    },
    stockFBO: 150,
    stockFBS: 45,
    price: '1 200 ₽',
  },
  {
    sku: {
      image: 'https://placeholder.com',
      internalId: 'INT-1002',
      externalId: 'EXT-9901',
    },
    stockFBO: 0,
    stockFBS: 12,
    price: '950 ₽',
  },
])
</script>

<template>
  <UTable :data="items" :columns="columns" class="w-full">
    <!-- Кастомизация колонки SKU через слот {columnId}-cell -->
    <template #sku-cell="{ row }">
      <div class="flex items-center gap-3">
        <!-- Фото товара -->
        <UAvatar
          :src="row.original.sku.image"
          loading="lazy"
          alt="Product Photo"
          size="3xl"
          class="rounded-md"
        />

        <div class="flex flex-col text-base">
          <span class="font-medium text-gray-900 dark:text-white truncate">
            {{ row.original.sku.title }}
          </span>
          <span class="text-gray-500 text-sm truncate">
            SKU ID: {{ row.original.sku.internalId }}
          </span>
          <span class="text-gray-500 text-sm truncate">
            Seller SKU ID: {{ row.original.sku.externalId }}
          </span>
        </div>
      </div>
    </template>

    <!-- Пример стилизации остатков (красный цвет, если 0) -->
    <template #stockFBO-cell="{ row }">
      <span :class="row.original.stockFBO === 0 ? 'text-red-500 font-bold' : ''">
        {{ row.original.stockFBO }}
      </span>
    </template>
    <template #stockFBS-cell="{ row }">
      <span :class="row.original.stockFBS === 0 ? 'text-red-500 font-bold' : ''">
        {{ row.original.stockFBS }}
      </span>
    </template>

    <template #price-cell="{ row }">
      <span class="font-semibold text-primary">
        {{ row.original.price }}
      </span>
    </template>

    <template #actions-cell="{ row }">
      <SkuActions :row="row.original" />
    </template>
  </UTable>
</template>
