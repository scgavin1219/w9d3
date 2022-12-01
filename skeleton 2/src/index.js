//const View = require('ttt-view.js')
import View from './ttt-view.js'
// const Game =  import //require('../ttt_node/game.js')
import Game from '../ttt_node/game.js'
document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const game = new Game()
  let el = document.querySelector('.ttt')
  const view = new View(game, el)
  



  
});
