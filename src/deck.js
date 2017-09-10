const createCards = require('./cards')
const shuffle = require('lodash/shuffle')

class Deck {
  constructor () {
    this.cards = createCards()
    this.dealt = []
  }

  deal (number) {
    return new Array(number || 1)
      .fill(0)
      .map(card => this._getTopCard())
  }

  shuffle () {
    this.cards = shuffle(this.cards)
  }

  _getTopCard () {
    const card = this.cards.splice(this.cards.length - 1, 1)
    this.dealt = this.dealt.concat(card)
    return card.pop()
  }
}

module.exports = Deck
