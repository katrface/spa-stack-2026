<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query';
import { archiveProductOptions, productDetailsOptions } from './api';

const query = useQuery(productDetailsOptions(() => ({ internalId: 'fc22db77-f649-478a-83a6-caa21e53d646' })));
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
      @click="() => mutation.mutate({ internalId: 'foo' })"
    />
  </UContainer>
</template>
