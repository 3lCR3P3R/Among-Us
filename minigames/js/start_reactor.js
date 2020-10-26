var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(56,137,210)";

var imagenFondo = new Image();
var imgOrbeVerde = new Image();
var imgOrbeRojo = new Image();
imagenFondo.src = "https://i.imgur.com/40xaJKe.png";
imgOrbeVerde.src = "https://i.imgur.com/ssj9GCl.png";
imgOrbeRojo.src = "https://i.imgur.com/Qd0KuYo.png";

function orbeColor(orbe, posX, posY, ancho, alto) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = ancho;
    this.alto = alto;
}  

var orbeVerdeDos = new rect(178, 92, 54, 53);
var orbeVerdeTres = new rect(262, 92, 54, 53);
var orbeVerdeCuatro = new rect(344, 92, 54, 53);
var orbeVerdeCinco = new rect(424, 92, 54, 53);
let orbesVerdes = [orbeVerdeDos, orbeVerdeTres, orbeVerdeCuatro, orbeVerdeCinco];

var orbeRojoUno = new rect(711, 92, 54, 53);
var orbeRojoDos = new rect(792, 92, 54, 53);
var orbeRojoTres = new rect(873, 92, 54, 53);
var orbeRojoCuatro = new rect(958, 92, 54, 53);
var orbeRojoCinco = new rect(1038, 92, 54, 53);
let orbesRojos = [orbeRojoUno, orbeRojoDos, orbeRojoTres, orbeRojoCuatro, orbeRojoCinco];


function rect(posX, posY, ancho, alto) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = ancho;
    this.alto = alto;
}  

var cuadroUno = new rect(138, 238, 100, 100);
var cuadroDos = new rect(248, 238, 100, 100);
var cuadroTres = new rect(358, 238, 100, 100);
var cuadroCuatro = new rect(138, 348, 100, 100);
var cuadroCinco = new rect(248, 348, 100, 100);
var cuadroSeis = new rect(358, 348, 100, 100);
var cuadroSiete = new rect(138, 458, 100, 100);
var cuadroOcho = new rect(248, 458, 100, 100);
var cuadroNueve = new rect(358, 458, 100, 100);
let cuadros = [cuadroUno, cuadroDos, cuadroTres, cuadroCuatro, cuadroCinco, cuadroSeis, cuadroSiete, cuadroOcho, cuadroNueve];

window.onload = () => {
    pintarRectangulo(cuadros[ramdomCuadro]);
    pintarImagenDeFondo();
}

function limpiarTablero(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function pintarImagenDeFondo(){
    ctx.drawImage(imagenFondo, 0,0, canvas.width, canvas.height);
}

function pintarRectangulo({ posX, posY, ancho, alto}){
    ctx.fillRect(posX, posY, ancho, alto);
}

function pintarOrbes(orbe, {posX, posY, ancho, alto}){
    ctx.drawImage(orbe, posX, posY, ancho, alto);
}

function getRandomNumber(rango) {
    return parseInt(Math.random() * rango);
}

var ramdomCuadro = getRandomNumber(9);