
// criar o quadro
function setup() {
  createCanvas(700, 450);
  somTrilha.loop()
}

//função para criar e mover os desenhos
function draw() {
  background(imagemDoFundo);
  criarImagem(imagemDoAtor, xAtor, yAtor, comprimentoXAtor, comprimentoYAtor)
  moverAtor()
  for(let i in inimigos) {
    criarImagem(inimigos[i], xInimigos[i], yInimigos[i], comprInimigos[i], altInimigos[i])}
  for(let i in inimigos) {
    xInimigos[i] = mover(xInimigos[i], veloInimigos[i])}
  colidiu()
  marcaPonto()
  mostraPontos()
  mostraVidas()
  acabarGame()
}
