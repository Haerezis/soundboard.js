<script setup lang="ts">
import { Separator } from '@/components/ui/separator';
import { Icon } from '@iconify/vue';

import { use_tracks_store } from '@/stores/TrackStore'
import { TrackCard } from '@/components/TrackCard'

const tracks_store = use_tracks_store()

</script>

<template>
  <div class="w-[360px] min-h-full p-3 flex flex-col border-x overflow-auto">
    <h2 class="h-14 px-4 py-4 font-bold text-center text-primary/80">Tracks</h2>

    <div
      v-for="(track, i) in tracks_store.all"
      :key="track.id"
      class="w-[336px] h-14 py-4"
    >
      <TrackCard v-model="tracks_store.all[i]" />
    </div>
  </div>
</template>
