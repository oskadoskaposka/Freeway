let xBolinha = 300
let yBolinha = 200
let diametroBolinha = 15

let velocidadeXBolinha = 6

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle (xBolinha, yBolinha, diametroBolinha)
  xBolinha +=velocidadeXBolinha
}