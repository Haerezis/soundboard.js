<script setup lang="ts">
import boards from '@/fixtures/boards'
import BoardSoundFilled from "@/components/BoardSound/Filled.vue";

const boardsound = boards[0].board_sounds[0]
</script>

<template>
  <div class="w-full h-svh flex flex-col justify-center items-center">
    <BoardSoundFilled v-model="boardsound" />
  </div>
</template>
