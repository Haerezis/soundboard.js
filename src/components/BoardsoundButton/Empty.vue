<script setup lang="ts">
import Base from "./Base.vue";
import { ref } from "vue"

const editable = ref(false)
</script>

<template>
  <Base
    class="bg-gray-100"
    :class="{ editable: editable }"
  >

  </Base>
</template>

<style lang="scss" scoped>
.editable {
  border: lightgrey dashed;
}
</style>
