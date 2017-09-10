/* global describe test expect */

const Player = require('../src/player')
const Card = require('../src/card')

describe('Player', function () {
  test('they should have a name', () => {
    const player = new Player({name: 'Sam'})
    expect(player.name).toBe('Sam')
  })

  test('they should be able to hold cards', () => {
    const player = new Player({name: 'Sam'})
    const card = new Card({suit: 'clubs', rank: 8})

    player.isDealt(card)

    expect(player.hand[0]).toBe(card)
  })

  test('they should error if not passed a card', () => {
    const player = new Player({name: 'Sam'})
    const notCard = new Player({name: 'Test'})

    expect(() => player.isDealt(notCard)).toThrow()
  })

  test('they should have a score', () => {
    const player = new Player({name: 'Sam'})
    const cards = [
      new Card({suit: 'clubs', rank: 7}),
      new Card({suit: 'spades', rank: 7}),
      new Card({suit: 'hearts', rank: 7})
    ]

    player.isDealt(cards)

    expect(player.getScore()).toBe(21)
  })
})
