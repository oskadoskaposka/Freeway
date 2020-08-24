// variaveis do ator
let xAtor = 100
let yAtor = 402
let comprimentoXAtor = 40
let comprimentoYAtor = 40
let veloAtor = 3


// função para mover o ator
const moverAtor = () => {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= veloAtor
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += veloAtor
  }
}