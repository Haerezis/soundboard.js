<script setup lang="ts">
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import { clamp } from 'lodash';

import { PlayerProgress } from "@/components/ui/player-progress"
import { Button } from '@/components/ui/button'
import { seconds_to_HMS } from "@/utils/time";
import Track from '@/models/Track';

import IconPlaceholderUrl from '@/assets/placeholders/generic_image.png'

const track = defineModel<Track>({ required: true })

const playing = computed(() => track.value.playing)

const name = computed(() => track.value.name)

const played_time = computed(() => track.value.position)
const total_time = computed(() => track.value.duration)
const played_percent = computed(() => total_time.value ? played_time.value / total_time.value : 0)
const progress_color = computed(() => playing.value ? 'bg-primary' : 'bg-gray-500')
const progress_value = computed(() => seeking.value ? seek_value.value : played_percent.value)


const progress_component = ref()
const seek_value = ref(0)
const seeking = ref(false)
function start_seek(e: MouseEvent) {
  const set_seek_value_from_mouse_event = (e: MouseEvent) => {
    const progress_root_bb = progress_component.value.$el.getBoundingClientRect()
    seek_value.value = clamp(
      (e.clientX - progress_root_bb.left) / (progress_root_bb.right - progress_root_bb.left),
      0,
      1
    )

    seeking.value = true
  }

  set_seek_value_from_mouse_event(e)

  function mousemove_handler(e: MouseEvent) {
    set_seek_value_from_mouse_event(e)
  }
  function mouseup_handler() {
    track.value.position = seek_value.value * total_time.value
    seeking.value = false
    window.removeEventListener("mousemove", mousemove_handler)
    window.removeEventListener("mouseup", mouseup_handler)
  }
  window.addEventListener('mousemove', mousemove_handler)
  window.addEventListener('mouseup', mouseup_handler)
}


const sound_icon_url = computed(() => track.value.icon_url || IconPlaceholderUrl)
const play_pause_icon = computed(() => playing.value ? "mdi:pause" : "mdi:play")
function toggle_play() {
  if (playing.value) {
    track.value.pause()
  }
  else {
    track.value.play()
  }
}


function toggle_repeat() {
  track.value.repeat = !track.value.repeat
}

function toggle_volume() {
  //todo
  track.value.volume = track.value.volume > 0 ? 0 : 1
}

//TODO repeated callback to update played_time
//TODO volume set
//TODO play/pause on img click
//TODO progress seek set
</script>

<template>
  <div class="root flex flex-nowrap w-full rounded-lg bg-gray-200 select-none">

    <div class="soundicon flex justify-center items-center w-12">
      <img :src="sound_icon_url" class="w-8 h-8 rounded-md" />
      <Icon :icon="play_pause_icon" @click="toggle_play" class="play-pause cursor-pointer absolute text-4xl" />
    </div>



    <div class="min-w-0 flex flex-col w-full ">
      <div class="w-full flex flex-nowrap">
        <p class="w-full truncate leading-6" :title="name">{{ name }}</p>
        <Button variant="ghost" class="h-6 w-8 shrink-0 p-0 px-2">
          <Icon icon="mdi:close" />
        </Button>
      </div>

      <div class="flex flex-nowrap mb-1">
        <PlayerProgress ref="progress_component" :model-value="progress_value * 100" @mousedown="start_seek"
          :bg-color="progress_color" class="h-5 cursor-pointer">
          <span class="leading-6">{{ seconds_to_HMS(total_time * progress_value) }} / {{ seconds_to_HMS(total_time)
            }}</span>
        </PlayerProgress>

        <span class="flex justify-center content-center mx-1">
          <Icon :icon="track.volume > 0 ? 'mdi:volume-high' : 'mdi:mute'" @click="toggle_volume"
            class="cursor-pointer text-xl" :class="track.volume > 0 && 'text-primary' || 'text-gray-500'" />
        </span>

        <span class="flex justify-center content-center mr-2">
          <Icon icon="mdi:repeat" @click="toggle_repeat" class="cursor-pointer text-xl"
            :class="track.repeat && 'text-primary' || 'text-gray-500'" />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.play-pause {
  visibility: hidden;
}

.soundicon:hover .play-pause {
  visibility: visible !important;
}
</style>
