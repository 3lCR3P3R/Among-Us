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

function orbeColor(posX) {
    this.posX = posX;
    this.posY = 92;
    this.ancho = 54;
    this.alto = 53;
}  

var orbePosUno = new orbeColor(98);
var orbePosDos = new orbeColor(178);
var orbePosTres = new orbeColor(262);
var orbePosCuatro = new orbeColor(344);
var orbePosCinco = new orbeColor(424);
let orbesPosIsq = [orbePosUno, orbePosDos, orbePosTres, orbePosCuatro, orbePosCinco];

var orbePosSeis = new orbeColor(711);
var orbePosSiete = new orbeColor(792);
var orbePosOcho = new orbeColor(873);
var orbePosNueve = new orbeColor(958);
var orbeDerDiez = new orbeColor(1038);
let orbesPosDer = [orbePosSeis, orbePosSiete, orbePosOcho, orbePosNueve, orbeDerDiez];


function rect(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = 100;
    this.alto = 100;
}  

var cuadroUno = new rect(138, 238);
var cuadroDos = new rect(248, 238);
var cuadroTres = new rect(358, 238);
var cuadroCuatro = new rect(138, 348);
var cuadroCinco = new rect(248, 348);
var cuadroSeis = new rect(358, 348);
var cuadroSiete = new rect(138, 458);
var cuadroOcho = new rect(248, 458);
var cuadroNueve = new rect(358, 458);
let cuadros = [cuadroUno, cuadroDos, cuadroTres, cuadroCuatro, cuadroCinco, cuadroSeis, cuadroSiete, cuadroOcho, cuadroNueve];

window.onload = () => {
    pintarOrbe(imgOrbeRojo, orbePosUno);
    pintarOrbe(imgOrbeVerde, orbePosUno);
    pintarImagenDeFondo();
    comienzaPartida()
}

function limpiarTablero(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function pintarImagenDeFondo(){
    ctx.drawImage(imagenFondo, 0,0, canvas.width, canvas.height);
}

function pintarOrbe(orbec, {posX, posY, ancho, alto}){
    ctx.drawImage(orbec, posX, posY, ancho, alto);
}

var secuencia, 
    nivel, 
    indSec,
    increDerArray,
    increIzqArray,
    transparent = 'background-color: transparent;',
    gray = 'background-color: rgba(115, 115, 115, 0.65);',
    hitColor = 'background-color: rgba(56, 137, 210, 0.65);',
    failColor = 'background-color: rgba(208, 47, 0, 0.65);' ;


function comienzaPartida() {
    reiValores();
    setRandomNumber();
    iniciaSecuencia();

    function reiValores() {
        secuencia = [];
        indSec = 0;
        nivel = 1;
        increDerArray = 0;
        increIzqArray = 0;
    }

    function setRandomNumber() {
        secuencia.push(parseInt(Math.random() * 9));
    }

    function iniciaSecuencia(){
        if(indSec < secuencia.length){
            pintarRectangulo(cuadros[secuencia[indSec]]);
        }
        else{
            orbePosCorrect(increDerArray, orbesPosIsq);
            indSec = 0;
            buttomColor(transparent);
            addEvent();
        }

        function pintarRectangulo({ posX, posY, ancho, alto}){
            ctx.fillRect(posX, posY, ancho, alto);
            setTimeout(limpiarTodo, 500);
        }
        
        function limpiarTodo(){
            limpiarTablero()
            pintarImagenDeFondo();
            orbePosCorrect(increIzqArray, orbesPosIsq);
            buttomColor(gray);
            indSec++;
            setTimeout(iniciaSecuencia, 150);
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
                hitOff()
            }, 200);
        }

        function hitOff() {
            increDerArray += 1;
            orbePosCorrect(increDerArray, orbesPosDer)
            indSec++;
            if(indSec == secuencia.length){  
                if (nivel == 5) {
                    container.style.cssText = ('visibility: hidden;');
                    alert("Tarea Completada 😎👌");
                }
                nivel++;
                increIzqArray += 1;
                orbePosCorrect(increIzqArray, orbesPosIsq);
                setRandomNumber();
                increDerArray = 0;
                indDerArray = [];
                indSec = 0;
                buttomColor(gray);
                removeEvent();
                setTimeout(iniciaSecuencia, 1000);
            }
        }

        function orbePosCorrect(limite, orbePos) {
            for (let i = 0; i < limite; i++) {
                pintarOrbe(imgOrbeVerde, orbePos[i]);
            }
        }

        function fail() {
            removeEvent()
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
        }
        
        function aniFail() {
            orbesPosDer.forEach(orbes => {
                pintarOrbe(imgOrbeRojo, orbes);
            });
            buttomColor(failColor)
            setTimeout(() => {
                buttomColor(transparent)
                limpiarTablero();
                pintarImagenDeFondo();
                }, 200);
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
    }
}
