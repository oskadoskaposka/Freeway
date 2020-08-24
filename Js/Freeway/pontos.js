let pontos = 0



//função para marcar pontos
const marcaPonto = () => {
  if (yAtor < 00) {
    pontos++
    return yAtor = 450
  }
}

// função para mostrar pontos
const mostraPontos = () => {
  fill(255,255,255)
  rect(160,6,90,17)
  fill(0)
  textSize(15)
  text("Pontos: "+ pontos, 200, 20)
}