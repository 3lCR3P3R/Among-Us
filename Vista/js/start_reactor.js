var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(56,137,210)";

var container = document.getElementById("container");

var buttonUno = document.getElementById("uno");
var buttonDos = document.getElementById("dos");
var buttonTres = document.getElementById("tres");
var buttonCuatro = document.getElementById("cuatro");
var buttonCinco = document.getElementById("cinco");
var buttonSeix = document.getElementById("seix");
var buttonSiete = document.getElementById("siete");
var buttonOcho = document.getElementById("ocho");
var buttonNueve = document.getElementById("nueve");

let arrayNumberButton = [buttonUno, buttonDos, buttonTres, buttonCuatro, 
        buttonCinco, buttonSeix, buttonSiete, buttonOcho, buttonNueve];

var imagenFondo = new Image();
var imgOrbeVerde = new Image();
var imgOrbeRojo = new Image();
imagenFondo.src = "https://i.imgur.com/40xaJKe.png";
imgOrbeVerde.src = "https://i.imgur.com/ssj9GCl.png";
imgOrbeRojo.src = "https://i.imgur.com/Qd0KuYo.png";

imgOrbeRojo.onload = () => {
    pintarOrbe(imgOrbeRojo, orbePosUno, orbePos);
}

imgOrbeVerde.onload = () => {
    pintarOrbe(imgOrbeVerde, orbePosUno, orbePos);
}

imagenFondo.onload = () => {
    pintarImagenDeFondo();
}

var orbePos = {
    posY: "92",
    ancho: "54",
    alto: "53"
}  

let orbesPosXIsq = [98, 178, 262, 344, 424];
let orbesPosXDer = [711, 792, 873, 958, 1038];

var cuadroPos = {
    ancho: "100",
    alto: "100"
}

let cuadrosPosXeY = [[138, 238], [248, 238], [358, 238], 
    [138, 348], [248, 348], [358, 348], 
    [138, 458], [248, 458], [358, 458]];


var secuencia, 
    nivel, 
    indSec,
    increDerArray,
    increIzqArray,
    transparent = 'background-color: transparent;',
    gray = 'background-color: rgba(115, 115, 115, 0.65);',
    hitColor = 'background-color: rgba(56, 137, 210, 0.65);',
    failColor = 'background-color: rgba(208, 47, 0, 0.65);' ;


window.onload = () => {
    comienzaPartida();
}

function limpiarTablero(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function pintarImagenDeFondo(){
    ctx.drawImage(imagenFondo, 0,0, canvas.width, canvas.height);
}

function pintarOrbe(orbec, posX, {posY, ancho, alto}){
    ctx.drawImage(orbec, posX, posY, ancho, alto);
}

function pintarRectangulo(posX, posY, {ancho, alto}){
    ctx.fillRect(posX, posY, ancho, alto);
    setTimeout(limpiarTodo, 500);
}

function orbePosCorrect(limite, orbePosi) {
    for (let i = 0; i < limite; i++) {
        pintarOrbe(imgOrbeVerde, orbePosi[i], orbePos);
    }
}

function limpiarTodo(){
    limpiarTablero();
    pintarImagenDeFondo();
    orbePosCorrect(increIzqArray, orbesPosXIsq);
    buttomColor(gray);
    indSec++;
    setTimeout(iniciaSecuencia, 150);
}

function comienzaPartida() {
    reiValores();
    setRandomNumber();
    iniciaSecuencia();
}

function reiValores() {
    secuencia = [];
    indSec = 0;
    nivel = 1;
    increDerArray = 0;
    increIzqArray = 1;
}

function setRandomNumber() {
    secuencia.push(parseInt(Math.random() * 9));
}

function iniciaSecuencia(){
    if(indSec < secuencia.length){
        pintarRectangulo(cuadrosPosXeY[secuencia[indSec]][0], cuadrosPosXeY[secuencia[indSec]][1], cuadroPos);
    }
    else{
        orbePosCorrect(increDerArray, orbesPosXIsq);
        indSec = 0;
        buttomColor(transparent);
        addEvent();
    }
}

function buttomColor(color) {
    arrayNumberButton.forEach(numButton => {
        numButton.style.cssText = color;
    });
}

function comprobarNumero(numero) {
    if(numero == secuencia[indSec]){
        hit(numero);
    } 
    else{
        fail();
    }
}

function hit (numero) {
    arrayNumberButton[numero].style.cssText = hitColor;
    setTimeout(() => {
        arrayNumberButton[numero].style.cssText = transparent;
        hitOff();
    }, 200);
}

function hitOff() {
    increDerArray++;
    orbePosCorrect(increDerArray, orbesPosXDer)
    indSec++;
    if(indSec == secuencia.length){  
        if (nivel == 5) {
            container.style.cssText = ('visibility: hidden;');
            alert("Tarea Completada 😎👌");
        }
        nivel++;
        increIzqArray++;
        orbePosCorrect(increIzqArray, orbesPosXIsq);
        setRandomNumber();
        increDerArray = 0;
        indDerArray = [];
        indSec = 0;
        buttomColor(gray);
        removeEvent();
        setTimeout(iniciaSecuencia, 1000);
    }
}

function fail() {
    removeEvent();
    aniFail();
    setTimeout(() => {
        aniFail();
    }, 500);
    setTimeout(() => {
        buttomColor(gray);
    }, 600);
    setTimeout(() => {
        comienzaPartida();
    }, 1400);

    function aniFail() {
        orbesPosXDer.forEach(orbes => {
            pintarOrbe(imgOrbeRojo, orbes, orbePos);
        });
        buttomColor(failColor)
        setTimeout(() => {
            buttomColor(transparent)
            limpiarTablero();
            pintarImagenDeFondo();
            }, 200);
    }
}

function addEvent() {
    arrayNumberButton.forEach(numButton => {
        numButton.addEventListener('click', _envio, true);
    });
}

function removeEvent() {
    arrayNumberButton.forEach(numButton => {
        numButton.removeEventListener('click', _envio, true);
    });
}

function _envio() {
    comprobarNumero(this.value)
}
