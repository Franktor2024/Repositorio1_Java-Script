function logBetween(numMenor, numMayor){
for (let i=numMenor; i<=numMayor; i++) {
console.log (i);
}
 }
// Examples:
console.log ("CON EL BUCLE FOR");
logBetween(-1, 2); // prints out:
// -1
// 0
// 1
// 2
logBetween(14, 6); // => prints nothing
logBetween(4, 6); // prints out:
// 4
// 5
// 6

// Con el bucle While

function imprimir(numMenor, numMayor){
    
    let i = numMenor;
    while (i<=numMayor) {
        console.log (i);
        i++; 
    }
     
    }
    console.log ("CON EL BUCLE WHILE");
    // Examples:
    imprimir(-1, 2); // prints out:
    // -1
    // 0
    // 1
    // 2
    imprimir(14, 6); // => prints nothing
    imprimir(4, 6); // prints out:
    // 4
    // 5
    // 6