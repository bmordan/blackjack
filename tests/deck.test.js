/* global describe test expect */

const Deck = require('../src/deck')
const Card = require('../src/card')

describe('Deck', () => {
  test('it has 52 cards', () => {
    const deck = new Deck()
    expect(deck.cards.length).toBe(52)
  })

  test('you can deal a card from the top of the deck', () => {
    const deck = new Deck()
    const [card] = deck.deal()

    expect(card instanceof Card).toBeTruthy()
    expect(deck.cards.length).toBe(51)
    expect(deck.dealt.length).toBe(1)
    expect(deck.dealt[0]).toBe(card)
  })

  test('you can deal a pair of cards from the top of the deck', () => {
    const deck = new Deck()
    const card1 = deck.cards[51]
    const card2 = deck.cards[50]

    const hand = deck.deal(2)

    expect(hand.length).toBe(2)
    expect(hand[0]).toBe(card1)
    expect(hand[1]).toBe(card2)
    expect(deck.dealt.length).toBe(2)
  })

  test('you can shuffle the pack', () => {
    const deck = new Deck()
    const cards = deck.cards.slice(0)

    deck.shuffle()

    expect(deck.cards).not.toBe(cards)
  })
})
