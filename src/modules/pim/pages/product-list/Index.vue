<script setup lang="ts">
import { archiveProductOptions, productDetailsOptions } from "./api";
import ProductTable from "./ui/ProductTable.vue";
import { usePimMutation, usePimQuery } from "@pim/shared/vue-query";

const query = usePimQuery(
  productDetailsOptions(() => ({ internalId: "fc22db77-f649-478a-83a6-caa21e53d646" })),
);
const mutation = usePimMutation(archiveProductOptions());
</script>

<template>
  <UContainer class="min-h-screen flex-col items-center justify-center">
    Товары
    <ProductTable />
    <!-- <pre>
      {{ query }}
    </pre> -->
    <UButton label="Архивировать" @click="() => mutation.mutate({ internalId: 'foo' })" />
  </UContainer>
</template>
