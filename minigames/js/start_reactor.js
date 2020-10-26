var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(100,1100,255)";

var imagenFondo = new Image();
imagenFondo.src = "https://i.imgur.com/40xaJKe.png";

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
let cuadros = [cuadroUno, cuadroDos, cuadroTres, cuadroCuatro, cuadroCinco, cuadroSeis, cuadroSiete, cuadroOcho, cuadroNueve]

window.onload = () => {
    cuadros.forEach(cuadro => {
        pintarRectangulo(cuadro);
    });
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