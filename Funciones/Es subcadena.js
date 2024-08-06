function esSubcadena(buscarCadena, subCadena) {
    let lowerbuscarCadena = buscarCadena.toLowerCase();
    let lowersubCadena = subCadena.toLowerCase();
    // La condición se asigna el -1 porque indentifica si la cadena está fuera del rango del index a partir de 0
    // Lo que indica que no fue encontrada.
  if (lowerbuscarCadena.indexOf(lowersubCadena) > -1){
    let resultadosicumple = "true";
    return resultadosicumple;
    }
  else {
    let resultadosinoCumple = "False";
    return resultadosinoCumple 
  }
    //return lowerbuscarCadena.indexOf(lowersubCadena) !== -1;
  }
  
  console.log(esSubcadena("The cat went to the store", "he cat went")); // => true
  console.log(esSubcadena("Time to program", "time")); // => true
  console.log(esSubcadena("Jump for joy", "joys")); // => false