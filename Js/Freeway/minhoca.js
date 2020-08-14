
// variaveis do Minhoca
let xMinhoca = 650
let yMinhoca = 175
let comprimentoXMinhoca = 50
let comprimentoYMinhoca = 40

// mover o Minhoca
const moverMinhoca = (y) => {
    if (xMinhoca < -50) {xMinhoca += 750}
    else {xMinhoca -= y}
  }
  