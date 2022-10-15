import { HTMLAttributes } from 'react'
import styles from './Square.module.css'
import {ISquare, SquareState } from '../../Models/Square'
import {useState} from 'react'

export default function Square({ side = 13, radius = 8, position, state, ...rest }: ISquare) {

  const [cardColor, setCardColor] = useState('')
  
  function setSquareStateColour () {
    switch(state) {
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
  
  return (
    <div
      className={[
        styles.square,
        
      ]}
      style={{ 
        height: `${side}%`, 
        width: `${side}%`, 
        borderRadius: `${radius}px`,
        backgroundColor: setSquareStateColour()
      }}
      {...rest}
    >
      {position}
    </div>
  )
}