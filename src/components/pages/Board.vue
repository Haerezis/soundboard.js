<script setup lang="ts">
import boards from '@/fixtures/boards'
import { current_route } from '@/router';

import TheBoardGrid from '@/components/TheBoardGrid.vue';
import TheTracksSidebar from '@/components/TheTracksSidebar.vue';
import { computed } from 'vue';

const current_board = computed(() => boards.find((b) => b.id == current_route.value.params.id))
</script>


<template>
  <div class="flex">
    <TheBoardGrid
      v-if="current_board"
      v-model="current_board"
    />
    <TheTracksSidebar class="shrink-0" />
  </div>
</template>
