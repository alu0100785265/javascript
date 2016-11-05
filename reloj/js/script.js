
 function reloj() {
  	// body...
  

var fecha = new Date();

var minu = fecha.getMinutes();
var hor = fecha.getHours();
var sec = fecha.getSeconds();

var hora = document.getElementById('horas');
var minut = document.getElementById('minutos');
var segun = document.getElementById('segundos');


hora.innerHTML = hor;
minut.innerHTML = minu;
segun.innerHTML = sec;

}

var aqui = setInterval(reloj,1000);



function cambia(){
	var formato = document.getElementById('formato_fecha');
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var fecha=new Date();
var dia=(fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear());
formato.innerHTML = dia;
}

var paco = cambia();

function dia_semana(){
	var diase=document.getElementById('diaSemana');
	var diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
var fecha=new Date();
var diass=(diasSemana[fecha.getDay()]);
diase.innerHTML= diass;
}

var dias_muestra=dia_semana();