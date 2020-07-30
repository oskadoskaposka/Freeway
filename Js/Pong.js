// Variáveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametroBolinha = 15
let raioBolinha = diametroBolinha / 2

// Variáveis da velocidade da bolinha
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

// Criar quadro
function setup() {
  createCanvas(600, 400);
}

// Função principal
function draw() {
  background(0);
  criarBolinha()
  moverBolinha()
  verificaColisao ()
}

// Criar a bolinha
function criarBolinha () {
  circle (xBolinha, yBolinha, diametroBolinha)
}

// Mover a bolinha dentro do espaço definido
function moverBolinha () {
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

// Verifica a colisão com as bordas do espaço
function verificaColisao () {
  if (xBolinha > width -raioBolinha || xBolinha < 0 + raioBolinha) {
  velocidadeXBolinha = velocidadeXBolinha *-1}
  if (yBolinha > height -raioBolinha || yBolinha < 0 + raioBolinha) {
  velocidadeYBolinha = velocidadeYBolinha *-1}
}