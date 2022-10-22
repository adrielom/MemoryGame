import { ISquare, SquareState } from '../Square'

export interface IGrid {
  side: number,
  grid: Array<GridCell>
}

export class Grid implements IGrid {
  side; grid: Array<GridCell> = []

  constructor(side: number) {
    this.side = side;
    this.populateGrid()
  }

  populateGrid() {
    for (let i = 0; i < this.side; i++) {
      for (let j = 0; j < this.side; j++) {
        let gridindex = new GridCell(i, j, this.grid.length)
        this.grid.push(gridindex)
      }
    }
  }

  get Cells() {
    return this.grid;
  }
}

export class GridCell implements ISquare {
  x: number; y: number; state: SquareState = SquareState.back; id: number;

  constructor(x: number, y: number, id: number) {
    this.x = x;
    this.y = y;
    this.id = id;
  }

  get position() {
    return this
  }

  toString(): string {
    return `${this.x}, ${this.y}`
  }

}