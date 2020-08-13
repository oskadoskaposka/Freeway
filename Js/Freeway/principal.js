
// criar o quadro
function setup() {
  createCanvas(700, 450);
}

//função para os desenhos
function draw() {
  background(imagemDoFundo);
  criarImagem(imagemDoAtor, xAtor, yAtor, comprimentoXAtor, comprimentoYAtor)
  criarImagem(imagemDoAbelha, xAbelha, yAbelha, comprimentoXAbelha, comprimentoYAbelha)
  criarImagem(imagemDoPitbull, xPitbull, yPitbull, comprimentoXPitbull, comprimentoYPitbull)
   moverAbelha (2)
   moverPitbull (4)
  // mover(xAbelha,2)
  // mover(xPitbull, 5)
  moverAtor ()
}
