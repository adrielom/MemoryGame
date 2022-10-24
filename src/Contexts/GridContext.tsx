import { createContext, useState, useEffect } from "react";
import { IGrid, Grid } from "../Models/Grid";

let grid = new Grid(4);

const defaultGridState: IGrid = {
  grid: grid.Cells,
  side: 4
}

const defaultState = {
  gridState: defaultGridState,
  setGridState: () => { },
} as IGridContext

export const GridContext = createContext<IGridContext>(defaultState)

export interface IGridContext {
  gridState: IGrid,
  setGridState: Function
}

export const GridState = ({ children }) => {
  const [gridState, setGridState] = useState(grid)

  return (
    <GridContext.Provider value={{ gridState, setGridState }}>
      {children}
    </GridContext.Provider>
  )
}