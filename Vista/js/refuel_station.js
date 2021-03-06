var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(201,171,36)";

var butFill = document.getElementById("butFill");
butFill.onmousedown = function() {
    startTime = new Date();
    moverRectangulo(refuelStation);
};

butFill.onmouseup = function() {
    endTime = new Date();
    clearInterval(interval);
    interval = null;
};

var imagenFondo = new Image();
imagenFondo.src = "https://i.imgur.com/O8a90p8.png";
imagenFondo.onload = () => { 
    pintarRectangulo(refuelStation); 
    pintarImagenDeFondo();
}

const LIMITE_CARGA = 60;

function rect(posX, posY, ancho, alto) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = ancho;
    this.alto = alto;
}  

var refuelStation = new rect(30, 480, 300, 10);
var interval = null;

function moverRectangulo(rect){
    
    if(interval === null){
        interval = setInterval(function(){

            if(estaEnElLimite(rect)){
                alert("Tarea completada");
                clearInterval(interval);
                interval = null;
            }

            rect.posY -= 0.5;
            rect.alto += 0.5;
            limpiarTablero();
            pintarRectangulo(rect); 
            pintarImagenDeFondo();
        }, 1)
    }
    else{
        clearInterval(interval);
        interval = null;
    }

}

function estaEnElLimite(rect){
    return rect.posY <= LIMITE_CARGA;
}

function limpiarTablero(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function pintarRectangulo({ posX, posY, ancho, alto}){
    ctx.fillRect(posX, posY, ancho, alto);
}

function pintarImagenDeFondo(){
    ctx.drawImage(imagenFondo, 0,0, canvas.width, canvas.height);
}