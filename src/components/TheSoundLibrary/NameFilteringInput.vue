<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue';

const input_value = defineModel<string>()
const emit = defineEmits<{
  (e: 'commit'): void
}>()

function commit() {
  emit("commit")
}

function clear() {
  input_value.value = ""
  commit()
}
</script>

<template>
  <div class="flex">
    <Button
      variant="outline"
      class="rounded-r-none border-r-0 font-semibold"
      @click="commit"
    >
      Filter
    </Button>
    <div class="relative w-full items-center">
      <Input
        id="search"
        type="text"
        placeholder="Filter by name..."
        class="pl-10 pr-8 rounded-l-none"
        v-model="input_value"
        @keydown.enter="commit"
      />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <Icon
          icon="mdi:search"
          class="text-muted-foreground"
          width="24"
          height="24"
        />
      </span>

      <Button
        variant="ghost"
        class="absolute end-0 inset-y-0 flex items-center justify-center p-0 m-2 w-5 h-5"
        @click="clear"
        v-if="input_value"
      >
        <Icon
          icon="mdi:close"
          class="text-muted-foreground"
          width="20"
          height="20"
        />
      </Button>
    </div>

  </div>
</template>
