console.log("CON EL FOR")
function imprimir (max){
for(let i=0; i<max; i++){
    if (i % 3 == 0 && i % 5 != 0){
    console.log(i);
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log(i);
    }
}
}
imprimir (20);

console.log("CON EL WHILE")
function imprimirWhile (max){
let i = 0;
    while (i<max){
        if (i % 3 === 0 && i % 5 != 0){
            console.log(i);
            } else if (i % 5 === 0 && i % 3 != 0) {
                console.log(i);
            }
     i++;
    }
      
    }
    imprimirWhile (20);