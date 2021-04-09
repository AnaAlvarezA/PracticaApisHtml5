"use strict";

function playlocalVID(){
  let player = document.getElementById("videoPlayer");
  let currentVID =  document.getElementById('currentVID');
  let selectedLocalVID = document.getElementById('newlocalFILE').files[0];

// Una vez seleccionado el archivo, se incluye en el atributo scr correspondiente  
  currentVID.setAttribute('src', URL.createObjectURL(selectedLocalVID));

// El volumen empieza con este valor
  player.volume = 0.05;

// Carga el archivo de video anticipadamente
  player.load();
};

// Para empezar a reproducir el video
function playVideo(){
  document.getElementById('videoPlayer').play();
}; 

// Parar el video. Como solo hay métodos para play y pause, la Parada la hago: pausando el video y llevándolo al inicio
function stopVideo() {
  document.getElementById('videoPlayer').pause();
  document.getElementById('videoPlayer').currentTime = 0;
};

// Sube el volumen en tramos de 0.1
function volumeUp() {
  let player = document.getElementById('videoPlayer');
    if (player.volume < 0.9) {
      player.volume += 0.1;
     } else {
      alert("Alcanzado el volumen máximo")
    };
}; 

// Baja el volumen en tramos de 0.1
function volumeDown() {
  let player = document.getElementById('videoPlayer');
    if (player.volume  > 0.1) {
      player.volume -= 0.1;
    } else {
      alert("Alcanzado el volumen mínimo")
    };
};
