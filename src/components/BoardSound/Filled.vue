<script setup lang="ts">
import { computed } from "vue";
import { last } from "lodash"
import BoardSound from "@/models/BoardSound"
import { use_tracks_store } from '@/stores/TrackStore'

const model = defineModel({ type: BoardSound, required: true })

const tracks_store = use_tracks_store()

const latest_track = computed(() => last(tracks_store.all_grouped_by_boardsound_id[model.value.id]))

function play() {
  const track = tracks_store.create(model.value)
  track.play()
}

function stop_latest() {
  if (latest_track.value) {
    tracks_store.destroy(latest_track.value)
  }
}
</script>

<template>
  <div class="boardsound" :class="{ active: !!latest_track }" @click.left="play" @click.right.prevent="stop_latest">
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
