<script setup lang="ts">
import boards from '@/fixtures/boards'
import TheLeftSidebar from "@/components/TheLeftSidebar.vue"
import RouterView from '@/components/pages/RouterView.vue';
</script>

<template>
  <div class="bg-background flex h-screen">
    <TheLeftSidebar
      v-model="boards"
      class="shrink-0"
    />
    <div class="h-dvh w-full">
      <RouterView />
    </div>
  </div>
</template>
