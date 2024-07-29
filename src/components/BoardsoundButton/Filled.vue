<script setup lang="ts">
import { ref, computed } from "vue";
import { last } from "lodash"
import { onLongPress } from '@/composables/vueuse/core/onLongPress'
import shadeBlendColor from "shade-blend-color"

import Boardsound from "@/models/Boardsound"
import Track from "@/models/Track"
import { use_tracks_store } from '@/stores/TrackStore'
import { cn } from "@/shadcn_utils";

import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import Base from "./Base.vue"

import IconPlaceholderUrl from '@/assets/placeholders/generic_image.png'


const model = defineModel({ type: Boardsound, required: true })
const tracks_store = use_tracks_store()

const root_html_ref = ref()
const sound_icon_url = computed(() => model.value.sound.icon_url || IconPlaceholderUrl)
const tracks = computed(() => tracks_store.all_grouped_by_boardsound_id[model.value.id])
const latest_track = computed(() => last(tracks.value))
const active = computed(() => !!latest_track.value)
const show_stop_button = computed(() => active.value && (latest_track.value?.id != longpress_track.value?.id || tracks.value.length > 1))
const bg_color = computed(() => model.value.color_hexcode())
const blink_color = computed(() => shadeBlendColor(0.3, bg_color.value))
const color_style_attribute = computed(() => `
background-color: ${bg_color.value};
--bg-color:${bg_color.value};
--blink-color:${blink_color.value};
`)


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

function stop_latest_track() {
  stop_track(latest_track.value)
}

const longpress_track = ref<Track | null>()
function longpress_play() {
  longpress_track.value = play()
}
function longpress_stop() {
  stop_track(longpress_track.value)
  longpress_track.value = null
}

onLongPress(
  root_html_ref,
  longpress_play,
  {
    modifiers: {
      prevent: true,
      left: true,
    },
    distanceThreshold: false,
    onMouseUp: (_, is_long_press) => {
      if (is_long_press) {
        longpress_stop()
      }
      else {
        play()
      }
    }
  }
)


</script>

<template>
  <Base
    ref="root_html_ref"
    class="relative flex flex-col justify-center items-center cursor-pointer"
    :class="{ active: active }"
    :style="color_style_attribute"
  >
  <!-- Sound Name -->
  <div class="h-1/5 px-[10%] w-full flex justify-center items-center">
    <span class="truncate leading-loose">{{ model?.sound?.name }}</span>
  </div>

  <!-- Sound Icon -->
  <div class="w-3/5 h-4/5 pb-[20%]">
    <img
      :src="sound_icon_url"
      class="object-cover w-full h-full rounded-md"
    />
  </div>

  <!-- Stop Button -->
  <Transition
    enter-active-class="fadeUp-enter-active"
    leave-active-class="fadeDown-leave-active"
  >
    <!-- Need empty pointerup/pointerdown (with stop) event handler to prevent useLongPress to catch the bubbling event -->
    <Button
      v-if="show_stop_button"
      class="absolute -bottom-[12.5%] rounded-full h-1/4 w-1/4 bg-red-500 p-[5%]"
      @click.stop="stop_latest_track"
      @pointerup.stop=""
      @pointerdown.stop=""
    >
      <Icon
        class="w-full h-full"
        icon="mdi:stop"
      />
    </Button>
  </Transition>




  <!-- Configuration Pips -->
  <div class="w-[18%] absolute top-[20%] -left-[9%] flex flex-col justify-center">
    <div
      class="w-full aspect-square boardsound rounded-full p-[10%] mb-2"
      :class="{ active: active, invisible: !model.play_configuration.repeat }"
      title="Repeat play enabled"
      :style="color_style_attribute"
    >
      <Icon
        icon="mdi:repeat"
        class="w-full h-full"
      />
    </div>

    <div
      class="w-full aspect-square boardsound rounded-full p-[10%] mb-2"
      :class="{ active: active, invisible: !model.play_configuration.concurrent }"
      title="Concurrent play allowed"
      :style="color_style_attribute"
    >
      <Icon
        icon="mdi:playlist-music"
        class="w-full h-full"
      />
    </div>
  </div>
  </Base>
</template>

<style lang="scss" scoped>
.active {
  -webkit-animation: blink 1s infinite;
  -moz-animation: blink 1s infinite;
  -o-animation: blink 1s infinite;
  animation: blink 1s infinite;
}

@keyframes blink {
  0% {
    background-color: #{var(--bg-color)}
  }

  50% {
    background-color: #{var(--blink-color)}
  }

  100% {
    background-color: #{var(--bg-color)}
  }
}
</style>
