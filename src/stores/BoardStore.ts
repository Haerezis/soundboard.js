import { defineStore } from 'pinia'
import { reactive, computed } from "vue"

import Board from "@/models/Board"

interface BoardCollection { [id: number | string]: Board }

export const use_boards_store = defineStore('boards', () => {

  const collection: BoardCollection = reactive({})

  const all = computed(() => Object.values(collection))

  const upsert = (instances: Array<Board> | Board) => {
    const elements: Array<Board> = (instances.constructor == Board) ? [instances] : instances as Array<Board>

    elements.forEach((elt: Board) => collection[elt.id] = elt)
  }

  return { collection, all, upsert }
})
