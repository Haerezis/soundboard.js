import { v4 as uuidv4 } from 'uuid';
import Sound from "./Sound"
import Track from "./Track"
import Board from "./Board"
import SoundPlayConfiguration from "./SoundPlayConfiguration";

export interface BoardsoundData {
  id?: string;
  board: Board;
  sound: Sound;
  play_configuration?: SoundPlayConfiguration;
  row: number;
  column: number;
  color?: BoardsoundColorName;
}

export class Boardsound {
  id: string;
  sound: Sound;
  play_configuration: SoundPlayConfiguration;
  row: number;
  column: number;
  board: Board;
  color?: BoardsoundColorName;

  constructor(data: BoardsoundData) {
    this.id = data.id || `local-${uuidv4()}`
    this.sound = data.sound
    this.play_configuration = Object.assign(new SoundPlayConfiguration(), data.play_configuration ?? data.sound.play_configuration)
    this.row = data.row
    this.column = data.column
    this.board = data.board
    this.color = data.color
  }

  color_hexcode(default_colorname: BoardsoundColorName = "blue"): string {
    return BoardsoundColors[this.color ?? default_colorname]
  }
};


export const BoardsoundColors = {
  red: "#f44336",
  pink: "#e91e63",
  purple: "#9c27b0",
  "deep-purple": "#673ab7",
  indigo: "#3f51b5",
  blue: "#2196f3",
  "light-blue": "#03a9f4",
  cyan: "#00bcd4",
  teal: "#009688",
  green: "#4caf50",
  "light-green": "#8bc34a",
  lime: "#cddc39",
  yellow: "#ffeb3b",
  amber: "#ffc107",
  orange: "#ff9800",
  "deep-orange": "#ff5722",
  brown: "#795548"
};
export type BoardsoundColorName = keyof typeof BoardsoundColors

export default Boardsound;
