// contiene(numero, numeros)
// Crear una funci´ón contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros.

// [5,78,8,9] --> 9 --> true 
//            --> 55 --> false

// 1) recorrer el array
// 2) comparar si es el numero que estoy buscando
 
//                  9    [5,78,9]
function contiene(numero, array) {
    for (let i= 0; i< array.length; i++){
        //    9           5
        if( numero === array[i] ){
            return true;
        };
    }
    return false;
};


// console.log( contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) )// true
// console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])) // false


// gano(tragamonedas)
// Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

// 1) recorrer el array
// 2) comparar simbolo
// 3) devolver booleano



function gano(tragamonedas) {
    let simbolo = tragamonedas[0];
    for(let i=1; i<5; i++){
        if(simbolo !== tragamonedas[i]){
            return false;
        };
    };
    return true;
};

console.log( gano(['⭐️', '⭐️', '⭐️', '💫', '✨']) ) // false
console.log( gano(['💫', '💫', '💫', '💫', '💫']) ) // true
console.log( gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) ) // true