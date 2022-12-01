class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;

    this.setupBoard()
    this.bindEvents()

  }

  setupBoard() {

    const ul = document.createElement('ul')
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let banana = document.createElement('li')
        banana.dataset.pos = JSON.stringify([i, j])
        ul.append(banana)
      }
    }

    this.el.append(ul)

  }
  
  bindEvents() {
    this.el.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick(e) {

    const el = e.target 
    this.makeMove(el)

  }

  makeMove(square) {
    //console.log(JSON.parse(square.dataset.pos))
    const sq = JSON.parse(square.dataset.pos)
    this.game.playMove(sq)
    square.innerHTML = this.game.currentPlayer
  }

}

module.exports = View;
