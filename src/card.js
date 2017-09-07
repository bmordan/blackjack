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

class Card {
  constructor ({suit, rank, value}) {
    this.suit = suit
    this.icon = suits[suit]
    this.rank = rank.toString()
    this.value = value
    this.color = colors[suit]
  }
}

module.exports = Card
