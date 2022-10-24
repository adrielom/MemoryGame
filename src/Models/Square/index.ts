import { HTMLAttributes } from "react";

import { GridCell } from "../Grid";
import { ISquareValue } from "../Value";

export interface ISquare extends HTMLAttributes<HTMLDivElement> {
  side?: number,
  radius?: number,
  squareId: number,
  value: ISquareValue
}

export enum SquareState {
  matched = 0,
  mismatched = 1,
  front = 2,
  back = 3,
}