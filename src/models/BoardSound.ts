import Sound from "./Sound"
import Track from "./Track"
import Board from "./Board"
import SoundPlayConfiguration from "./SoundPlayConfiguration";

interface BoardSoundData {
  board: Board;
  sound: Sound;
  sound_play_configuration: SoundPlayConfiguration;
  row: number;
  column: number;
}

export class BoardSound {
  sound: Sound;
  sound_play_configuration: SoundPlayConfiguration;
  row: number;
  column: number;
  tracks: Array<Track> = [];
  board: Board;

  constructor(data: BoardSoundData) {
    this.sound = data.sound
    this.sound_play_configuration = data.sound_play_configuration
    this.row = data.row
    this.column = data.column
    this.board = data.board
  }
};

export default BoardSound;
