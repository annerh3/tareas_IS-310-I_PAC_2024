/* Concatenación de cadenas:
Capture de forma separada los 2 nombres y los dos apellidos de una persona y luego
almacene en una variable los valores por medio de una concatenación y muéstrelo en la consola. */
let primerNombre = prompt("Ingresa su Primer Nombre:");
let segundoNombre = prompt("Ingresa su Segundo Nombre:");
let primerApellido = prompt("Ingresa su Primer Apellido:");
let segundoApellido = prompt("Ingresa su Segundo Apellido:");

const nombreCompleto = 'Tu nombre completo es: '+ primerNombre + ' ' + segundoNombre + ' ' + primerApellido + ' ' + segundoApellido;
alert(nombreCompleto);