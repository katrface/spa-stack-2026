<script setup lang="ts">
import { RouterView } from "vue-router";
import { usePimQueryClient } from "./init/usePimQueryClient";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";

const pimQueryClient = usePimQueryClient();
</script>
<template>
  <RouterView />
  <VueQueryDevtools :client="pimQueryClient" />
</template>
