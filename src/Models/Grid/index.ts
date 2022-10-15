import { ISquare, SquareState } from '../Square'

export class Grid {
  side; grid = []
  
  constructor (side:number) {
    this.side = side;
    this.populateGrid()
  }

  populateGrid() {
    let gridindex
    for (let i = 0; i < this.side; i++) {
      for (let j = 0; j < this.side; j++) {
          gridindex = new GridCell(i, j)
          this.grid.push(gridindex)
      }
    }
  }

  get Cells () {
    return this.grid;
  }
}

export class GridCell implements ISquare {
  x; y
  constructor (x: number, y: number) {
    this.x = x;
    this.y = y;
    state = SquareState.back;
  }

  

  get position () {
    return [this.x, this.y]
  }
}