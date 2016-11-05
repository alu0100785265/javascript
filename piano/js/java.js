
var piano = document.getElementById('piano');
//piano.innerHTML += '<div class="key"></div>';
var ruta= 'https://cdn.rawgit.com/pffy/mp3-piano-sound/master/mp3/';
var notas = ['c1','c1s','d1','d1s','e1','f1','f1s','g1','g1s','a1','a1s','b1','c2'];
var prueba = ['c1','c1','c1s','c1','d1s','d1','c1','c1','c1s','c1','e1','d1s','c1','c1','g1','f1','d1s','d1','c1s','f1s','f1s'];
//112143 112154 1186432 776454
var keys = {} 
var ki = {}
//function tocar(){
  for(i=0; i < notas.length; i++){
   keys[notas[i]] = new Audio(ruta + notas[i] +'.mp3');
   		//console.log(keys[notas[i]]);
   
     }
  /*
  for (j=0; j <prueba.length ; j++){
  		ki[prueba[j]] = new Audio(ruta + prueba[j] +'.mp3');
  		//console.log(prueba[j]);
  }
*/
//

 function plays(pr){
//	tocar();
  //console.log(pr);
   keys[pr].play();
   var j=0;
   if (notas[pr]==prueba[j]) {
		
   		j++;
		console.log("correcto");
	}
	else{
		console.log("error");
	}
   //comprobar(pr);
}
function comprobar(pr){
	for(j=0; j < prueba.length; j++){
	if (notas[pr]==prueba[j]) {
		

		console.log("correcto");
	}
	else{
		console.log("error");
	}
}
}