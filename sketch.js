let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeXOponenente;
let velocidadeYOponente;

let colidir = false;

let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(30);
  visualizarBolinha();
  movimentaBolinha();
  colisaoBordas();
  visualizarRaquete(xRaquete, yRaquete);
  movimentoMinhaRaquete();
  movimentaRaqueteOponente();
  colisaoMinhaRaquete(xRaquete, yRaquete);
  colisaoRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function visualizarBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBordas() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function visualizarRaquete(x, y) {
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentoMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function colisaoMinhaRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento &&
    yBolinha - raio < yRaquete + raqueteAltura &&
    yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}

function colisaoMinhaRaquete(x, y) {
  colidir = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete,
    xBolinha, yBolinha, raio);
  if (colidir) {
    velocidadeXBolinha *= -1;
  }
}

function colisaoRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar() {
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26)
}

function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
  }
}