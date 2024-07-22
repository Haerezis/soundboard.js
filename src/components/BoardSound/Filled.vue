<script setup lang="ts">
import { ref, computed } from "vue";
import { last } from "lodash"
import BoardSound from "@/models/BoardSound"
import Track from "@/models/Track"
import { use_tracks_store } from '@/stores/TrackStore'
import "long-press-event"
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue';

import IconPlaceholderUrl from '@/assets/placeholders/generic_image.png'




const model = defineModel({ type: BoardSound, required: true })

const tracks_store = use_tracks_store()

const root_elt_html_ref = ref()

const sound_icon_url = computed(() => model.value.sound.icon_url || IconPlaceholderUrl)

function play() {
  console.log("play")
  const track = tracks_store.create(model.value)
  track?.play()

  return track
}

function tmp(e: MouseEvent) {
  console.log(e.detail)
}

function stop_track(track: Track | null | undefined) {
  console.log("stop_track")
  if (track) {
    tracks_store.destroy(track)
  }
}

const longpress_track = ref<Track | null>()
function longpress_play_and_stop() {
  longpress_track.value = play()
  root_elt_html_ref.value?.addEventListener("mouseup", function stop_and_cleanup() {
    stop_track(longpress_track.value)
    longpress_track.value = null
    root_elt_html_ref.value?.removeEventListener("mouseup", stop_and_cleanup)
  })
}

const latest_track = computed(() => last(tracks_store.all_grouped_by_boardsound_id[model.value.id]))
function stop_latest_track() {
  stop_track(latest_track.value)
}

</script>

<template>
  <div
    ref="root_elt_html_ref"
    class="boardsound relative rounded-3xl overflow-hidden flex justify-center items-center"
    :class="{ active: !!latest_track }"
    @click.prevent="play"
    @long-press="longpress_play_and_stop"
    data-long-press-delay="500"
  >
    <div class="absolute inset-x-0 top-0 h-1/5 flex justify-center items-center">
      {{ model?.sound?.name }}
    </div>

    <div class="w-4/6 h-4/6">
      <img
        :src="sound_icon_url"
        class="object-cover w-full h-full rounded-md"
      />
    </div>

    <div class="absolute inset-x-0 bottom-0 h-1/6 flex justify-center items-center">
      <Button
        class="w-full h-full rounded-b-3xl rounded-t-none bg-red-500"
        @click.stop="stop_latest_track"
      >
        <Icon icon="mdi:stop" />
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./common.scss";

$background-color: lightblue;

.boardsound {
  background-color: $background-color;
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
