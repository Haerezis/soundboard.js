<script setup lang="ts">
import { computed } from 'vue'
import { HoverCardContent, HoverCardRoot, HoverCardTrigger, HoverCardPortal } from 'radix-vue'
import { Icon } from '@iconify/vue';

import { VerticalSlider } from '@/components/ui/vertical-slider';

const modelValue = defineModel<number>({ required: true })
const modelValueSlider = computed({
  get() { return [modelValue.value] },
  set(v) { modelValue.value = v[0] }
})

let muted_value = 0
function mute() {
  if (modelValue.value > 0) {
    muted_value = modelValue.value
    modelValue.value = 0
  }
  else if (muted_value == 0) {
    modelValue.value = 1
  }
  else {
    modelValue.value = muted_value
    muted_value = 0
  }
}
</script>

<template>
  <HoverCardRoot
    :close-delay="0"
    :open-delay="0"
  >
    <HoverCardTrigger>
      <Icon
        :icon="modelValue > 0 ? 'mdi:volume-high' : 'mdi:mute'"
        class="cursor-pointer text-xl"
        :class="modelValue > 0 && 'text-primary' || 'text-gray-500'"
        @click="mute"
      />
    </HoverCardTrigger>


    <HoverCardContent
      :side="'top'"
      :side-offset="6"
      class="rounded-md border backdrop-blur-lg px-1 py-1.5"
    >
      <VerticalSlider
        v-model="modelValueSlider"
        :min="0"
        :max="1"
        :step="0.1"
        class="h-12"
      />
    </HoverCardContent>
  </HoverCardRoot>
</template>
