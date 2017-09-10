const Card = require('./card')

const suits = [
  'hearts',
  'spades',
  'clubs',
  'diamonds'
]

const majorCards = [
 {rank: 'ace', value: 11},
 {rank: 'jack', value: 10},
 {rank: 'queen', value: 10},
 {rank: 'king', value: 10}
]

const minorCards = new Array(9)
  .fill(0)
  .map((card, i) => {
    return {
      rank: (i + 2).toString(),
      value: i + 2
    }
  })

module.exports = function createCards () {
  return suits.reduce((cards, suit) => {
    majorCards
      .concat(minorCards)
      .forEach(card => {
        const { rank, value } = card
        cards.push(new Card({ rank, value, suit }))
      })
    return cards
  }, [])
}
