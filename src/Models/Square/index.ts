export interface ISquare extends HTMLAttributes<HTMLDivElement> {
  side?: number,
  radius?: number,
  position: GridCell,
  state: SquareState
}

export enum SquareState {
  matched,
  front,
  back,
  mismatched
}