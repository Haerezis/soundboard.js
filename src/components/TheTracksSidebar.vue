<script setup lang="ts">
import { Separator } from '@/components/ui/separator';
import { Icon } from '@iconify/vue';

import { use_tracks_store } from '@/stores/TrackStore'
import { TrackCard } from '@/components/TrackCard'

const tracks_store = use_tracks_store()

</script>

<template>
  <div class="navigation-drawer">
    <h2 class="navigation-drawer-headline">Tracks</h2>

    <div
      v-for="(track, i) in tracks_store.all"
      :key="track.id"
      class="w-full h-14"
    >
      <TrackCard v-model="tracks_store.all[i]" />
    </div>
  </div>
</template>
