<script setup lang="ts">
import { type HTMLAttributes, computed, ref } from 'vue'
import { clamp } from 'lodash';
import {
  ProgressIndicator,
  ProgressRoot,
  type ProgressRootProps,
} from 'radix-vue'
import { cn } from '@/shadcn_utils'

const props = withDefaults(
  defineProps<ProgressRootProps & { class?: HTMLAttributes['class'], bgColor?: string }>(),
  {
    modelValue: 0,
    bgColor: "bg-primary"
  },
)

const delegatedProps = computed(() => {
  const { class: _, bgColor: __, ...delegated } = props

  return delegated
})
</script>

<template>
  <ProgressRoot ref="progress_root" v-bind="delegatedProps" :class="cn(
    'relative w-full overflow-hidden rounded-full bg-gray-300',
    props.class)">
    <ProgressIndicator class="h-full w-full flex-1 transition-all" :class="props.bgColor ?? 'bg-primary'"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`" />

    <span class="absolute top-0 left-4 h-full w-full">
      <slot />
    </span>
  </ProgressRoot>
</template>
