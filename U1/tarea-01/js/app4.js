// Área de un triángulo:
// Pida la base y la altura de un triángulo y calcula su área.
let base = parseFloat(prompt("Ingresa la base del triángulo:"));
let altura = parseFloat(prompt("Ingresa la altura del triángulo:"));

if (isNaN(base) || isNaN(altura)) 
{
    alert("Por favor, ingresa números válidos para la base y la altura.");
} else 
    {
    let area = (base * altura) / 2;
    alert(`El área del triángulo con base ${base} y altura ${altura} es: ${area}`);
    }
