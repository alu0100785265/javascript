


//$(document).ready(function(){

var piano = document.getElementById('piano');
//piano.innerHTML += '<div class="key"></div>';
var ruta= 'https://cdn.rawgit.com/pffy/mp3-piano-sound/master/mp3/';
var notas = ['c1','c1s','d1','d1s','e1','f1','f1s','g1','g1s','a1','a1s','b1','c2'];
var prueba = ['c1','c1','d1','c1','f1','e1','c1','c1','d1','c1','g1','f1','c1','c1','c2','a1','f1','e1','d1','a1s','a1s','a1','f1','g1','f1'];
//112143 112154 1186432 776454
var keys = {} 
var ki = {}
//function tocar(){
  for(i=0; i < notas.length; i++){
   keys[notas[i]] = new Audio(ruta + notas[i] +'.mp3');
   		//console.log(keys[notas[i]]);
   
     }
 //var cont=0;
 //

 function plays(pr){
/*
if(prueba[cont]==pr){

  //$(this).css("background","linear-gradient(-30deg,#f5f5f5,red)")
  cont++;
  console.log("letra correcta" + cont);
}
else
  console.log("letra errónea");

  */
   console.log(pr);
   keys[pr].play();
 
   //comprobar(pr);

}

//});