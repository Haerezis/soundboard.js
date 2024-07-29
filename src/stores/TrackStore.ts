import { defineStore } from 'pinia'
import { reactive, computed } from "vue"
import { groupBy, sortBy } from "lodash"

import Boardsound from "@/models/Boardsound"
import Track from "@/models/Track"

type TrackId = number | string
interface TrackCollection { [id: TrackId]: Track }

export const use_tracks_store = defineStore('tracks', () => {

  const collection: TrackCollection = reactive({})

  const all_with_hidden = computed(() => sortBy(Object.values(collection), (elt) => elt.created_at))
  const all = computed(() => all_with_hidden.value.filter((t) => !t.hidden))

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


  function create(boardsound: Boardsound): Track | null {
    //If track already playing for non-concurrent sound, return early
    if (!boardsound.play_configuration.concurrent && !!all_grouped_by_sound_id.value[boardsound.sound.id]) {
      return null
    }

    // @ts-ignore: reactive messes with variable type, making TS not accept the assignation
    const track: Track = reactive(
      new Track(
        boardsound,
        {
          play_configuration: boardsound.play_configuration,
          termination_callback: (track) => remove(track),
        }
      )
    )
    track.load()

    upsert(track);

    return track
  }

  function destroy(track: Track): void {
    track.stop()
    remove(track)
  }

  return { collection, all_with_hidden, all, all_grouped_by_sound_id, all_grouped_by_boardsound_id, create, destroy }
})
