let imagemDoFundo
let imagemDoAtor
let imagemDoCarro1

function preload (){
  imagemDoFundo = loadImage("imagens/estrada.png")
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(imagemDoFundo);
}