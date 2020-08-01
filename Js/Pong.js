// Variáveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametroBolinha = 25
let raioBolinha = diametroBolinha / 2

// Variáveis da velocidade da bolinha
let velocidadeXBolinha = 3
let velocidadeYBolinha = 3

// Variáveis da Raquete
let xRaquete = 2
let yRaquete = 150
let comprimentoRaquete = 10
let alturaRaquete = 100

// Variáveis da Raquete Oponente
let xRaqueteOponente = 588
let yRaqueteOponente = 150

// Variáveis do Placar
let meusPontos = 0
let pontosDoOponente = 0

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
  criarRaquete(xRaquete, yRaquete)
  movimentarMinhaRaquete()
  verificaColisaoRaqueteLibrary(xRaquete, yRaquete)
  criarRaquete(xRaqueteOponente, yRaqueteOponente)
  verificaColisaoRaqueteLibrary(xRaqueteOponente, yRaqueteOponente)
  movimentarRaqueteOponente()
  incluirPlacar ()
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
  let saiuNoX = false
  let SaiuNoY = false

  saiuNoX = (xBolinha > width - raioBolinha || xBolinha < 0 + raioBolinha)
  SaiuNoY = (yBolinha > height - raioBolinha || yBolinha < 0 + raioBolinha) 
  
  saiuNoX ? velocidadeXBolinha *= -1 : ""
  SaiuNoY ? velocidadeYBolinha *= -1 : ""
}

// Criar a raquete
criarRaquete = (x, y) => rect(x, y, comprimentoRaquete, alturaRaquete)

// Movimentar a Raquete
movimentarMinhaRaquete = () => {
  keyIsDown(UP_ARROW) ? yRaquete -= 10 : ""
  keyIsDown(DOWN_ARROW) ? yRaquete += 10 : ""
}

// Colisão da bolinha com a Raquete
verificaColisaoMinhaRaquete = () => {  
  let acertouRaquete = true
  acertouRaquete = (xBolinha - raioBolinha < xRaquete + comprimentoRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete)
  acertouRaquete ? velocidadeXBolinha *= -1 : ""
  }

// Colisão da bolinha com a Raquete usando Library
verificaColisaoRaqueteLibrary = (x, y) =>{
  let acertou = false
  acertou = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, diametroBolinha)

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

// Movimentar a Raquete
movimentarRaqueteOponente = () => {
  yRaqueteOponente = yBolinha - 110
}

function incluirPlacar() {
    fill(255);
    text(meusPontos, 278, 26);
    text(pontosDoOponente, 321, 26);
}