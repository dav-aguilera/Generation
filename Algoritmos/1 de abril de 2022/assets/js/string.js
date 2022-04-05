let nombre ="David"
let apellido="Aguilera"

console.log(nombre + " " + apellido);

//Métodos de cadena de texto

console.log(nombre.length);
console.log(nombre.toUpperCase);
console.log(nombre.toLowerCase);
console.log(nombre.charAt(0));
console.log(nombre.charAt(1));
console.log(nombre.charAt(2));
console.log(nombre.charAt(3));
console.log(nombre.charAt(4));

const curp = prompt("Ingresa tu CURP")
curpmayus=curp.toUpperCase()

function validarCURP(curpmayus)
{
        const expression = "AUPD960120HDFGLV00"
if( expression===curpmayus)
{
    alert("CURP correcta")
}
else
{
    alert("CURP incorrecta")
}

}

validarCURP(curpmayus)