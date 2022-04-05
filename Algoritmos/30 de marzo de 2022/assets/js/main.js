//Esto fue un ejercicio para llamar desde el HTLML y que haga algo el archivo
//De Javascript: alert("¡Qué hay!")

/* Variables:
var - Se considera una mala práctica, por su necesidad de contexto
let - Modificable
const - Constante
*/

/* Valores primitivos:
string - cadena/texto
number - número
boolean - binario (true/false)
null - sin valor
undefined - tipo de valor indefinida

Te detecta automáticamente el tipo de valor, no hay necesidad de declarar
*/

//string
//Se puede utilizar comillas dobles y simples sin distinción
let nombre2 = "Dav"; //Nombres, carácteres, símbolos y números
//No se utilizan las palabras reservadas para las variables.
//Se puede utilizar mayúsculas pero no es recomendable
//Camel case o Tipo oración se puede: Ej. paisDeNacimiento
//Guiones bajos: Ej. _nombre
//Signo de dólar: $elementos
//no tildes, no "ñ"

//number
let numero = 42;
let numerodecimal = 52.4;
let numeronegativo = -71;

//boolean
let valor = true;

//null
let a = null;

//undefined
let b = undefined;

//Diferencia entre let y const
//JS se ejecuta línea por línea de manera descendente
//Si tenemos:
//Podemos cambiar de valores y tipo de valor en un let:
let variable = 1;
console.log(variable);
console.log(typeof variable);

variable = "OK"
console.log(variable);
console.log(typeof variable);
//En un const no
//Además, concatenamos
const c = 3;
console.log("c" + c);
//Si los valores son combinados (string-number) se unen
//Si ambos son números entonces se hace la operación

//Si:
//c="4";
//console.log(c);
//Marca error en la consola, ya que una constante no se puede cambiar de valor.

//Registra en la consola las variables
//Este comando sirve para mostrar la variable
console.log(nombre2, numero, numerodecimal, numeronegativo, valor, a, b)

//Imprime el tipo de variable
console.log(typeof nombre2, numero, numerodecimal, numeronegativo, valor, a, b);
