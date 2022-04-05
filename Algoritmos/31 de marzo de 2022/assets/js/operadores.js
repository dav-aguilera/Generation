/*
Operadores aritméticos:
+: Suma
-: Resta
/: División
*: Producto
%: Resto Ej. 7%2=1
++: Incremento Ej. 8++=9
--: Decremento Ej. 6--=5
-: Cambio de signo
*/

const suma = 2 + 5;
console.log(suma);

const resta = 74 - 42;
console.log(resta);

const producto = 24 * 62;
console.log(producto);

const division = 852 / 52;
console.log(division);

const modulo = 152 % 123;
console.log(modulo);

//No importa el orden con lo siguiente:
//a++=++a
//La única diferencia es el orden de ejecución
//Ej. Si colocamos el console.log(--incremento) no es igual a console.log(incremento--)

let incremento = 67;
console.log(incremento);
incremento++;
console.log(incremento);

let decremento = 56;
console.log(decremento);
decremento--;
console.log(decremento);

let a = 10;
a = -a
console.log(a);

//Concatenar = Unir "hilos"/strings
//""+""

console.log("a" + "a");

/*
Operadores lógicos:
And (&&): y - "conjunción"
Or (||): o - "disyunción"
not (!): no - "negación"
*/

//Ejemplos:
/*
*/

const v = true;
const f = false;

r1 = v && v;
console.log(r1);

r2 = f && v;
console.log(r2);

r3 = v && f;
console.log(r3);

r4 = f && f;
console.log(r4);

r5 = v || v;
console.log(r5);

r6 = v || f;
console.log(r6);

r7 = f || v;
console.log(r7);

r8 = f || f;
console.log(r8);

r9 = !(f || v);
console.log(r9);

r10 = !(f && v);
console.log(r10);

r11 = !f && v;
console.log(r11);

r12 = !v && v;
console.log(r12);

r13 = !f || f;
console.log(r13);

/* 
Operadores de comparación
==: Igual a, devuelve un true cuando los operandos son iguales
===: Estrictamente igual a (Js 1.3)
!=: No igual a, devuelve un true si no son iguales
!==: Estrictamente no igual (Js 1.2)
>: Mayor que
>=: Mayor igual que
<: Menor que
<=: Menor igual que
*/

/*Algo interesante sucede:
console.log(2=="2");
Convierte un string a un valor numérico

Adicionalmente, la diferencia de "igual a" y "estrictamente igual a":
Es en los valores booleanos. Ej.*/

console.log(0 == false); //true
console.log(1 == true); //true

console.log(0 === false); //false
console.log(1 === true); //false

console.log(10 != 10);
console.log("10" !== 10);

/*
Condicionales:
if (condición)
{
Código si se cumple;
}
else if (condición 2)
{
Código si la condición 2 se cumple;
}
else
{
Código si no se cumple ninguna;
}
*/

//Depende de la entrada
//Vamos a pedir al usuario un número
//const b= prompt ("Ingrese un número a comparar");

//Adicionalmente, convertiremos un entero o flotante
//const b= parseInt(prompt("Ingrese un número a comparar"));
//const b= parseFloat(prompt("Ingrese un número a comparar"));

//En este caso no
const b = 90;

if (b > 30) {
    console.log(b + " es mayor que 30");
}
else if (b < 30) {
    console.log(b + " es menor que 30");
}
else {
    console.log(b + " es igual a 30");
}
