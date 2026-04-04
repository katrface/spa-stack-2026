<template>
  <UCard class="w-full max-w-sm overflow-hidden transition-shadow hover:shadow-lg">
    <!-- Слот Header: Изображение товара -->
    <template #header>
      <div class="relative h-48 -m-4 overflow-hidden bg-gray-100 group">
        <img
          src="https://unsplash.com"
          alt="Product Image"
          class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        >
        <UBadge
          color="primary"
          variant="solid"
          class="absolute top-2 right-2"
        >
          New
        </UBadge>
      </div>
    </template>

    <!-- Основной контент: Название и описание -->
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white">
          Smart Watch v2
        </h3>
        <span class="text-xl font-semibold text-primary-600">$199.00</span>
      </div>
      <p class="text-sm text-gray-500 line-clamp-2">
        Modern smartwatch with heart rate monitoring, GPS, and up to 10 days of battery life.
      </p>
    </div>

    <!-- Слот Footer: Действия -->
    <template #footer>
      <div class="flex gap-2">
        <UButton
          icon="i-heroicons-shopping-cart"
          block
          color="primary"
        >
          Add to Cart
        </UButton>
        <UButton
          icon="i-heroicons-heart"
          color="gray"
          variant="ghost"
          square
        />
      </div>
    </template>
  </UCard>
</template>
