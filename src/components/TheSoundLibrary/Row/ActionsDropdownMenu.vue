<script setup lang="ts">
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue';
import Sound from '@/models/Sound';

const sound = defineModel({ required: true, type: Sound }) 
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        class="w-10 h-10 p-2 rounded-full"
      >
        <span class="sr-only">Open menu</span>
        <Icon
          icon="mdi:more-vert"
          class="w-full h-full"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem class="cursor-pointer">
        <Icon
          icon="mdi:edit"
          class="mr-2"
        />Edit
      </DropdownMenuItem>

      <DropdownMenuItem
        class="cursor-pointer bg-destructive text-destructive-foreground fovus:bg-destructive/80 hover:bg-destructive/80"
      >
        <Icon
          icon="mdi:trash"
          class="mr-2"
        /> Delete
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
