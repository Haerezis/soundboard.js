<script setup lang="ts">
import { ref, reactive } from 'vue'
import Board from "@/models/Board"
import boards from '@/fixtures/boards'
import BoardGrid from '@/components/BoardGrid.vue'
import { TrackCard } from './components/ui/track-card'

import { use_tracks_store } from '@/stores/TrackStore'

const tracks_store = use_tracks_store()

const leftDrawerOpen = ref(true)
const rightDrawerOpen = ref(true)

const current_board = ref()
const set_board = (board: Board) => current_board.value = board

const track = reactive(tracks_store.create(boards[0].board_sounds[0]))
track.load()
</script>

<template>
  <q-layout class="soundboardjs" view="lHr lpR lFr">
    <q-drawer v-model="leftDrawerOpen" :width="300" :breakpoint="500" bordered class="bg-grey-9">
      <q-scroll-area class="fit">

        <q-list>
          <q-item-label header>
            <q-icon name="grid_view" /> Boards
          </q-item-label>

          <template v-for="(board, index) in boards" :key="board.name">
            <q-item @click="set_board(board)" :active="board.name === current_board?.name" clickable v-ripple>
              <q-item-section>
                {{ board.name }}
              </q-item-section>
            </q-item>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-item-label header class="text-center">
        <q-icon name="video_settings" /> Controls
        <q-list>
          <q-item class="q-pa-none">
          </q-item>
          <q-item v-for="track in tracks_store.all">
            <q-item-label>{{ track.sound.name }}</q-item-label>
          </q-item>
        </q-list>
      </q-item-label>
    </q-drawer>

    <q-page-container>
      <!-- <BoardGrid v-if="current_board" v-model="current_board" /> -->

      <div class="w-full h-svh flex justify-center content-center">
        <div class="w-96">
          <TrackCard v-model="track" />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>
