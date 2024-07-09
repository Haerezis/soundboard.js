import { defineStore } from 'pinia'
import { reactive, computed } from "vue"

import Sound from "@/models/Sound"

interface SoundCollection { [id: number | string]: Sound }

export const use_sounds_store = defineStore('sounds', () => {

  const collection: SoundCollection = reactive({})

  const all = computed(() => Object.values(collection))

  const upsert = (instances: Array<Sound> | Sound) => {
    const elements: Array<Sound> = (instances.constructor == Sound) ? [instances] : instances as Array<Sound>

    elements.forEach((elt: Sound) => collection[elt.id] = elt)
  }

  return { collection, all, upsert }
})
