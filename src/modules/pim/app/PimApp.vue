<script setup lang="ts">
import { RouterView } from 'vue-router'
import { usePimQueryClient } from './init/usePimQueryClient';

usePimQueryClient();

</script>
<template>
  <RouterView />
</template>

