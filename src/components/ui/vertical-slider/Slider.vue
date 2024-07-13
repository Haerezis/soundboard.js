<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import type { SliderRootEmits, SliderRootProps } from 'radix-vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'radix-vue'
import { cn } from '@/shadcn_utils'

const props = withDefaults(
  defineProps<SliderRootProps & { class?: HTMLAttributes['class'], bgColorClass?: string, colorClass?: string }>(),
  {
    bgColorClass: "bg-primary/20",
    colorClass: "bg-primary"
  }
)
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = computed(() => {
  const { class: _1, orientation: _2, bgColorClass: _3, colorClass: _4, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SliderRoot
    :class="cn(
      'relative flex flex-col content-center justify-center h-full w-1.5 px-3.5 touch-none select-none items-center cursor-pointer',
      props.class,
    )"
    v-bind="forwarded"
    orientation="vertical"
  >
    <SliderTrack :class="cn(
      'relative w-1.5 h-full grow overflow-hidden rounded-full',
      props.class,
      props.bgColorClass
    )">
      <SliderRange :class="cn(
        'absolute w-full',
        props.colorClass
      )" />
    </SliderTrack>
    <SliderThumb
      v-for="(_, key) in modelValue"
      :key="key"
      class="block h-1.5 w-5 rounded-full border-2 border-primary bg-background focus-visible:outline-none"
    />
  </SliderRoot>
</template>
