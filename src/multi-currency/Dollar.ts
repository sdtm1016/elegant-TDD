import Money from './Money'

export default class Dollar extends Money {
  private amount: number

  constructor(amount: number) {
    super()
    this.amount = amount
  }

  public times(multiplications: number): Dollar {
    return new Dollar(this.amount * multiplications)
  }

  public equals(dollar: Dollar): boolean {
    if (dollar === null) {
      return false
    }

    return this.amount === dollar.amount
  }
}