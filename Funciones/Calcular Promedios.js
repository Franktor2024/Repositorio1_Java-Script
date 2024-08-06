function calcularPromedios (numero1, numero2){
let suma = numero1 + numero2
    promedio = (numero1 + numero2)/2;
    console.log("Los números a calcularle el promedio son: " + numero1 + " y " + numero2 );
    console.log("Sumados son = " + suma);
    console.log("El promedio obtendido es = " + promedio)
return promedio;
}
console.log(calcularPromedios(8,24));