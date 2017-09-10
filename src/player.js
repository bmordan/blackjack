const Card = require('./card')

class Player {
  constructor ({name}) {
    this.name = name
    this.hand = []
  }

  isDealt (cards) {
    if (Array.isArray(cards)) {
      cards.forEach(card => this._addCard(card))
    } else {
      this._addCard(cards)
    }
  }

  _addCard (card) {
    if (!(card instanceof Card)) throw new Error('Must deal players a card')
    this.hand.push(card)
  }

  getScore () {
    return this.hand.reduce((total, card) => {
      total += card.value
      return total
    }, 0)
  }
}

module.exports = Player
