/* 
Array / Arreglos / Matrices / Vectores
*/

//Declarar un arreglo, hay 3 maneras:

//Creamos con el constructor a un objeto de tipo array:
const arr = new Array(1, "Hola", null, true);

// De otra manera (Prototipos):
const arr2 = Array.of(1, 2, 3, 4);

//La más recomendable y nueva:
const arr3 = ["1", "2", "3", "4"];

//Impresión en la consola:
console.log(arr);
console.log(arr2);
console.log(arr3);

// La propiedad length nos ayuda a saber la longitud de un Array 
console.log(arr3.length);

//Ejemplo:
const frutas = ["🍌", "🍓", "🍉", "🍇"];
// console.table nos ayuda a que se visualice en modo de tabla
console.table(frutas);


//Arreglos multidimensionales
const arrM = [1, "Hola", null, [3, "Adiós", ["manzana"]]];

console.table(arrM);
console.log(arrM);

console.log(arrM[3][2][0]);

//push();
//Agrega un elemento al final del arreglo:

const estados=["México", "Puebla"];
console.log(estados);

estados.push("Guadalajara");
console.log(estados);

//A pesar de utilizar "const", no se está utilizando un cambio de objeto; que es un arreglo
//Se puede utilizar de igual manera "let"

//pop();
//Elimina el último elemento de nuestro arreglo:

estados.pop();
console.log(estados);

//unshift();
//Agrega un elemento al inicio del arreglo

//shift();
//Elimina un elemento al inicio del arreglo