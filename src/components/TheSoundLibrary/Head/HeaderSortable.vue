<script setup lang="ts">
import { computed, ref } from "vue"
import { Icon } from "@iconify/vue";
import { Button } from "components/ui/button"

import { Column, SortDirection } from '@tanstack/vue-table'
import Sound from "@/models/Sound";

const props = defineProps<{
  column: Column<Sound>
}>()

const sorting_direction = ref<false | SortDirection>(props.column.getIsSorted())
const icon = computed(() => ({ asc: "mdi:sort-ascending", desc: "mdi:sort-descending" }[sorting_direction.value.toString()] ?? "mdi:sort"))
function toggle_sorting() {
  props.column.toggleSorting(props.column.getIsSorted() === 'asc')
  sorting_direction.value = props.column.getIsSorted()
}
</script>

<template>
  <Button
    variant="link"
    class="p-0 text-inherit hover:no-underline hover:text-accent-foreground"
    @click="toggle_sorting"
  >
    <span>
      <slot />
    </span>
    <Icon
      :icon="icon"
      class="ml-2 h-4 w-4"
    />
  </Button>

</template>
