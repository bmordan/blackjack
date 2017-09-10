# BlackJack

# 🂧 🂷 🃗

Blackjack, also known as twenty-one, is a comparing card game between usually several players and a dealer, where each player in turn competes against the dealer, but players do not play against each other. It is played with one or more decks of 52 cards, and is the most widely played casino banking game in the world.

## Install

1) Clone the repo
2) npm install
3) npm test

## Usage

```js
const blackjack = require('./dist/bundle')
const { Player, Game } = blackjack

const players = {
  player: new Player({name: 'Sam'}),
  dealer: new Player({name: 'Dealer'})
}
const game = new Game(players)

const winner = game.start().play()
```

Here are the rules

#### Model the game
- [x] create a single deck of playing cards
- [x] two players (called Sam and the Dealer) who will play against each other
- [x] each player is given two cards from the top of a shuffled deck of cards

#### Rules to implement
- [x] determine score of a hand[1]
- [x] check if either player has blackjack (21) with their initial hand and wins the game
- [x] if neither player has blackjack then Sam can start drawing cards from the top of the deck
- [x] Sam should stop drawing cards from the deck if their total reaches 17 or higher
- [x] Sam has lost the game if their total is higher than 21
- [x] when Sam has stopped drawing cards the Dealer can start drawing cards from the top of the deck
- [x] the Dealer should stop drawing cards when their total is higher than Sam.
- [x] the Dealer has lost the game if their total is higher than 21
- [x] determine which player wins the game
