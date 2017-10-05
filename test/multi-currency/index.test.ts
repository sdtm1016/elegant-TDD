import * as assert from 'assert'
import Dollar from '../../src/multi-currency'

it('multiplication', () => {
  const five = new Dollar(5)

  assert(five.times(2).equals(new Dollar(10)))
  assert(five.times(3).equals(new Dollar(15)))
})

describe('money equality', () => {
  it('should return true when asking if $5 equals $5', () => {
    assert.equal(new Dollar(5).equals(new Dollar(5)), true)
  })

  it('should return false when asking if $5 equals $4', () => {
    assert.equal(new Dollar(5).equals(new Dollar(4)), false)
  })

  it('should return false when comparing with null money', () => {
    assert.equal(new Dollar(5).equals(null), false)
  })
})
