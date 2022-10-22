import { createContext, useState } from "react"

type Props = {
  title: string;
  children?: React.ReactNode;
};

interface ISquareValueContext {
  valueGrid: Array<string>
  setValueGrid: Function
}

const animalsArray =  [
    'dog',
    'cat',
    'rabbit',
    'chicken',
    'frog',
    'sheep',
    'elephant',
    'butterfly'
  ]

const defaultSquareValues = {
  valueGrid:animalsArray,
  setValueGrid: () => { }
} as ISquareValueContext;

export const SquareValueContext = createContext<ISquareValueContext>(defaultSquareValues)

export const SquareValueProvider = ({ children }: Props) => {

  const [valueGrid, setValueGrid] = useState(animalsArray)

  return (
    <SquareValueContext.Provider value={{valueGrid, setValueGrid}}>
      {children}
    </SquareValueContext.Provider>
  )
}