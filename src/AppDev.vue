<script setup lang="ts">
import { reactive, ref } from 'vue'
import boards from '@/fixtures/boards'
import { TrackCard } from './components/ui/track-card'
import { VolumeSlider } from './components/ui/volume-slider'
import { VerticalSlider } from './components/ui/vertical-slider'

import { use_tracks_store } from '@/stores/TrackStore'

const tracks_store = use_tracks_store()

const track = reactive(tracks_store.create(boards[0].board_sounds[0]))
track.load()

</script>

<template>
  <div class="w-full h-svh flex flex-col justify-center content-center">
  </div>
</template>
