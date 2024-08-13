<script setup lang="ts">
import boards from '@/fixtures/boards'
import SoundCard from "@/components/SoundCard"
import SortingDropdownMenu from "@/components/SoundCard/SortingDropdownMenu.vue"
import NameFilteringInput from "@/components/SoundCard/NameFilteringInput.vue"
import { ref } from 'vue';

const sound1 = boards[0].board_sounds[0].sound
const sound2 = boards[1].board_sounds[0].sound

const tmp = ref("")
</script>

<template>
  <div class="flex h-screen justify-center items-center">
    <NameFilteringInput v-model="tmp" />
    <!-- <div class="w-[75%]"> -->
    <!--   <SoundCard -->
    <!--     v-model="sound1" -->
    <!--     class=" border border-gray-300" -->
    <!--   /> -->
    <!-- </div> -->
  </div>
</template>
