/* Unidades de medida:
Dada una cantidad expresada en pies, y otra en metros. 
Determinar la suma pero convertida a pulgadas, 
                                   a yardas, 
                                   a metros y 
                                   a millas por separado. 
Considere las siguientes equivalencias:
1 milla = 1609 metros, 1 pulgada = 0.0254 metros, 1 yarda = 3 pies, 1 pie = 12 pulgadas. 1 metro = 39.37 */
let cantPie = parseFloat(prompt("Ingresa una cantidad en Pies: "));
let cantMetro = parseFloat(prompt("Ingresa una cantidad en Metros: "));

// a pulgadas
let pieAPulgada = cantPie * 12;
let metroAPulgada = cantMetro * 39.370078;
let sumaEnPulgadas = pieAPulgada + metroAPulgada;

// a yardas
let pieAYarda = cantPie * 0.33333333;
let metroAYarda = cantMetro * 1.09361329;
let sumaEnYardas = pieAYarda + metroAYarda;

// a metros
let pieAMetro = cantPie * 0.3048;
sumaEnMetros = cantMetro + pieAMetro;

//a millas

let pieAMilla = cantPie * 0.0001893939;
let metroAMilla = cantMetro * 0.0006213712;
sumaEnMillas = pieAMilla + metroAMilla;

alert('La suma es: ' + sumaEnPulgadas.toFixed(2) + ' pulgadas.\nLa suma es: ' + sumaEnYardas.toFixed(2) + ' yardas.\nLa suma es: ' + sumaEnMetros.toFixed(2) + ' metros.\nLa suma es: ' + sumaEnMillas.toFixed(2) + ' millas.');
