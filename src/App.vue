<script setup lang="ts">
import { ref } from 'vue'
import Board from "@/models/Board"
import boards from '@/fixtures/boards'
import TheBoardGrid from '@/components/TheBoardGrid.vue'

const current_board = ref()
const set_board = (board: Board) => current_board.value = board
</script>

<template>
  <div class="flex h-screen">
    <TheLeftSidebar v-model="boards" />
    <div class="grow flex flex-col justify-center items-center">
      <TheBoardGrid
        v-if="current_board"
        v-model="current_board"
      />
    </div>
    <TheRightSidebar />
  </div>
</template>
