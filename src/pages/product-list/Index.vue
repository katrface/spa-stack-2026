<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query';
import { archiveProductOptions, productDetailsOptions } from './api';

const query = useQuery(productDetailsOptions({ id: 'foo' }));
const mutation = useMutation(archiveProductOptions());
</script>

<template>
  <UContainer class="min-h-screen flex items-center justify-center">
    Товары
    <pre>
      {{ query }}
    </pre>
    <UButton
      label="Архивировать"
      @click="() => mutation.mutate({ id: 'foo' })"
    />
  </UContainer>
</template>
