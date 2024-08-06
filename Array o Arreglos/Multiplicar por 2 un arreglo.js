console.log ("CON EL FOR")

function doblar (numeros){
let dobledelNumero = [];
let primernumero = numeros
for (let i = 0; i<numeros.length; i+=1){
 dobledelNumero [i] = primernumero[i] * 2;
}
return dobledelNumero;

}
console.log (doblar([4,2,9,10]));


console.log ("CON EL WHILE")

function doblar2 (numeros){


    let dobledelNumero2 = [];
    let primernumero = numeros
    let i = 0;
    while (i<numeros.length) {
        dobledelNumero2 [i] = primernumero[i] * 2;
        i++;
    }
    return dobledelNumero2;  
    }
     
    console.log (doblar2([4,2,9,10]));