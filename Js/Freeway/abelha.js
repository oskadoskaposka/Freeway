
// variaveis da abelha
let xAbelha = 650
let yAbelha = 63
let comprimentoXAbelha = 50
let comprimentoYAbelha = 40

// mover a abelha
const moverAbelha = (y) => {
    if (xAbelha < -50) {xAbelha += 750}
    else {xAbelha -= y}
  }
  