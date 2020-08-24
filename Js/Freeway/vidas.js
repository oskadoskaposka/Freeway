let vidas = 5

// função para verificar a colisão inimigos - usando biblioteca p5.collide.2d
const colidiu = () => {
  let bateu = false
  for (let i in inimigos) {
    bateu = collideRectRect(xAtor, yAtor, comprimentoXAtor, comprimentoYAtor,
              xInimigos[i], yInimigos[i], comprInimigos[i], altInimigos[i])
    if (bateu) {
      vidas--
      somColidiu.play()
      return yAtor = 450
    }
  }
}

// função para mostrar vidas
const mostraVidas = () => {
  textAlign(CENTER)
  fill(255,255,255)
  rect(5,6,70,17)
  fill(0)
  textSize(15)
  textSize(15)
  text("Vidas: " + vidas, 40, 20)
}

//função para acabar com o game
const acabarGame = () => {
  if (vidas < 0) {
    for (let i in inimigos) {veloInimigos[i] = 0}
    veloAtor = 0
    fill(255,0, 0)
    rect(140, 148, 320, 50)
    fill(255)
    textSize(50)
    text("GAME OVER", 300, 190)
    fill(255)
    rect(130, 218, 350, 30)
    textSize(20)
    fill(0)
    text("Você matou a Dede com " + pontos +
         " pontos!!", 300, 240)
  }
}