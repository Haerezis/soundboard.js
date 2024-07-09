import { defineStore } from 'pinia'
import { reactive, computed } from "vue"
import { groupBy, sortBy } from "lodash"

import BoardSound from "@/models/BoardSound"
import Track from "@/models/Track"

type TrackId = number | string
interface TrackCollection { [id: TrackId]: Track }

export const use_tracks_store = defineStore('tracks', () => {

  const collection: TrackCollection = reactive({})

  const all = computed(() => sortBy(Object.values(collection), (elt) => elt.created_at))

  const all_grouped_by_boardsound_id = computed(() => groupBy(all.value, (elt) => elt.boardsound.id))
  const all_grouped_by_sound_id = computed(() => groupBy(all.value, (elt) => elt.sound.id))


  function upsert(instances: Array<Track> | Track): void {
    if (instances instanceof Track) {
      instances = [instances]
    }

    instances.forEach((elt: Track) => {
      collection[elt.id] = elt

    })
  }

  function remove(instances: Array<Track> | Track): void {
    if (instances instanceof Track) {
      instances = [instances]
    }
    instances.forEach((elt: Track) => delete collection[elt.id])
  }


  function create(boardsound: BoardSound): Track {
    const track = new Track(
      boardsound,
      boardsound.play_configuration,
      (track) => destroy(track)
    )

    upsert(track)

    return track
  }

  function destroy(track: Track): void {
    remove(track)
    track.stop()
  }

  return { collection, all, all_grouped_by_sound_id, all_grouped_by_boardsound_id, create, destroy }
})
