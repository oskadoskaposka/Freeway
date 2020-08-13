let imagemDoFundo
let imagemDoAtor
let imagemDoCarro1

function preload (){
  imagemDoFundo = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/dedelicia.png")
  imagemDoCarro1 = loadImage("imagens/abelha.jpg")
  imagemDoCarro2 = loadImage("imagens/pitbull.jpg")
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(imagemDoFundo);
  image(imagemDoAtor, 100, 320, 40, 40)
  image(imagemDoCarro1, 500, 40, 50, 40)
  image(imagemDoCarro2, 500, 95, 50, 40)
  
}