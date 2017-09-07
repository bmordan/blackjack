/* global describe test expect */

const Deck = require('../src/deck')
const Card = require('../src/card')

describe('Deck', () => {
  test('it has 52 cards', () => {
    const deck = new Deck()
    expect(deck.cards.length).toBe(52)
  })

  test('will return a random card', () => {
    const deck = new Deck()
    const card = deck.deal()

    expect(card instanceof Card).toBeTruthy()
    expect(deck.cards.length).toBe(51)
    expect(deck.dealt.length).toBe(1)
    expect(deck.dealt[0]).toBe(card)
  })
})
