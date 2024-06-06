import { Sound } from "./Sound";
import { Howl } from "howler";
import SoundPlayConfiguration from "./SoundPlayConfiguration";

class Track {
  sound: Sound;
  sound_play_configuration: SoundPlayConfiguration;
  howl: Howl;

  constructor(sound: Sound, configuration?: SoundPlayConfiguration) {
    this.sound = sound;
    this.sound_play_configuration = configuration ?? this.sound.play_configuration;
    this.howl = new Howl({
      src: this.sound.url,
    });
  }

  play() {
    this.howl.play();
  }
}

export default Track;
