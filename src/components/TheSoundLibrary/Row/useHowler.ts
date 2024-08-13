import { ref, watch } from 'vue';
import { Howl } from "howler"
import Sound from '@/models/Sound';

export function useHowler(sound: Sound, progress_frequency: number = 10) {
  const playing = ref(false)
  const progress = ref(0)
  let interval_id: NodeJS.Timeout | undefined;

  const howl = new Howl({
    src: [sound.blob.url as string],
    preload: false,
    onloaderror: (_, error) => console.error(`${sound.name} -- load error : ${error}`),
    onplayerror: (_, error) => console.error(`${sound.name} -- play error : ${error}`),
    onend: () => stop(),
  })

  watch(playing, (new_value) => {
    if (new_value) {
      interval_id = setInterval(
        () => progress.value = howl.seek(),
        1000 / progress_frequency
      )
    }
    else {
      clearInterval(interval_id)
      interval_id = undefined
    }
  })

  function play() {
    if (howl.state() == "unloaded") {
      howl.load()
    }
    howl.play()
    playing.value = true
  }

  function stop() {
    //stop howler
    howl.stop()
    playing.value = false
    progress.value = 0
  }

  function pause() {
    howl.pause()
    playing.value = false
  }

  function seek(value: number) {
    console.log(value)
    howl.seek(value)
    progress.value = howl.seek()
  }

  return { source: howl, playing, progress, play, stop, pause, seek }
}
