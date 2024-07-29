<script setup lang="ts">
import Boardsound from '@/models/Boardsound';
import Filled from './Filled.vue';
import Empty from './Empty.vue';
import { computed } from 'vue';

const boardsound = defineModel({
  type: Boardsound
})


const renderedComponent = computed(() => boardsound.value ? Filled : Empty)
</script>

<template>
  <component
    :is="renderedComponent"
    v-model="boardsound"
  />
</template>
