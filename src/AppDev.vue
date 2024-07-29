<script setup lang="ts">
import boards from '@/fixtures/boards'
import TheLeftSidebar from "@/components/TheLeftSidebar.vue"
import TheRightSidebar from "@/components/TheRightSidebar.vue"
import TheBoardGrid from "@/components/TheBoardGrid.vue"
import { ref } from 'vue';

const current_board = ref(boards[0])
</script>

<template>
  <div class="flex h-screen">
    <TheLeftSidebar
      v-model="boards"
      class="shrink-0"
    />
    <TheBoardGrid
      v-if="current_board"
      v-model="current_board"
    />
    <TheRightSidebar class="shrink-0" />
  </div>
</template>
