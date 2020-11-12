
// function xd(){

    // Array.prototype.mezclar= function() {
    //     var n=this.length;
    //     while(n--)
    //     {
    //         var i=Math.floor(n*Math.random());
    //         var tmp =this[i];
    //         this[i]=this[n];
    //         this[n]=tmp;
    //     }
    //     return this;
    // }
     
     
    // //Luego donde quieras
    // var miArray=[1, 3, 4, 5, 6, 7, 8, 9, 2, 10 ];
    // cosole.log(miArray.mezclar());



    // Array.prototype.shuffle = function() {
    //     for ( var i = this.length-1; i > 0; i-- ) {
    //          var tmp = this[ j ];
    //         this[ j ] = this[ i ];
    //         this[ i ] = tmp;
    //     }
    //     return this;
    // }
    // var foo = [1, 3, 4, 5, 6, 7, 8, 9, 2, 10 ];
    
    // console.log( foo.shuffle() );

    // var number = new Array(foo.shuffle());
    // console.log(number);

    // document.getElementById('posicion_1').innerHTML = foo.shuffle();
// }

// if (acum===0) {
    //     acum++;
    //     document.getElementById('1').innerHTML="<p style='background-color: green'>1";
    // }else{
    //     document.getElementById('1').innerHTML="<p style='background-color: red'>1";
    // }
    // if (acum===1) {
    //     acum++;
    //     document.getElementById('2').innerHTML="<p style='background-color: green'>2";
    // }else{
    //     document.getElementById('2').innerHTML="<p style='background-color: red'>2";
    // }

    // alert(acum);


var acum = 0;
function xd(num){
    
    switch (num) {
        case 1:
            if (acum==0) {
                acum++;
                document.getElementById('1').innerHTML="<p style='background-color: green'>1";
            }else{
                document.getElementById('1').innerHTML="<p style='background-color: red'>1";
                location.reload();
            }
            break;
        case 2:
            if (acum==1) {
                acum++;
                document.getElementById('2').innerHTML="<p style='background-color: green'>2";
            }else{
                document.getElementById('2').innerHTML="<p style='background-color: red'>2";
                location.reload();
            }
            break;
        case 3:
            if (acum==2) {
                acum++;
                document.getElementById('3').innerHTML="<p style='background-color: green'>3";
            }else{
                document.getElementById('3').innerHTML="<p style='background-color: red'>3";
                location.reload();
            }
            break;
        case 4:
            if (acum==3) {
                acum++;
                document.getElementById('4').innerHTML="<p style='background-color: green'>4";
            }else{
                document.getElementById('4').innerHTML="<p style='background-color: red'>4";
                location.reload();
            }
            break;
        case 5:
            if (acum==4) {
                acum++;
                document.getElementById('5').innerHTML="<p style='background-color: green'>5";
            }else{
                document.getElementById('5').innerHTML="<p style='background-color: red'>5";
                location.reload();
            }
            break;
        case 6:
            if (acum==5) {
                acum++;
                document.getElementById('6').innerHTML="<p style='background-color: green'>6";
            }else{
                document.getElementById('6').innerHTML="<p style='background-color: red'>6";
                location.reload();
            }
            break;
        case 7:
            if (acum==6) {
                acum++;
                document.getElementById('7').innerHTML="<p style='background-color: green'>7";
            }else{
                document.getElementById('7').innerHTML="<p style='background-color: red'>7";
                location.reload();
            }
            break;
        case 8:
            if (acum==7) {
                acum++;
                document.getElementById('8').innerHTML="<p style='background-color: green'>8";
            }else{
                document.getElementById('8').innerHTML="<p style='background-color: red'>8";
                location.reload();
            }
            break;
        case 9:
            if (acum==8) {
                acum++;
                document.getElementById('9').innerHTML="<p style='background-color: green'>9";
            }else{
                document.getElementById('9').innerHTML="<p style='background-color: red'>9";
                location.reload();
            }
            break;
        case 10:
            if (acum==9) {
                acum++;
                document.getElementById('10').innerHTML="<p style='background-color: green'>10";
                setTimeout(() => {
                    alert("Tarea completada");
                    window.history.back();
                }, 2000);
                
            }else{
                document.getElementById('10').innerHTML="<p style='background-color: red'>10";
                location.reload();
            }
            break;
        }
  
}



