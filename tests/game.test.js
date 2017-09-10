/* global jest describe test expect */

const Player = require('../src/player')
const Game = require('../src/game')

describe('Game', function () {
  test('needs players to be instantiated', () => {
    expect(() => new Game({})).toThrow()
  })

  test('has a deck, dealer and the player sam', () => {
    const players = {
      player: new Player({name: 'Sam'}),
      dealer: new Player({name: 'Dealer'})
    }
    const game = new Game(players)

    expect(game.deck).toBeDefined()
    expect(game.player).toBe(players.player)
    expect(game.dealer).toBe(players.dealer)
  })

  test('starts with each player being dealt 2 cards', () => {
    const players = {
      player: new Player({name: 'Sam'}),
      dealer: new Player({name: 'Dealer'})
    }
    const game = new Game(players)

    expect(game.start).toBeDefined()

    game.start()

    expect(game.player.hand.length).toBe(2)
    expect(game.dealer.hand.length).toBe(2)
  })

  test('can be won with the first hand', () => {
    const players = {
      player: new Player({name: 'Sam'}),
      dealer: new Player({name: 'Dealer'})
    }

    const mockGetScore = jest.fn()
    mockGetScore.mockReturnValue(21)
    players.player.getScore = mockGetScore

    const game = new Game(players)

    const winner = game.start().play()

    expect(winner).toBe(players.player)
  })

  test('player draws untill they lose', () => {
    const players = {
      player: new Player({name: 'Sam'}),
      dealer: new Player({name: 'Dealer'})
    }

    const stubDealerScore = jest.fn()
      .mockReturnValue(10)
    // player goes bust
    const mockPlayerScore = jest.fn(() => 1)
      .mockReturnValueOnce(10)
      .mockReturnValueOnce(17)
      .mockReturnValueOnce(22)

    players.player.getScore = mockPlayerScore
    players.dealer.getScore = stubDealerScore

    const game = new Game(players)
    const winner = game.start().play()

    expect(winner).toBe(players.dealer)
  })

  test('player draws untill they reach 17', () => {
    const players = {
      player: new Player({name: 'Sam'}),
      dealer: new Player({name: 'Dealer'})
    }

    // dealer goes bust
    const mockDealerScore = jest.fn()
      .mockReturnValueOnce(10)
      .mockReturnValueOnce(10)
      .mockReturnValueOnce(15)
      .mockReturnValueOnce(22)

    const mockPlayerScore = jest.fn(() => 1)
      .mockReturnValueOnce(10)
      .mockReturnValueOnce(18)

    players.player.getScore = mockPlayerScore
    players.dealer.getScore = mockDealerScore

    const game = new Game(players)
    const winner = game.start().play()

    expect(winner).toBe(players.player)
  })

  test('player draws 18, dealer draws 20', () => {
    const players = {
      player: new Player({name: 'Sam'}),
      dealer: new Player({name: 'Dealer'})
    }

    // dealer goes bust
    const mockDealerScore = jest.fn()
      .mockReturnValueOnce(10)
      .mockReturnValueOnce(10)
      .mockReturnValueOnce(15)
      .mockReturnValueOnce(20)

    const mockPlayerScore = jest
      .fn(() => 18)
      .mockReturnValueOnce(10)
      .mockReturnValueOnce(18)

    players.player.getScore = mockPlayerScore
    players.dealer.getScore = mockDealerScore

    const game = new Game(players)
    const winner = game.start().play()

    expect(winner).toBe(players.dealer)
  })
})
