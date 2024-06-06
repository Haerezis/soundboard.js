import { v4 as uuidv4 } from 'uuid';

import BoardSound from "./BoardSound"

interface BoardData {
  id?: string;
  name: string;
  description?: string;
  icon_url?: string;
  column_count: number;
  row_count: number;
  board_sounds?: Array<BoardSound>;
};

export class Board {
  id: string;
  name: string;
  description: string = "";
  icon_url: string = "";
  column_count: number;
  row_count: number;
  board_sounds: Array<BoardSound> = [];

  constructor(data: BoardData) {
    this.id = data.id || `local-${uuidv4()}`
    this.name = data.name
    this.description = data.description ?? this.description
    this.icon_url = data.icon_url ?? this.description
    this.column_count = data.column_count
    this.row_count = data.row_count
    this.board_sounds = data.board_sounds ?? this.board_sounds
  }
};

export default Board;
