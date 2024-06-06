import SoundPlayConfiguration from "./SoundPlayConfiguration";

interface SoundData {
  id: string;
  name: string;
  url: string;
  play_configuration: SoundPlayConfiguration;
}

export class Sound {
  id: string;
  name: string;
  url: string;
  play_configuration: SoundPlayConfiguration;

  constructor(data: SoundData) {
    this.id = data.id;
    this.name = data.name;
    this.url = data.url;
    this.play_configuration = data.play_configuration;
  }
}

export default Sound;
