//variaveis dos inimigos
let xInimigos = [650, 650, 650]
let yInimigos = [63, 120, 175]
let comprInimigos = [50, 50, 50]
let altInimigos = [40, 40, 40]
let veloInimigos = [2, 2.5, 3]


// função para mover todas as imagens, nao está funcionando descobrir o porque
let mover = (banana, y) => {
    if(banana < -50) {return banana +=750}
    else {return banana -=y}
  }
