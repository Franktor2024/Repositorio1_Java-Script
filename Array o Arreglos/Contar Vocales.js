function contarVocales (palabras){
let palabra = palabras.toLowerCase();
let arreglo = palabra;
let contador = 0;
let i = 0;
while (i<arreglo.length) {
if (arreglo [i]=== "a"||arreglo [i]=== "e"||arreglo [i]=== "i"||arreglo [i]=== "u"||arreglo [i]=== "o"){
contador++;
}
i++;
}
return contador;
};
console.log(contarVocales("Olvincita"));


console.log ("CON UN ARREGLO DE VOCALES")

function contadordeVocales(word) {
    let lowerletter = word.toLowerCase ();
    let arrayString = lowerletter;
    let contadorvocales = 0;
    let listavocales = ["a","e","i","o","u"];
    let i = 0;
    while (i < arrayString.length){
        for (let j; arrayString[i] === listavocales[j]; j++) {
            contadorvocales ++;
        }
        i ++;
    }
    return contadorvocales;
  };
    console.log(contarVocales("Olvincita"));