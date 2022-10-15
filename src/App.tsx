import './App.css'
import Square from './Components/Square'
import {Grid, GridCell} from './Models/Grid'

export default function App() {
  let gridSide = 4;
  let grid = new Grid(4);
  
  return (
    <main>
      <section
        style={{gridTemplateColumns: `repeat(${gridSide}, 1fr)`, gridTemplateRows: `repeat(${gridSide}, 1fr)` }}
      >
        {
           grid.Cells.map(cell => (
             <Square side={gridSide * 20} key={cell.position} position={cell.position}/>
           ))
        }
      </section>
    </main>
  )
}

