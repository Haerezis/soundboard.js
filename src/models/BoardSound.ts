import { v4 as uuidv4 } from 'uuid';
import Sound from "./Sound"
import Track from "./Track"
import Board from "./Board"
import SoundPlayConfiguration from "./SoundPlayConfiguration";

interface BoardSoundData {
  id?: string;
  board: Board;
  sound: Sound;
  play_configuration?: SoundPlayConfiguration;
  row: number;
  column: number;
  color?: string;
}

export class BoardSound {
  id: string;
  sound: Sound;
  play_configuration: SoundPlayConfiguration;
  row: number;
  column: number;
  board: Board;
  color?: string;

  constructor(data: BoardSoundData) {
    this.id = data.id || `local-${uuidv4()}`
    this.sound = data.sound
    this.play_configuration = Object.assign(new SoundPlayConfiguration(), data.play_configuration ?? data.sound.play_configuration)
    this.row = data.row
    this.column = data.column
    this.board = data.board
    this.color = data.color
  }
};

export default BoardSound;
