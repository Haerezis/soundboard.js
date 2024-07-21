<script setup lang="ts">
import { computed } from 'vue'
import Board from "@/models/Board"
import BoardSoundFilled from "@/components/BoardSound/Filled.vue"
import BoardSoundEmpty from "@/components/BoardSound/Empty.vue"

const model = defineModel({ type: Board, required: true })

const sound_matrix = computed(() => {
  const matrix = Array(model.value.row_count).fill(undefined).map(() => Array(model.value.column_count).fill(undefined))
  model.value.board_sounds.forEach((bs) => matrix[bs.row][bs.column] = bs)
  return matrix
})

const boardsounds = computed(() => {
  const list = Array(model.value.row_count * model.value.column_count).fill(undefined)
  model.value.board_sounds.forEach((bs) => list[bs.row * model.value.row_count + bs.column])
  return list
})

</script>

<template>
  <div
    class="boardgrid q-pa-md"
    :style="`grid-template-columns: repeat(${model.column_count}, 1fr);`"
  >
    <template v-for="(boardsound) in boardsounds">
      <div class="q-ma-md">
        <BoardSoundFilled
          v-if="boardsound"
          v-model="boardsound"
        />
        <BoardSoundEmpty v-else />
      </div>
    </template>
  </div>
</template>

<style scoped>
.boardgrid {
  display: grid;
}
</style>
