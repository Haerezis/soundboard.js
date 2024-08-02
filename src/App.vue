<script setup lang="ts">
import boards from '@/fixtures/boards'
import TheLeftSidebar from "@/components/TheLeftSidebar.vue"
import TheRightSidebar from "@/components/TheRightSidebar.vue"
import RouterView from '@/components/pages/RouterView.vue';
import { refresh } from './router';
</script>

<template>
  <div class="bg-background flex h-screen">
    <TheLeftSidebar
      v-model="boards"
      class="shrink-0"
    />
    <RouterView />
    <TheRightSidebar class="shrink-0" />
  </div>
</template>
