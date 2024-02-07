/* Verificación de par o impar:
Pida un número al usuario y determina si es par o impar.   */
let numero = parseFloat(prompt("Ingresa un Numero:"));
if (isNaN(numero)) {
    alert("Por favor, ingresa números válidos. Refresca la pagina.");
} else {
    if(numero % 2 == 0)
    {
        alert("El numero que ingresaste es PAR.");
    }else{
            alert("El numero que ingresaste es IMPAR.");
        }
}