import arrayShuffle from "array-shuffle";

export interface ISquareValue {
  value: string
  pictureUrl: string,
  id: number
}

export class SquareValueFactory {
  private _valuePool: Array<string[]>;

  constructor(valuePool: Array<string[]>) {
    this._valuePool = valuePool
  }

  randomizeList() {
    let doubledList = [...this._valuePool, ...this._valuePool]
    let shuffledList = arrayShuffle(doubledList)
    return shuffledList
  }

  get values(): Array<ISquareValue> {
    let valuesArray = new Array<ISquareValue>()

    let poolArray = this.randomizeList()
    poolArray.forEach((el: string[], index: number) => {
      let squareValue: ISquareValue = new SquareValue(el[0], el[1], index)
      valuesArray.push(squareValue)
    })

    return valuesArray
  }
}

export class SquareValue implements ISquareValue {
  private _value: string
  private _pictureUrl: string
  private _id: number

  constructor(value: string, pictureUrl: string, id: number) {
    this._value = value
    this._pictureUrl = pictureUrl,
      this._id = id
  }

  public get value(): string {
    return this._value
  }
  public set value(value: string) {
    this._value = value
  }
  public get pictureUrl(): string {
    return this._pictureUrl
  }
  public set pictureUrl(value: string) {
    this._pictureUrl = value
  }

  public set id(value: number) {
    this._id = value
  }

  public get id(): number {
    return this._id
  }

}