//variaveis dos inimigos
let xInimigos = [650, 650, 650]
let yInimigos = [63, 120, 175]
let comprInimigos = [50, 50, 50]
let altInimigos = [40, 40, 40]
let veloInimigos = [2, 2.5, 3]


// função para mover as imagens
let mover = (parametro, alteração) => {
    if(parametro < -50) {return parametro +=750}
    else {return parametro -=alteração}
  }
