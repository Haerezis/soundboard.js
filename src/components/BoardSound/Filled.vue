<script setup lang="ts">
import { ref, computed } from "vue";
import type { Ref } from 'vue'
import { last } from "lodash"
import { onLongPress } from '@vueuse/core'
import BoardSound from "@/models/BoardSound"
import Track from "@/models/Track"
import { use_tracks_store } from '@/stores/TrackStore'

const model = defineModel({ type: BoardSound, required: true })

const tracks_store = use_tracks_store()


function play() {
  const track = tracks_store.create(model.value)
  track?.play()

  return track
}

function stop_track(track: Track | null | undefined) {
  if (track) {
    tracks_store.destroy(track)
  }
}




//Click & longclick/longpress behaviour
const htmlRefRoot = ref<HTMLElement | null>(null)
const long_press_track = ref<Track | null>()
onLongPress(
  htmlRefRoot,
  (e: MouseEvent) => {
    if (e.button != 0) {
      return
    }
    long_press_track.value = play()
  },
  {
    distanceThreshold: 100,
    delay: 500,
    onMouseUp: (_, __, is_long_press) => {
      if (is_long_press) {
        stop_track(long_press_track.value)
        long_press_track.value = null
      }
      else {
        //A non-longpress mouseup event is only in case of click.
        //In that case, run default behavious of playing the sound
        play()
      }
    },
  },
)


const latest_track = computed(() => last(tracks_store.all_grouped_by_boardsound_id[model.value.id]))
function stop_latest() {
  console.log("foo")
  stop_track(latest_track.value)
}

</script>

<template>
  <div
    ref="htmlRefRoot"
    class="boardsound"
    :class="{ active: !!latest_track }"
    @click.right.prevent="stop_latest"
  >
    {{ model?.sound?.name }}
  </div>
</template>

<style lang="scss" scoped>
@import "./common.scss";

$background-color: lightblue;

.boardsound {
  background-color: $background-color;
  border: skyblue solid;
}

@keyframes blink {
  0% {
    background-color: $background-color
  }

  50% {
    background-color: adjust-color($color: $background-color, $lightness: +10%)
  }

  100% {
    background-color: $background-color
  }
}

.active {
  -webkit-animation: blink 1s infinite;
  -moz-animation: blink 1s infinite;
  -o-animation: blink 1s infinite;
  animation: blink 1s infinite;
}
</style>
