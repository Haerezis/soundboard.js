<script setup lang="ts">
import { ref } from "vue"

const editable = ref(false)
</script>

<template>
  <div class="boardsound" :class="{ editable: editable }">
  </div>
</template>

<style lang="scss" scoped>
@import "./common.scss";

.boardsound {
  background-color: rgb(248, 248, 248);
}

.boardsound.editable {
  border: lightgrey dashed;
}
</style>
