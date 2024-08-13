<script setup lang="ts">
import TheSoundLibrary from '@/components/TheSoundLibrary';
import sounds from '@/fixtures/sounds';
</script>

<template>
  <div class="p-8">
    <h1 class="mb-4 text-4xl font-extrabold">Sound Library</h1>
    <TheSoundLibrary v-model="sounds" />
  </div>
</template>
