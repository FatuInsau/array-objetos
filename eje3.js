// sonIguales(a, b)
// Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true si ambos arrays tienen los mismos valores en la misma posición, o false sino.

// 1) recorrer array
// 2) comparacion

function sonIguales(array1, array2) {
    if(array1.length === array2.length)  
    for(let i=0;i<array1.length;i++){
        if(array1[i] !== array2[i]){
            return false;
        }
    }
    return true;
};

console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])) // true
console.log(sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105])) // false
console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105])) // false