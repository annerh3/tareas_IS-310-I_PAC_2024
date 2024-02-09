/* Atletas:
Dos Atletas recorren la misma distancia y se registran sus tiempos en minutos y segundos. 
Se desea saber el tiempo total utilizado por ambos atletas en horas, minutos y segundos.  */

let atleta1Minutos = parseInt(prompt("Ingrese los minutos del Primer atleta:"));
let atleta1Segundos = parseInt(prompt("Ingrese los segundos del Primer atleta:"));
let atleta2Minutos = parseInt(prompt("Ingrese los minutos del Segundo atleta:"));
let atleta2Segundos = parseInt(prompt("Ingrese los segundos del Segundo atleta:"));

// ambos atletas en segundos
let totalSegundos = (atleta1Minutos * 60 + atleta1Segundos) + (atleta2Minutos * 60 + atleta2Segundos);

// sacar en horas, minutos y segundos totales
let horas = Math.floor(totalSegundos / 3600); //por si salen decimales
let minutos = Math.floor((totalSegundos % 3600) / 60);
let segundos = totalSegundos % 60;  // encontrar los segundos restantes

alert("Tiempo total utilizado por ambos atletas:\n\n" +
    "Horas: " + horas + "\n" +
    "Minutos: " + minutos + "\n" +
    "Segundos: " + segundos);