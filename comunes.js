//Funciones y variables comunes
//espectro

//crea el contexto de audio
var miFuente,fuente, mibuffer,panner, misNodos = {},
 espectro, maximo, esOpera,esFirefox,esChrome,esSafari,esIE, duracion, progreso;
var suena = false;
var avance = false;
var pausa= true;
//Actualmente con new AudioContext es suficiente
var contextoDeAudio = new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext)();
var comienzo = 0;
var retardo = 0;
var comienzobarra = 0;
var retardobarra = 0;
var indice= 500;
var nyquist = contextoDeAudio.sampleRate / 2;
var sw=0;
//API request animation frame para distintos navegadores
window.requestAnimFrame = (function(){
return window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function( callback ){
window.setTimeout(callback, 1000 / 60);
};
})(); 
//CArgamos el archivo al cargar la página. Esta función la solemos llamar en onbodyload
function inicializar() {
	aviso();
	checkNavegador();
    cargarSonido("audios/Huajara.mp3");
	
}

function cargarSonido(url) {
	// CARGAMOS el archivo con petición asíncorna XMLHTTP
    var peticion = new XMLHttpRequest();
    peticion.open('GET', url, true);
    // Cuando cargen los datos de audio:
    peticion.responseType = 'arraybuffer';
    //cuando cargue decodificamos los datos de audio y los introducimos como una PCM en la variable mi buffer
    peticion.onload = function() {
        contextoDeAudio.decodeAudioData(peticion.response, function(elbuffer) {
            mibuffer = elbuffer;
        });
    }
    peticion.send();
}

// Función para controlar la progressbar de Boostrap
function actualiza_barra(retardo){

if (suena) {
	if (Math.round(retardobarra)==Math.round(duracion)){ $('#progreso').removeClass('progress-bar-info');$('#progreso').addClass('progress-bar-danger');botonRecarga();}
	retardobarra= contextoDeAudio.currentTime +retardo-comienzobarra ;
	progreso =parseInt((100*retardobarra)/duracion);
	$('.progress-bar').css('width', progreso+'%').attr('aria-valuenow', progreso); 
	
	
	}else{
		
		comienzobarra=contextoDeAudio.currentTime;
		console.log('SI NO SUENA HAGO: retardobarra:'+retardobarra);
		}



 
//console.log('SI NO SUENA HAGO: retardobarra:'+retardobarra+'duraciontotal: '+duracion+'progreso de la barra en porcentaje'+progreso)

}

//Función de control Reproducción/Pausa
function playPause() {
    if (suena) {
        // Stop
        fuente = miFuente;
        fuente.stop(0);
        retardo += contextoDeAudio.currentTime - this.comienzo;
		 comienzobarra += contextoDeAudio.currentTime - retardo;
        console.log('Pausado en'+ retardo);
		
        // Grabar posición donde se pausó.
		
        //$('#play').text = 'Reproducir';
		 cambiaBotonaPlay();
        //Pulsa el botón reproducir!!
        pulsaElBotonReproducir();
		avance=false;
    } else {
		
        comienzo = contextoDeAudio.currentTime;
        console.log('comenzo en: ', retardo);
        var source = contextoDeAudio.createBufferSource();
        source.buffer = mibuffer;
		 //Total de duración
		 duracion= source.buffer.duration
		 source.buffer
        source.loop = false;
        source = cadenaDeAudio(source);
        // se puede pasar tambien contextoDeAudio.currentTime
        
        //source.noteOn(0); //-> descartado en Firefox
        source.start(0, retardo % source.buffer.duration);
        avance=true;
        requestAnimationFrame(dibujaEspectro.bind(this))
		 //Variable global miFuente será source
		 miFuente = source;
      	cambiaBotonaPause();
    }
    this.suena = !this.suena;
	
}
//Muestra un botón de recarga al finalizar la pista de audio. Inicializa los componentes
function botonRecarga(){
	if ($('#play').hasClass('btn-danger')){
		    var texto = $('#play');
            var icono = texto.find('span'); 
            texto.html('Recargar&nbsp;');
            texto.append(icono);
	    $('#play').removeClass('btn-danger');
		 $('#play').addClass('btn-warning');
		 $('#icono').removeClass('glyphicon glyphicon-pause ');
		 $('#icono').addClass('glyphicon glyphicon-repeat');
	  $('#play').attr('onclick','recarga();')
	}
	
	}
function recarga(){location.reload();}
//Función para mostrar el botón reproducir
function pulsaElBotonReproducir() {
    var provisional = document.createElement('div');
    provisional.setAttribute('id', 'provisional');
    var parrafo = document.createElement("h1");
    var contenido = document.createTextNode("Pulsa el botón reproducir");
    provisional.appendChild(parrafo);
    parrafo.appendChild(contenido);
    var espectro = document.getElementById('espectro');
    var papa = espectro.parentNode;
    papa.insertBefore(provisional, espectro);
    document.querySelector('#provisional').appendChild(parrafo);
} 
function aviso(){
//Pulsa el botón reproducir!!
var parrafo = document.createElement("h1");
var contenido = document.createTextNode("Pulsa el botón reproducir");
parrafo.appendChild(contenido);
document.querySelector('#provisional').appendChild(parrafo);
}

//Compatibilidad con firefox

function checkNavegador(){
esOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
esFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
esSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
esChrome = !!window.chrome && !esOpera;              // Chrome 1+
esIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6	
}

// Funciones de control de resolución
function cambiaResolucion_mas() {
    resolucion = resolucion * 2;
    document.querySelector('#resolucion').innerHTML = resolucion;
    return resolucion;
}

function cambiaResolucion_menos() {
    resolucion = resolucion / 2;
    document.querySelector('#resolucion').innerHTML = resolucion;
    return resolucion;
}

function parar() {
	if(suena){
    var fuente = miFuente;
    fuente.stop(0);
    clearInterval(espectro);}
}
// Muestra el texto y color del botón en estado "reproducir"
function cambiaBotonaPlay(){
	 var texto = $('#play');
            var icono = texto.find('span'); 
            texto.html('Reproducir&nbsp;');
            texto.append(icono);
		 $('#play').removeClass('btn-danger');
		 $('#play').addClass('btn-info');
		 $('#icono').removeClass('glyphicon glyphicon-pause ');
		 $('#icono').addClass('glyphicon glyphicon-play btn-info');
}

// Muestra el texto y color del botón en estado "pause"
function cambiaBotonaPause(){
 //JQery para cambiar el estado del botón a pausa 
		var texto = $('#play');
        var icono = texto.find('span'); 
        texto.html('Pausar&nbsp;');
        texto.append(icono);
		 $('#play').addClass('btn-danger');
		 $('#play').removeClass('btn-info');
		 $('#icono').removeClass('glyphicon glyphicon-play ');
		 $('#icono').addClass('glyphicon glyphicon-pause ');
        var parrafo = document.getElementById("provisional");
        parrafo.parentNode.removeChild(parrafo);
}
