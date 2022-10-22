import { HTMLAttributes } from "react";

import { GridCell } from "../Grid";

export interface ISquare extends HTMLAttributes<HTMLDivElement> {
  side?: number,
  radius?: number,
  id: number,
}

export enum SquareState {
  matched = 0,
  mismatched = 1,
  front = 2,
  back = 3,
}