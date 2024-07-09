import SoundBlob from "./SoundBlob";
import SoundPlayConfiguration from "./SoundPlayConfiguration";

interface SoundData {
  id: string;
  name: string;
  url: string;
  icon_url: string;
  play_configuration?: SoundPlayConfiguration;
}

export class Sound {
  id: string;
  name: string;
  blob: SoundBlob;
  icon_url: string;
  play_configuration: SoundPlayConfiguration;

  constructor(data: SoundData) {
    this.id = data.id;
    this.name = data.name;
    this.blob = new SoundBlob(data.url)
    this.icon_url = data.icon_url
    this.play_configuration = data.play_configuration ?? new SoundPlayConfiguration();
  }

  //return number of seconds
  // duration() {
  //   return this.howl.duration()
  // }
}

export default Sound;
