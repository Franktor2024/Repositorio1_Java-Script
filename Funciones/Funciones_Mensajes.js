//*****************************************/
// CREACIÓN DE LA PRIMERA FUNCIÓN
//*****************************************/

function Mensaje1 (nombre) {
// declaración de variable
let msg = "Hola, " + nombre + " " + "¿Cómo estas?";
return msg
}
// Llamar a la función
console.log (Mensaje1("Mundo"));

//*****************************************/
// CREACIÓN DE LA SEGUNDA FUNCIÓN
//*****************************************/
function Mensaje2 (nombre , saludo) {
    // declaración de variable
    return (nombre + saludo);
    }
    // Llamar a la función
    console.log (Mensaje2("Olvincita "," ¿cómo estas?"));

//*****************************************/
    // CREACIÓN DE LA TERCERA FUNCIÓN
//*****************************************/

function Mensaje3 (nombre , saludo) {
    // declaración de variable
    return (nombre + saludo);
    }
    // Llamar a la función
    console.log (Mensaje3("Olvin "," ¿cómo estas?"));

//*****************************************/
    // CREACIÓN DE LA CUARTA FUNCIÓN
//*****************************************/
function Mensaje4 (nombre1 , saludo1){
    console.log(nombre1 + saludo1);

}
let nombre1 = "Kenyel, ";
let saludo1 = "Olvin te manda saludos";
Mensaje4 (nombre1, saludo1);