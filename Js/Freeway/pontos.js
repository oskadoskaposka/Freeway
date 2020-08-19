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
  text("Pontos: "+ pontos, 160, 20)
}