//Mi intento
/*const x = parseInt(prompt("Dame un número"));

function a (y)
{
    if (y%7==0)
{
    prompt("Tu número es divisible entre 7");
}
else if(y%8==0)
{
    prompt("Tu número es divisible entre 8");
}
else
{
    prompt("Tu número no es divisible entre 7 y 8")
}
}

a(x);
*/

//La solución:

const $ = prompt("Dame un número:");

function a($) 
{
    if ($ % 7 == 0 & $ % 8 == 0)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}

a($);