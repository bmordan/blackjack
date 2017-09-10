/* global describe test expect */

const Card = require('../src/card')

describe('Card', () => {
  test('it has a suit', () => {
    const card = new Card({
      suit: 'hearts',
      rank: 3
    })
    expect(card.suit).toBe('hearts')
    expect(card.rank).toBe('3')
    expect(card.icon).toBe('♥')
    expect(card.color).toBe('red')
    expect(card.value).toBe(3)
  })

  test('it will error without a valid suit or rank', () => {
    expect(() => new Card({})).toThrow(Error)
    expect(() => new Card({suit: 'hearts', rank: 100})).toThrow(Error)
    expect(() => new Card({suit: 'test', rank: 5})).toThrow(Error)
  })
})
