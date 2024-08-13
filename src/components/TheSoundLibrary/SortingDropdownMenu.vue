<script setup lang="ts">
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue';
import { ToggleGroup, ToggleGroupItem } from 'components/ui/toggle-group';
import SortingDirection from '@/types/SortingDirection';
import { ref } from 'vue';

const name_sorting = defineModel<SortingDirection>("name", { required: true })
const duration_sorting = defineModel<SortingDirection>("duration", { required: true })

const dropdown_menu_open = ref(false)
</script>

<template>
  <DropdownMenu v-model:open="dropdown_menu_open">
    <DropdownMenuTrigger as-child>
      <Button
        variant="outline"
        class="py-2 px-2"
      >
        <Icon
          icon="mdi:sort"
          class="w-full h-full"
        />
        <span class="mx-2">Sort by</span>
        <Icon
          :icon="dropdown_menu_open ? 'mdi:chevron-up' : 'mdi:chevron-down'"
          class="w-full h-full"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem
        @select.prevent=""
        class="focus:bg-inherit flex flex-col"
      >
        <div class="w-full mb-2">
          Name :
        </div>
        <ToggleGroup v-model="name_sorting">
          <ToggleGroupItem value="asc">
            Ascending
            <Icon
              icon="mdi:sort-reverse-variant"
              width="19"
              height="19"
              class="ml-2"
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="desc">
            Descending
            <Icon
              icon="mdi:sort-variant"
              width="19"
              height="19"
              class="ml-2"
            />
          </ToggleGroupItem>

        </ToggleGroup>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuItem
        @select.prevent=""
        class="focus:bg-inherit flex flex-col"
      >
        <div class="w-full mb-2">
          Duration :
        </div>
        <ToggleGroup v-model="duration_sorting">
          <ToggleGroupItem value="asc">
            Ascending
            <Icon
              icon="mdi:sort-reverse-variant"
              width="19"
              height="19"
              class="ml-2"
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="desc">
            Descending
            <Icon
              icon="mdi:sort-variant"
              width="19"
              height="19"
              class="ml-2"
            />
          </ToggleGroupItem>
        </ToggleGroup>
      </DropdownMenuItem>

    </DropdownMenuContent>
  </DropdownMenu>
</template>
