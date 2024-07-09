import { defineStore } from 'pinia'
import { reactive, computed } from "vue"

import BoardSound from "@/models/BoardSound"

interface BoardSoundCollection { [id: number | string]: BoardSound }

export function use_boardsounds_store(board_id: number, ...args: any[]) {
  return defineStore(`board_sounds[${board_id}]`, () => {

    const collection: BoardSoundCollection = reactive({})

    const all = computed(() => Object.values(collection))

    const upsert = (instances: Array<BoardSound> | BoardSound) => {
      const elements: Array<BoardSound> = (instances.constructor == BoardSound) ? [instances] : instances as Array<BoardSound>

      elements.forEach((elt: BoardSound) => collection[elt.id] = elt)
    }

    return { collection, all, upsert }
  })(...args)
}
