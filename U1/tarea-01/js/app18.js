/* Tanques de agua:
Dadas dos tanques llenos de agua cuyas capacidades están dadas en Litros y en Yardas Cúbicas. 
De la cantidad total de agua: el 75% se dedica al consumo doméstico y el 25% se dedica al riego. 
Diseñe un programa que haga lo siguiente:
    Determine la cantidad total de agua expresada en metros cúbicos.
    Determine las cantidades de agua dedicada al riego y al consumo doméstico expresada
    en metros cúbicos y en pies cúbicos. 
        Considere los siguientes factores de conversión:
        1 pie cúbico = 0.0283 metros cúbicos, 1 metro cúbico = 1000 litros, 1 yarda cúbica = 27 pies cúbicos.    */
    
let capacidadLitros = parseFloat(prompt("Ingrese la capacidad del tanque en litros:"));
let capacidadYardasCubicas = parseFloat(prompt("Ingrese la capacidad del tanque en yardas cúbicas:"));

let cantidadTotalLitros = capacidadLitros + (capacidadYardasCubicas * 27 * 1000); // yardas^3 -> pies^3 -> litros
//let cantidadTotalYardasCubicas = cantidadTotalLitros / (27 * 1000); // litros -> metros^3 -> yardas^3

// cant de agua dedicada al consumo doméstico y al riego en litros
let consumoDomesticoLitros = cantidadTotalLitros * 0.75;
let riegoLitros = cantidadTotalLitros * 0.25;
// cant de agua dedicada al consumo domestico y al riego en metros^3
let consumoDomesticoMetrosCubicos = (consumoDomesticoLitros / 1000).toFixed(2);
let riegoMetrosCubicos = (riegoLitros / 1000).toFixed(2);
// cant de agua para al consumo domestico y al riego en pies^3
let consumoDomesticoPiesCubicos = (consumoDomesticoMetrosCubicos / 0.0283).toFixed(2);
let riegoPiesCubicos = (riegoMetrosCubicos / 0.0283).toFixed(2);


alert("->Cantidad total de agua: " + (cantidadTotalLitros / 1000).toFixed(2) + ' metros cúbicos.\n' +
    "\n->Cantidad de agua dedicada al consumo doméstico:\n" +
        "- En metros cúbicos: " + consumoDomesticoMetrosCubicos +
        "\n- En pies cúbicos: " + consumoDomesticoPiesCubicos +
    "\n\n->Cantidad de agua dedicada al riego:\n" +
        "- En metros cúbicos: " + riegoMetrosCubicos +
        "\n- En pies cúbicos: " + riegoPiesCubicos);