const Deck = require('../src/deck')
const Player = require('../src/player')

class Game {
  constructor ({player, dealer}) {
    if (!(player instanceof Player) || !(dealer instanceof Player)) {
      throw new Error('Start a game by passing in a player and dealer')
    }

    this.player = player
    this.dealer = dealer
    this.deck = new Deck()
    this.winner = null
  }

  start () {
    this.deck.shuffle()

    this._draw(this.player, 2)
    this._draw(this.dealer, 2)

    return this
  }

  play () {
    if (this.winner) return this.winner

    const playerScore = this.player.getScore()
    const dealerScore = this.dealer.getScore()

    // win or lose this tick
    if (playerScore >= 21) {
      playerScore === 21 ? this.winner = this.player : this.winner = this.dealer
      return this.winner
    }

    if (dealerScore >= 21) {
      dealerScore === 21 ? this.winner = this.dealer : this.winner = this.player
      return this.winner
    }

    // player keep playing
    if (playerScore < 17) return this._draw(this.player).play()
    // dealer keep playing
    if (dealerScore < playerScore) return this._draw(this.dealer).play()

    if (dealerScore > playerScore) {
      this.winner = this.dealer
      return this.winner
    }

    this._draw(this.dealer).play()
  }

  _draw (player, deals) {
    deals = deals || 1
    player.isDealt(this.deck.deal(deals))
    return this
  }
}

module.exports = Game
