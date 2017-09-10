const colors = {
  hearts: 'red',
  diamonds: 'red',
  spades: 'black',
  clubs: 'black'
}

const suits = {
  hearts: '♥',
  spades: '♠',
  clubs: '♣',
  diamonds: '♦'
}

const majorCards = [
 {rank: 'ace', value: 11},
 {rank: 'jack', value: 10},
 {rank: 'queen', value: 10},
 {rank: 'king', value: 10}
]

class Card {
  constructor ({suit, rank}) {
    if (!suit || !rank) throw new Error('Cards must have a suit and rank')

    if (Object.keys(suits).indexOf(suit) < 0) throw new Error('Must be a valid suit')

    const isMajor = majorCards.find(c => c.rank === rank)

    if (!isMajor && rank < 2 || rank > 10) throw new Error('Must be a valid rank')

    this.suit = suit
    this.icon = suits[suit]
    this.rank = rank.toString()
    this.value = isMajor ? isMajor.value : parseInt(rank)
    this.color = colors[suit]
  }
}

module.exports = Card
