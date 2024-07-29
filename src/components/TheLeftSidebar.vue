<script setup lang="ts">
import { computed } from 'vue';
import Board from '@/models/Board';
import { Separator } from '@/components/ui/separator';
import { Icon } from '@iconify/vue';

const model = defineModel({
  required: true,
  type: Array<Board>,
  default: []
})
const data = computed(() => [
  {
    headline: "General",
    items: [
      { icon: "mdi:home", label: "Home" },
      { icon: "mdi:library-music", label: "Sound Library" },
    ],
    separator: true,
  },
  {
    headline: "Boards",
    items: [
      ...model.value.map((b) => ({ icon: "mdi:grid", label: b.name })),
      { icon: "mdi:add", label: "Add new..." }
    ]
  }
])

</script>

<template>
  <div class="w-[360px] min-h-full p-3 flex flex-col border-x overflow-auto">
    <template v-for="section in data">
      <h2 class="h-14 px-4 py-4 font-bold text-primary/80">{{ section.headline }}</h2>
      <ul>
        <li
          v-for="item in section.items"
          class="h-14 py-4 px-4 flex text-primary/80 rounded-full cursor-pointer hover:bg-secondary focus:bg-secondary"
        >
          <Icon
            :icon="item.icon"
            class="w-6 h-6 mr-3 text-primary/80"
          />
          <span>{{ item.label }}</span>
        </li>
      </ul>
      <Separator
        v-if="section.separator"
        class="my-2"
      />
    </template>
  </div>
</template>
