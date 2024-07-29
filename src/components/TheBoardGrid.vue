<script setup lang="ts">
import { computed } from 'vue'
import Board from "@/models/Board"
import BoardsoundButton from "@/components/BoardsoundButton"

const model = defineModel({ type: Board, required: true })

const boardsounds = computed(() => {
  const list = Array(model.value.row_count * model.value.column_count).fill(undefined)
  model.value.board_sounds.forEach((bs) => list[bs.row * model.value.row_count + bs.column] = bs)
  return list
})

</script>

<template>
  <div
    class="grid p-4 overflow-auto"
    :style="`grid-template-columns: repeat(${model.column_count}, minmax(0, 1fr));`"
  >
    <template
      v-for="(boardsound, i) in boardsounds"
      :key="boardsound?.id"
    >
      <div class="m-4">
        <BoardsoundButton v-model="boardsounds[i]" />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
