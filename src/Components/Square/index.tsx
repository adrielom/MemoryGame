import { HTMLAttributes } from 'react'
import styles from './Square.module.css'
import { ISquare, SquareState } from '../../Models/Square'
import { useState, useContext, useEffect } from 'react'
import { GridContext } from '../../Contexts/GridContext'
import { GridCell, IGrid } from '../../Models/Grid'

export default function Square({ side = 13, radius = 8, squareId: id, value: squareValue, ...rest }: ISquare) {

  let { gridState, setGridState } = useContext(GridContext)

  const [state, setState] = useState(SquareState.back)

  useEffect(() => {
    let squareCell = gridState.grid[id]
    setState(squareCell.state)
  }, [gridState])

  function setSquareStateColour() {
    switch (state) {
      case SquareState.matched:
        return 'blue';
      case SquareState.mismatched:
        return 'red';
      case SquareState.front:
        return 'yellow';
      case SquareState.back:
      default:
        return 'white';
    }
  }

  function handleClickSquare() {
    changeState()
  }

  function validateMatching() {
    let frontFaced = gridState.grid.filter(el => el.state === SquareState.front)
    if (frontFaced.length !== 2) return
    console.log(frontFaced)
    if (frontFaced[0].equals(frontFaced[1])) {
      console.log('equals')
      matchSquares(frontFaced)
    }
    else {
      console.log('different')
      resetBackState()
    }
  }

  function matchSquares(cellArray: Array<GridCell>) {
    setGridState(({ side, grid }: IGrid) => {

      return {
        side,
        grid: grid.map((el: GridCell) => {
          if (cellArray.find((cell: GridCell) => cell.equals(el))) {
            let ret: GridCell = new GridCell(el.x, el.y, el.squareId, el.squareValue)
            ret.state = SquareState.matched
            return ret
          }
          return el
        })
      }
    })
  }

  function resetBackState() {
    setState(SquareState.back)
    setGridState(({ side, grid }: IGrid) => {

      return {
        side: side,
        grid: grid.map((el: GridCell) => {

          if (el.state === SquareState.front) {
            let ret: GridCell = new GridCell(el.x, el.y, el.squareId, el.squareValue)
            ret.state = SquareState.back;
            return ret;
          }
          return el
        })
      }
    })
  }

  function changeState() {
    let mutatedState = gridState

    let targetState = null
    if (state === SquareState.front) targetState = SquareState.back
    else if (state === SquareState.back) targetState = SquareState.front
    else return
    mutatedState.grid[id].state = targetState
    setGridState(mutatedState)
    setState(targetState)

    validateMatching()
  }


  function currentState(stateArgument: number) {
    let stateIndex = Object.values(SquareState).indexOf(stateArgument)
    let keyName = Object.keys(SquareState)[stateIndex]
    return keyName;
  }

  function printFeedback() {
    return SquareState.front === state ? squareValue.value : id;
  }

  return (
    <div
      className={styles.square}
      style={{
        height: `${side}%`,
        width: `${side}%`,
        borderRadius: `${radius}px`,
        backgroundColor: setSquareStateColour()
      }}
      onClick={handleClickSquare}
      {...rest}
    >
      {
        printFeedback()
      }
    </div>
  )
}