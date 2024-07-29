import { defineStore } from 'pinia'
import { reactive, computed } from "vue"

import Boardsound from "@/models/Boardsound"

interface BoardsoundCollection { [id: number | string]: Boardsound }

export function use_boardsounds_store(board_id: number, ...args: any[]) {
  return defineStore(`board_sounds[${board_id}]`, () => {

    const collection: BoardsoundCollection = reactive({})

    const all = computed(() => Object.values(collection))

    const upsert = (instances: Array<Boardsound> | Boardsound) => {
      const elements: Array<Boardsound> = (instances.constructor == Boardsound) ? [instances] : instances as Array<Boardsound>

      elements.forEach((elt: Boardsound) => collection[elt.id] = elt)
    }

    return { collection, all, upsert }
  })(...args)
}
