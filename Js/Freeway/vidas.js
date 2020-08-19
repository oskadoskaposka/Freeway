let vidas = 5

// função para verificar a colisão inimigos - usando biblioteca p5.collide.2d
const colidiu = () => {
  let bateu = false
  for (let i in inimigos) {
    bateu = collideRectRect(xAtor, yAtor, comprimentoXAtor, comprimentoYAtor,
              xInimigos[i], yInimigos[i], comprInimigos[i], altInimigos[i])
    if (bateu) {
      vidas--
      return yAtor = 450
    }
  }
}

// função para mostrar vidas
const mostraVidas = () => {
  text("Vidas: " + vidas, 30, 20)
}

//função para acabar com o game
const acabarGame = () => {
  if (vidas < 0) {
    for (let i in inimigos) {veloInimigos[i] = 0}
    veloAtor = 0
    text("GAME OVER", 350, 190)
    text("Você matou a Dede com " + pontos +
         " pontos!!", 350, 210)
  }
}