import './App.css'
import Square from './Components/Square'
import { Grid, GridCell } from './Models/Grid'
import { useContext, useEffect, useState } from 'react';
import { GridContext, GridState } from './Contexts/GridContext';
import {SquareValueContext} from './Contexts/SquareValueContext'

export default function App() {
  let { gridState, setGridState } = useContext(GridContext)
  let { grid, side } = gridState;

  let {valueGrid, setValueGrid} = useContext(SquareValueContext)

  return (
    <main>
      {
        <section
          style={{ gridTemplateColumns: `repeat(${side}, 1fr)`, gridTemplateRows: `repeat(${side}, 1fr)` }}
        >
          {
            grid.map((cell: GridCell) => {
              return (
                <Square id={cell.id} side={side * 20} key={cell.id}/>
              )
            })
          }
        </section>
      }
    </main>
  )
}

