import './App.css'
import Square from './Components/Square'
import { Grid, GridCell } from './Models/Grid'
import { useContext, useEffect, useState } from 'react';
import { GridContext, GridState } from './Contexts/GridContext';

export default function App() {
  let { gridState, setGridState } = useContext(GridContext)
  let { grid, side } = gridState;

  return (
    <main>
      {
        <section
          style={{ gridTemplateColumns: `repeat(${side}, 1fr)`, gridTemplateRows: `repeat(${side}, 1fr)` }}
        >
          {
            grid.map((cell: GridCell) => {
              return (
                <Square value={cell.squareValue} squareId={cell.squareId} side={side * 20} key={cell.squareId} />
              )
            })
          }
        </section>
      }
    </main>
  )
}

