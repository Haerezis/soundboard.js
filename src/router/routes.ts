import BoardPage from "@/components/pages/Board.vue"
import SoundLibraryPage from "@/components/pages/SoundLibrary.vue"

export const routes = [
  {
    path: '/',
    name: 'sound-library',
    component: SoundLibraryPage,
    alias: '/sound-library'
  },
  {
    path: '/boards/:id',
    name: 'board',
    component: BoardPage,
  },
]
