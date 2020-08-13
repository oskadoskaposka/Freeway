
// variaveis do pitbull
let xPitbull = 650
let yPitbull = 120
let comprimentoXPitbull = 50
let comprimentoYPitbull = 40

// mover o pitbull
const moverPitbull = (y) => {
    if (xPitbull < -50) {xPitbull += 750}
    else {xPitbull -= y}
  }
  