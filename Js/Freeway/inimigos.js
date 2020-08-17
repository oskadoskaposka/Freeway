//variaveis dos inimigos
let xInimigos = [650, 650, 650, 650, 650, 650]
let yInimigos = [63, 120, 175, 237, 290, 347]
let comprInimigos = [50, 50, 50, 50, 50, 50]
let altInimigos = [40, 40, 40, 40, 40, 40]
let veloInimigos = [3.8, 5.0, 1.6, 4.8, 1.4, 4.2]

// função para mover as imagens
const mover = (parametro, alteração) => {
    if(parametro < -50) {return parametro +=750}
    else {return parametro -=alteração}
  }
