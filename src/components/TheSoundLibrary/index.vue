<script setup lang="ts" generic="TData, TValue">
import { ref, computed } from 'vue'
import { orderBy } from 'lodash'

import Sound from '@/models/Sound';
import SortingDirection from '@/types/SortingDirection';
import NameFilteringInput from './NameFilteringInput.vue'
import SoundRow from './Row';
import Head from './Head'


const sounds = defineModel({ required: true, type: Array<Sound> })
const filtered_sounds = computed(() => {
  const search = name_filtering.value.toLowerCase()
  return sounds.value.filter((s) => s.name.toLowerCase().includes(search))
})
const filtered_and_sorted_sounds = computed(() => orderBy(filtered_sounds.value, [sorting.value[0]], [sorting.value[1]]))

const name_filtering = ref("")
const live_name_filtering = ref("")
const sorting = ref<["name" | "duration", SortingDirection]>(["name", "asc"])

function commit_filtering() {
  name_filtering.value = live_name_filtering.value
}
</script>

<template>
  <div>
    <div class="flex flex-row justify-between items-center py-4">
      <div class="w-1/3">
        <NameFilteringInput
          v-model="live_name_filtering"
          @commit="commit_filtering"
        />

      </div>
    </div>

    <div class="rounded overflow-hidden border  border-gray-300">

      <Head v-model="sorting" />

      <ul class="max-h-[75dvh] overflow-y-auto">
        <li
          v-for="sound in filtered_and_sorted_sounds"
          :key="sound.id"
          class="border-t border-gray-300 "
        >
          <SoundRow :model-value="sound" />
        </li>
      </ul>
    </div>
  </div>
</template>
