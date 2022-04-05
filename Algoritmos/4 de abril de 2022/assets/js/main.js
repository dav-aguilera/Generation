//Arreglos

//reverse();
//Revierte el orden del arreglo
//arreglo.reverse();

//splice();
//Quita uno o más elementos de una posición en específico
//arreglo.splice("posición de inicio","cantidad de elementos")

//sort();
//Ordena alfabéticamente los elementos string y de unicode en números
//arreglo.sort();

//Ordenar números de mayor a menor:
//arreglo.sort(function ordenar(a,b){return b-a});
//Se verá posteriormente la explicación

//indexOf();
//Muestra la posición de un elemento
//console.log(arreglo.indexOf(elemento));


//Ciclos:

//for
// for (let/var contador=0; condición; incremento/decremento)
/*{
comandos
}*/

//La diferencia está en que var genera un variable general y let; una local, sólo para el ciclo

//Ejemplos con arreglos:

//for (let i=0; i<arreglo.length; i++)
//{
//console.log(arreglo[i]);
//}

//for (const contador in arreglo)
//{
//
//}

//Ejercicio:
const num=[3,5,7,1,6];
function numeroMayor(arr)
{
//console.log(arr);
arr.sort(function ordenar(a,b){return a-b});
let numero = arr.pop(); //Se guarda el número que se elimino en numero
//return console.log("El número mayor es "+numero); Se expone el valor
return console.log(`El número mayor es: ${numero}`); //Una manera más fácil de concatenar (plantilla de cadena)
}

 numeroMayor(num);
numeroMayor([12,51,63,754,745,845,8456,2341,1236,9352,1222]);

