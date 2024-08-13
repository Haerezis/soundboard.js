<script setup lang="ts">
import { computed, ref } from 'vue';
import Sound from '@/models/Sound';
import { seconds_to_HMS } from '@/utils/time';

import { Icon } from '@iconify/vue';
import { Button } from 'components/ui/button'
import { Separator } from 'components/ui/separator';
import { PlayerProgressSlider } from 'components/ui/player-progress-slider';
import ActionsDropdownMenu from './ActionsDropdownMenu.vue';

import IconPlaceholderUrl from '@/assets/placeholders/generic_image.png'

import { useHowler } from './useHowler'
import shared_state from './SharedState'

const sound = defineModel<Sound>({ required: true })
const sound_icon_url = computed(() => sound.value.icon_url || IconPlaceholderUrl)

const howl = useHowler(sound.value, 10)

function play() {
  //Stop currently playing
  shared_state.stop_currently_playing?.()
  //Setup shared state so other can stop it
  shared_state.stop_currently_playing = () => stop()
  howl.play()
}

function stop() {
  //stop howler
  howl.stop()
}

function play_stop() {
  howl.playing.value ? stop() : play()
}


const progress_for_slider = computed({
  get() { return [howl.progress.value] },
  set(v) {
    howl.seek(v[0])
  }
})
</script>

<template>
  <div class="w-full flex flex-col rounded-sm overflow-hidden">
    <!-- Main content -->
    <div class="flex h-12 m-2 mb-1 mt-3">

      <Button
        class="rounded-full p-2 h-full aspect-square"
        @click.left="play_stop"
      >
        <Icon
          :icon="howl.playing.value ? 'mdi:stop' : 'mdi:play'"
          class="w-full h-full"
        />
      </Button>

      <Separator
        decorative
        orientation="vertical"
        class="mx-2"
      />


      <img
        :src="sound_icon_url"
        class="w-12 h-12 rounded-md"
      />

      <span
        class="mx-2 flex items-center w-full truncate"
        :title="sound.name"
      >
        {{ sound.name }}
      </span>

      <span class="flex items-center justify-end mr-4 w-32">
        <template v-if="howl.progress.value > 0">{{ seconds_to_HMS(howl.progress.value) }} / </template>
        {{ seconds_to_HMS(sound.duration) }}
      </span>

      <Separator
        decorative
        orientation="vertical"
        class="mx-2"
      />

      <div class="my-auto">
        <ActionsDropdownMenu v-model="sound" />
      </div>
    </div>


    <!-- Play progress bar -->
    <PlayerProgressSlider
      v-model="progress_for_slider"
      :min="0"
      :max="sound.duration"
      :step="0.1"
      bg-color="bg-white"
      class="h-2"
    />
  </div>
</template>
