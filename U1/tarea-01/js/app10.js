/*  Área de un círculo:
Solicite el radio de un círculo y calcule su área. */
let radio = parseFloat(prompt("Ingresa el radio del circulo: "));
let pi = Math.PI;
let area =  pi * Math.pow(radio,2);
alert('El Area del circulo con radio ' + radio + ' es: ' + area.toFixed(2) + ' unidades cuadradas.')



