console.log ("CON UN FOR")

function imprimiendo (numMenor, numMayor, intervalo){
for (let i= numMenor; i<=numMayor; i+=intervalo){

console.log (i);

}

}
imprimiendo (5,9,1);

console.log ("CON UN WHILE")

function imprimiendo2 (numMenor, numMayor, intervalo){
    let i = numMenor
    while (i<=numMayor) {
    console.log (i)
    i+=intervalo;
    }
}
   imprimiendo2 (5,9,1);
