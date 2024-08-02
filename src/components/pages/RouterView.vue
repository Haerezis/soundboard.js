<script setup lang="ts">
import { current_route } from '@/router'; 
</script>

<template>
  <div class="w-full">
    <component
      v-if="current_route"
      :is="current_route.component"
    ></component>
  </div>
</template>
