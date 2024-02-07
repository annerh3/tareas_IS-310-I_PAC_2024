/* Verificación de contraseña:
Pida al usuario que ingrese una contraseña y verifique si coincide con una contraseña predefinida. */

const contraDefault = "contraseña123";

let contraUser = prompt("Por favor, ingrese su contraseña:");


if (contraUser === contraDefault) {
    alert("¡Contraseña correcta!");
} else {
    alert("Contraseña incorrecta. Por favor, inténtelo de nuevo, refrescando la pagina.");
}
