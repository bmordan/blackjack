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
  })
})
