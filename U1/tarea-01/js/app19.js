/* La compra:
Ha realizado una compra y sabe el precio del producto y su iva. 
Haga un script que calcule el precio total a pagar por la compra. */

let precioProducto = parseInt(prompt("Ingresa el precio del producto: "));
let iva = parseInt(prompt("Ingresa el IVA del producto (%): "));

// Calcula el monto del IVA
let montoIVA = precioProducto * (iva / 100);

// Calcula el precio total sumando el precio del producto y el monto del IVA
let totalPagar = precioProducto + montoIVA;

// Imprime el resultado
alert("El precio total a pagar es: " + totalPagar);