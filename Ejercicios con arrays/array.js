'use strict'
//Escribir una función que reciba un array de strings y muestre cada elemento con su posición.}
function mostrarElementos(array) {
    let i = 0;
    while (i < array.length) {
        alert("Elemento en la posición " + i + ": " + array[i]);
        i++;
    }
}

let strings = ['hola','nuevo','mundo'];
mostrarElementos(strings);
//Escribir una función que reciba un array de números y devuelva la suma de todos sus elementos.

function sumarArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

let numero = [1, 2, 3, 4, 5];
let resultado = sumarArray(numeros);
alert("La suma de los elementos del array es: " + resultado);

//Escribir una función que reciba un array de números y muestre casa uno de sus elementos multiplicado por 3.
function mostrarMultiplicadoPorTres(array) {
    for (let i = 0; i < array.length; i++) {
        let resultado = array[i] * 3;
        alert("Elemento " + (i + 1) + ": " + resultado);
    }
}

let numeros = [1, 2, 3, 4, 5];
mostrarMultiplicadoPorTres(numeros);

