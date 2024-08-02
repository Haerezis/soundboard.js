<script setup lang="ts">
import { computed } from 'vue';
import Board from '@/models/Board';
import { is_active, navigate } from '@/router';
import { Separator } from '@/components/ui/separator';
import { Icon } from '@iconify/vue';

const model = defineModel({
  required: true,
  type: Array<Board>,
  default: []
})

const general_section = computed(() => [
  { icon: "mdi:library-music", label: "Sound Library", path_name: "sound-library", path_params: {} },
])

const boards_section = computed(() => model.value.map((b) => ({ icon: "mdi:grid", label: b.name, path_name: "board", path_params: { id: b.id } })))

</script>

<template>
  <div class="navigation-drawer">

    <h2 class="navigation-drawer-headline">General</h2>
    <ul>
      <li
        v-for="item in general_section"
        class="navigation-drawer-item"
        :aria-current="is_active(item.path_name, item.path_params) ? 'page' : false"
        @click="navigate(item.path_name, item.path_params)"
      >
        <Icon
          :icon="item.icon"
          class="navigation-drawer-item-icon"
        />
        <span>{{ item.label }}</span>
      </li>
    </ul>



    <Separator class="my-2" />




    <h2 class="navigation-drawer-headline">Boards</h2>
    <ul>
      <li
        v-for="item in boards_section"
        class="navigation-drawer-item"
        :aria-current="is_active(item.path_name, item.path_params) ? 'page' : false"
        @click="navigate(item.path_name, item.path_params)"
      >
        <Icon
          :icon="item.icon"
          class="navigation-drawer-item-icon"
        />
        <span>{{ item.label }}</span>
      </li>
      <li class="navigation-drawer-item">
        <Icon
          icon="mdi:add"
          class="navigation-drawer-item-icon"
        />
        <span>Add Board..</span>
      </li>
    </ul>
  </div>
</template>
