// variaveis do ator
let xAtor = 100
let yAtor = 402
let comprimentoXAtor = 40
let comprimentoYAtor = 40
let pontos = 0

// função para mover o ator
const moverAtor = () => {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3
  }
}

// função para verificar a colisão inimigos - usando biblioteca p5.collide.2d
const colidiu = () => {
  let bateu = false
  for (let i in inimigos) {
    bateu = collideRectRect(xAtor, yAtor, comprimentoXAtor, comprimentoYAtor,
              xInimigos[i], yInimigos[i], comprInimigos[i], altInimigos[i])
    if (bateu) {
      pontos--
      return yAtor = 402
    }
  }
}

//função para marcar pontos
const marcaPonto = () => {
  if (yAtor < 20) {
    pontos++
    return yAtor = 402
  }
}
