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
const latest_track = computed(() => last(tracks_store.all_grouped_by_boardsound_id[model.value.id]))
const active = computed(() => !!latest_track.value)

function play() {
  console.log("play")
  const track = tracks_store.create(model.value)
  track?.play()

  return track
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

function stop_latest_track() {
  stop_track(latest_track.value)
}

</script>

<template>
  <div
    ref="root_elt_html_ref"
    class="boardsound relative rounded-3xl flex flex-col justify-center items-center bg-[lightblue]"
    :class="{ active: active }"
    @click.prevent="play"
    @long-press="longpress_play_and_stop"
    data-long-press-delay="500"
  >
    <!-- Sound Name -->
    <div class="h-1/5 px-[10%] w-full flex justify-center items-center">
      <span class="truncate leading-loose">{{ model?.sound?.name }}</span>
    </div>

    <!-- Sound Icon -->
    <div class="w-3/5 h-3/5">
      <img
        :src="sound_icon_url"
        class="object-cover w-full h-full rounded-md"
      />
    </div>

    <!-- Stop Button -->
    <div
      class="absoltute w-full h-1/5 flex justify-center items-center"
      :class="{ '!visible': true || active }"
    >
      <Button
        class="w-2/6 h-4/6 bg-red-500 shadow-md"
        @click.stop="stop_latest_track"
      >
        <Icon
          class="w-auto h-full aspect-square"
          icon="mdi:stop"
        />
      </Button>
    </div>




    <!-- Configuration Pips -->
    <div class="w-[15%] absolute top-[20%] -left-[7.5%] flex flex-col justify-center">
      <div
        v-if="model.play_configuration.repeat"
        class="w-full aspect-square .boardsound rounded-md bg-[lightblue] mb-2"
        title="Repeat play enabled"
      >
        <Icon
          icon="mdi:repeat"
          class="w-full h-full"
        />
      </div>

      <div
        v-if="model.play_configuration.concurrent"
        class="w-full aspect-square bg-secondary bg-[lightblue] rounded-md mb-2"
        title="Concurrent play allowed"
      >
        <Icon
          icon="mdi:playlist-music"
          class="w-full h-full"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./common.scss";

$background-color: lightblue;

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
