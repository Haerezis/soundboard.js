import SoundBlob from "./SoundBlob";
import SoundPlayConfiguration from "./SoundPlayConfiguration";

interface SoundData {
  id: string;
  name: string;
  duration?: number;
  url: string;
  icon_url?: string;
  play_configuration?: SoundPlayConfiguration;
}

export class Sound {
  id: string;
  name: string;
  duration: number = 0;
  blob: SoundBlob;
  icon_url?: string;
  play_configuration: SoundPlayConfiguration;

  constructor(data: SoundData) {
    this.id = data.id;
    this.name = data.name;
    this.blob = new SoundBlob(data.url)
    this.icon_url = data.icon_url
    this.play_configuration = data.play_configuration ?? new SoundPlayConfiguration();
    this.duration = data.duration ?? this.duration
  }
}

export default Sound;
