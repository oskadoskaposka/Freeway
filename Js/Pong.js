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
  verificaColisaoMinhaRaquete()
  // verificaColisaoMinhaRaqueteLibrary()
}

// Criar a bolinha
criarBolinha = () => circle(xBolinha, yBolinha, diametroBolinha)

// Mover a bolinha dentro do espaço definido
moverBolinha = () => {
  xBolinha += velocidadeXBolinha
  // yBolinha += velocidadeYBolinha
}

// Verifica a colisão da bolinha com as bordas do espaço
verificaColisao = () => {
  let saiuNoX = false
  let SaiuNoY = false

  saiuNoX = (xBolinha > width - raioBolinha || xBolinha < 0 + raioBolinha)
  SaiuNoY = (yBolinha > height - raioBolinha || yBolinha < 0 + raioBolinha) 
  
  saiuNoX ? velocidadeXBolinha *= -1 : ""
  SaiuNoY ? velocidadeYBolinha *= -1 : ""
}

// Criar a raquete
criarRaquete = () => rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete)

// Movimentar a Raquete
movimentarMinhaRaquete = () => {
  keyIsDown(UP_ARROW) ? yRaquete -= 10 : ""
  keyIsDown(DOWN_ARROW) ? yRaquete += 10 : ""
}

// Colisão da bolinha com a minha Raquete
verificaColisaoMinhaRaquete = () => {  
  let acertouRaquete = true
  acertouRaquete = (xBolinha - raioBolinha < xRaquete + comprimentoRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete)
  acertouRaquete ? velocidadeXBolinha *= -1 : ""
  }

// Colisão da bolinha com a minha Raquete usando Library
verificaColisaoMinhaRaqueteLibrary = () => {
  let acertou = false
  acertou = collideRectCircle(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha,raioBolinha)
  acertou ? velocidadeXBolinha *= -1 : ""
        
        /*
        Essa função collideRectCircle() foi usada da biblioteca abaixo:
        Repo: https://github.com/bmoren/p5.collide2D/
        Created by http://benmoren.com
        Some functions and code modified version from 
        http://www.jeffreythompson.org/collision-detection
        Version v0.7.3 | June 22, 2020
        CC BY-NC-SA 4.0
        */
}