import { ISquare, SquareState } from '../Square'
import { ISquareValue, SquareValue, SquareValueFactory } from '../Value';
import AnimalValues from '../../Contexts/AnimalValues'

export interface IGrid {
  side: number,
  grid: Array<GridCell>
}

export class Grid implements IGrid {
  side; grid: Array<GridCell> = []
  squareValueFactory: SquareValueFactory
  squareValues: Array<ISquareValue>

  constructor(side: number) {
    this.side = side;
    this.squareValueFactory = new SquareValueFactory(AnimalValues)
    this.squareValues = this.squareValueFactory.values
    this.populateGrid()
  }

  populateGrid() {
    let index = 0
    for (let i = 0; i < this.side; i++) {
      for (let j = 0; j < this.side; j++) {
        let squareValue: ISquareValue = this.squareValues[index];
        let gridindex = new GridCell(i, j, this.grid.length, squareValue)
        this.grid.push(gridindex)
        index++
      }
    }
  }

  get Cells() {
    return this.grid;
  }
}

export class GridCell implements ISquare {
  x: number;
  y: number;
  state: SquareState = SquareState.back;
  squareId: number;
  squareValue: ISquareValue;

  constructor(x: number, y: number, id: number, squareValue: ISquareValue) {
    this.x = x;
    this.y = y;
    this.squareId = id;
    this.squareValue = squareValue
  }

  get position() {
    return this
  }

  toString(): string {
    return `${this.x}, ${this.y}`
  }

  equals(otherCell: GridCell) {
    return otherCell.squareValue.value === this.squareValue.value
  }

}