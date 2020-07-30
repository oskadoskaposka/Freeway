// Variáveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametroBolinha = 15
let raioBolinha = diametroBolinha / 2

// Variáveis da velocidade da bolinha
let velocidadeXBolinha = 3
let velocidadeYBolinha = 3

// Variáveis da Raquete
let xRaquete = 5
let yRaquete = 150
let comprimentoRaquete = 10
let alturaRaquete = 100

// Criar quadro
function setup() {
  createCanvas(600, 400);
}

// Função principal
function draw() {
  background(0);
  criarBolinha()
  moverBolinha()
  verificaColisao()
  criarRaquete()
  movimentarMinhaRaquete()
}

// Criar a bolinha
criarBolinha = () => circle(xBolinha, yBolinha, diametroBolinha)

// Mover a bolinha dentro do espaço definido
moverBolinha = () => {
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

// Verifica a colisão da bolinha com as bordas do espaço
verificaColisao = () => {
  if (xBolinha > width - raioBolinha || xBolinha < 0 + raioBolinha){
    velocidadeXBolinha *= -1}
  if (yBolinha > height - raioBolinha || yBolinha < 0 + raioBolinha){
    velocidadeYBolinha *= -1}
}

// Criar a raquete
criarRaquete = () => rect(xRaquete, yRaquete, comprimentoRaquete,   alturaRaquete)

// Movimentar a Raquete
movimentarMinhaRaquete = () => {
  keyIsDown(UP_ARROW) ? yRaquete -= 10 : ""
  keyIsDown(DOWN_ARROW) ? yRaquete += 10 : ""
}