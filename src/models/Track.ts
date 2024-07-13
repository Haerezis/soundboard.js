import { v4 as uuidv4 } from 'uuid';
import { Howl } from "howler";
import { BoardSound } from "./BoardSound";
import { Sound } from "./Sound";
import { SoundPlayConfiguration } from "./SoundPlayConfiguration";

export type TrackTerminationCallback = (track: Track) => void

export class Track {
  id: string;
  created_at: Date;
  sound: Sound;
  boardsound: BoardSound;
  howl: Howl;
  ready: boolean = false;
  private _position: number = 0;
  private _duration: number = 0;
  private _playing: boolean = false;
  private _volume: number = 1;//between 0 & 1
  private _repeat: boolean = false;
  private _termination_callback?: TrackTerminationCallback;


  constructor(boardsound: BoardSound, configuration?: SoundPlayConfiguration, termination_callback?: TrackTerminationCallback) {
    this.id = uuidv4()
    this.created_at = new Date()
    this.boardsound = boardsound
    this.sound = boardsound.sound
    this._volume = configuration?.volume ?? this.sound.play_configuration.volume ?? this._volume
    this._repeat = configuration?.repeat ?? this.sound.play_configuration.repeat ?? this._repeat
    this._termination_callback = termination_callback

    this.howl = new Howl({
      src: [this.sound.blob.url as string],
      loop: this.repeat,
      volume: this.volume,
      preload: false
    })
  }

  load() {
    this.howl.on("loaderror", (_, error) => console.error(`${this.to_str_prefix()} -- load error : ${error}`))
    this.howl.on("playerror", (_, error) => console.error(`${this.to_str_prefix()} -- play error ", ${error}`))
    this.howl.on("play", () => {
      this._playing = true;
      (function set_update_duration_timeout(self: Track) {
        if (self.playing) {
          self.update_position_from_howl()
          setTimeout(() => {
            set_update_duration_timeout(self)
          }, 200)
        }
      })(this)
    })
    this.howl.on("pause", () => this._playing = false)
    this.howl.on("load", () => this._duration = this.howl.duration())
    this.howl.on("end", () => this.onplayend())
    this.howl.load();
  }

  play() {
    this.howl.play()
  }

  pause() {
    this.howl.pause()
  }

  stop() {
    this.howl.stop()
    this.terminate()
  }

  get name() {
    return this.sound.name
  }
  get icon_url() {
    return this.sound.icon_url
  }

  get playing() {
    return this._playing
  }

  get duration() {
    return this._duration
  }

  get position() {
    return this._position

  }
  //value in "seconds"
  set position(value: number) {
    this.howl.seek(value)
    this.update_position_from_howl()
  }
  update_position_from_howl() {
    this._position = this.howl.seek()
  }

  get volume() {
    return this._volume
  }
  set volume(value: number) {
    this._volume = value
    this.howl.volume(this._volume)
  }

  get repeat() {
    return this._repeat
  }
  set repeat(value: boolean) {
    this._repeat = value
    this.howl.loop(this._repeat)
  }

  onplayend() {
    this._position = this.duration
    if (!this.repeat && this._termination_callback) {
      this.terminate()
    }
  }

  terminate() {
    this.howl.unload()
    this._termination_callback?.(this)
  }

  to_str_prefix() {
    return `(Sound#${this.sound.id} '${this.sound.name}')[Track#${this.id}]`
  }
}

export default Track;
