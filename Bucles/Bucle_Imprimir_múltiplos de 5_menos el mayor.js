console.log ("FUNCIÓN CON WHILE")

function multiplos (max) {
let i = 0
numero = max
while (i<numero){
        let resultado = (i * 5);
        if (resultado < max){
        console.log (resultado);
        }
        i++;
        }
}
multiplos(20);

console.log ("FUNCIÓN CON FOR")

function multiplos (max) {
numero = max
for (let i = 0; i<numero; i++){
        if (i % 5 === 0){
        console.log (i);
        }
        
        }
}
multiplos(20);
