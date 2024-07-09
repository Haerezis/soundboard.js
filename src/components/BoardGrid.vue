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

</script>

<template>
  <div class="boardgrid q-pa-md" :style="`grid-template-columns: repeat(${model.column_count}, 1fr);`">
    <template v-for="(_, row) in model.row_count">
      <template v-for="(_, column) in model.column_count">
        <div class="q-ma-md">
          <BoardSoundFilled v-if="sound_matrix[row][column]" v-model="sound_matrix[row][column]" />
          <BoardSoundEmpty v-else />
        </div>
      </template>
    </template>
  </div>
</template>

<style scoped>
.boardgrid {
  display: grid;
}
</style>
