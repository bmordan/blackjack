const createCards = require('./cards')

class Deck {
  constructor () {
    this.cards = createCards()
    this.dealt = []
  }

  _randomIndex () {
    return Math.floor(Math.random() * this.cards.length)
  }

  deal () {
    const card = this.cards.splice(this._randomIndex(), 1)
    this.dealt = this.dealt.concat(card)
    return card.pop()
  }
}

module.exports = Deck
