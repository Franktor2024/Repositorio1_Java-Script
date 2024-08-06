// Prueba de gibhub
console.log ("PRIMERA MANERA")

function combineArray(array1, array2) {
    let resultados = array1.concat(array2)
    return resultados
}

console.log(combineArray([1, 2], [3, 4])); 
console.log(combineArray([17, 5], [6, 7]));  


// OTRA PRUEBA
console.log ("OTRA MANERA")

function combineArray1(array1, array2) {
    console.log (array1.concat(array2));
    return combineArray1
}

combineArray1([1, 2], [3, 4]); 
combineArray1([17, 5], [6, 7]);  
