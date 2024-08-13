<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { Icon } from '@iconify/vue';
import { PlayerProgressSlider } from '@/components/ui/player-progress-slider'
import { VolumeSlider } from '@/components/ui/volume-slider'
import { Button } from '@/components/ui/button'
import { seconds_to_HMS } from "@/utils/time";
import Track from '@/models/Track';

import IconPlaceholderUrl from '@/assets/placeholders/generic_image.png'




const track = defineModel<Track>({ required: true })

const playing = computed(() => track.value.playing)

const name = computed(() => track.value.name)

const root_style = computed(() => `background-color: ${track.value.boardsound.color_hexcode()}`)
const progress_color = computed(() => playing.value ? 'bg-primary' : 'bg-gray-500')

const progress_value = ref(track.value.position)
const progress_seeking = ref(false)
const progress_value_for_slider = computed({
  get() { return [progress_value.value] },
  set(v) {
    progress_seeking.value = true
    progress_value.value = v[0]
  }
})
function commit_seek_value(v: number[]) {
  track.value.position = v[0]
  progress_value.value = v[0]
  progress_seeking.value = false
}
watch(track.value, () => {
  if (!progress_seeking.value) {
    progress_value.value = track.value.position
  }
})




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

function stop() {
  track.value.stop()
}

function toggle_repeat() {
  track.value.repeat = !track.value.repeat
}

//TODO repeated callback to update played_time
//TODO volume set
//TODO play/pause on img click
//TODO progress seek set
</script>

<template>
  <div
    class="root flex flex-nowrap w-full rounded-lg select-none"
    :style="root_style"
  >

    <div class="soundicon flex justify-center items-center w-12">
      <img
        :src="sound_icon_url"
        class="w-8 h-8 rounded-md"
      />
      <Icon
        :icon="play_pause_icon"
        @click="toggle_play"
        class="play-pause bg-gray-500/20 transition-opacity cursor-pointer absolute text-3xl"
      />
    </div>



    <div class="min-w-0 flex flex-col w-full ">
      <div class="w-full flex flex-nowrap">
        <p
          class="w-full truncate leading-6"
          :title="name"
        >
          {{ name }}
        </p>
        <Button
          variant="ghost"
          class="h-6 w-8 shrink-0 p-0 px-2 bg-red-500 hover:bg-red-400"
          @click="stop"
        >
          <Icon
            class="text-white"
            icon="mdi:stop"
          />
        </Button>
      </div>

      <div class="flex flex-nowrap mb-1">
        <PlayerProgressSlider
          v-model="progress_value_for_slider"
          :min="0"
          :max="track.duration"
          :step="0.1"
          :fg-color="progress_color"
          :animation="!progress_seeking"
          class="h-5"
          @value-commit="commit_seek_value"
        >
          <span class="leading-6"> {{ seconds_to_HMS(progress_value) }} / {{ seconds_to_HMS(track.duration) }} </span>
        </PlayerProgressSlider>

        <span class="flex justify-center content-center mx-1">
          <VolumeSlider v-model="track.volume" />
        </span>

        <span class="flex justify-center content-center mr-2">
          <Icon
            icon="mdi:repeat"
            @click="toggle_repeat"
            class="cursor-pointer text-xl"
            :class="track.repeat && 'text-primary' || 'text-gray-500'"
          />
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
