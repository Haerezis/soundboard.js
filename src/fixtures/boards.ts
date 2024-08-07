import { v4 as uuidv4 } from 'uuid';

import Board from "@/models/Board"
import Boardsound from "@/models/Boardsound"

import sounds from "@/fixtures/sounds"

const board1 = new Board({
  id: "40c9a4fc-0bb7-4d0a-8956-b658f39fa55b",
  name: "Board 1",
  description: "My first board",
  column_count: 5,
  row_count: 5
})
board1.board_sounds.push(new Boardsound({
  id: uuidv4(),
  board: board1,
  sound: sounds[0],
  row: 0,
  column: 0
}))
board1.board_sounds.push(new Boardsound({
  id: uuidv4(),
  board: board1,
  sound: sounds[1],
  row: 0,
  column: 4
}))
board1.board_sounds.push(new Boardsound({
  id: uuidv4(),
  board: board1,
  sound: sounds[2],
  row: 2,
  column: 2
}))
board1.board_sounds.push(new Boardsound({
  id: uuidv4(),
  board: board1,
  sound: sounds[3],
  row: 4,
  column: 0
}))
board1.board_sounds.push(new Boardsound({
  id: uuidv4(),
  board: board1,
  sound: sounds[5],
  row: 4,
  column: 4
}))


const board2 = new Board({
  id: "77ed214d-32fe-4ffe-a356-fa9ce48af0d0",
  name: "Board 2",
  description: "My second board",
  column_count: 4,
  row_count: 3
})
board2.board_sounds.push(new Boardsound({
  id: uuidv4(),
  board: board2,
  sound: sounds[6],
  row: 0,
  column: 0
}))
board2.board_sounds.push(new Boardsound({
  id: uuidv4(),
  board: board2,
  sound: sounds[7],
  row: 0,
  column: 1
}))
board2.board_sounds.push(new Boardsound({
  id: uuidv4(),
  board: board2,
  sound: sounds[8],
  row: 0,
  column: 2
}))
board2.board_sounds.push(new Boardsound({
  id: uuidv4(),
  board: board2,
  sound: sounds[9],
  row: 1,
  column: 0
}))
board2.board_sounds.push(new Boardsound({
  id: uuidv4(),
  board: board2,
  sound: sounds[10],
  row: 1,
  column: 1
}))


export default [board1, board2];
