import { HTMLAttributes } from 'react'
import styles from './Square.module.css'
import { ISquare, SquareState } from '../../Models/Square'
import { useState, useContext, useEffect } from 'react'
import { GridContext } from '../../Contexts/GridContext'
import { GridCell, IGrid } from '../../Models/Grid'

export default function Square({ side = 13, radius = 8, id, ...rest }: ISquare) {

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
    if (validState())
      changeState()
    else
      resetBackState()
  }

  function resetBackState() {
    setState(SquareState.back)
    setGridState(({ side, grid }: IGrid) => {

      return {
        side: side,
        grid: grid.map((el: any) => {

          if (el.state === SquareState.front) {
            let ret: GridCell = new GridCell(el.x, el.y, el.id)
            ret.state = SquareState.back;
            return ret;
          }
          return el
        })
      }
    })
  }

  function validState() {
    let frontFaced = gridState.grid.filter(el => el.state === SquareState.front)
    const twoBackFacedOrNone = frontFaced.length < 2

    return twoBackFacedOrNone
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
  }


  function currentState(stateArgument: number) {
    let stateIndex = Object.values(SquareState).indexOf(stateArgument)
    let keyName = Object.keys(SquareState)[stateIndex]
    return keyName;
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
        id
      }
    </div>
  )
}