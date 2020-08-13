// variaveis do fundo
let imagemDoFundo

// variaveis do ator
let imagemDoAtor
let xAtor = 100
let yAtor = 402
let comprimentoXAtor = 40
let comprimentoYAtor = 40

// variaveis da abelha
let imagemDoAbelha
let xAbelha = 650
let yAbelha = 63
let comprimentoXAbelha = 50
let comprimentoYAbelha = 40

// variaveis do pitbull
let imagemDoPitbull
let xPitbull = 650
let yPitbull = 120
let comprimentoXPitbull = 50
let comprimentoYPitbull = 40

// carregar as imagens
function preload (){
  imagemDoFundo = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/dedelicia.png")
  imagemDoAbelha = loadImage("imagens/abelha.jpg")
  imagemDoPitbull = loadImage("imagens/pitbull.jpg")
}

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
  
// função para colocar as imagens no quadro
const criarImagem = (imagem, x, y, compr, altu) => {
image(imagem, x, y, compr, altu)
}

// mover a abelha
const moverAbelha = (y) => {
  if (xAbelha < -50) {xAbelha += 750}
  else {xAbelha -= y}
}

// mover o cachorro
const moverPitbull = (y) => {
  if (xPitbull < -50) {xPitbull += 750}
  else {xPitbull -= y}
}

// função para mover todas as imagens, nao está funcionando descobrir o porque
let mover = (banana, y) => {
  if(banana < -50) {banana +=750}
  else {banana -=y}
}

// função para mover o ator
const moverAtor = () => {
 if(keyIsDown(UP_ARROW)) { yAtor -=3}
 if(keyIsDown(DOWN_ARROW)) {yAtor +=3}
}
