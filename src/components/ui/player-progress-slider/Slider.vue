<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import type { SliderRootEmits, SliderRootProps } from 'radix-vue'
import { SliderRange, SliderRoot, SliderTrack, useForwardPropsEmits } from 'radix-vue'
import { cn } from '@/shadcn_utils'

const props = withDefaults(
  defineProps<SliderRootProps & { class?: HTMLAttributes['class'], fgColor?: string, bgColor?: string, animation?: boolean }>(),
  {
    bgColor: "bg-gray-300",
    fgColor: "bg-primary",
    animation: false,
  },
)
const emits = defineEmits<SliderRootEmits>()


const delegatedProps = computed(() => {
  const { class: _, bgColor: __, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SliderRoot
    :class="cn(
      'relative flex w-full h-4 touch-none select-none cursor-pointer items-center',
      props.class,
    )"
    v-bind="forwarded"
  >
    <SliderTrack :class="cn('relative h-full w-full flex-1 grow bg-gray-300', props.bgColor)">
      <SliderRange
        class="absolute h-full"
        :class="[props.animation && 'transition-all ease-linear duration-100 bg-primary', props.fgColor]"
      >
      </SliderRange>
      <span class="absolute top-0 left-4 h-full w-full">
        <slot />
      </span>
    </SliderTrack>
  </SliderRoot>
</template>
