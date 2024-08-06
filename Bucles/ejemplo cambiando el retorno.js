// these two do the exact same thing!
function forLoopDoubler (array) {
    // it is convention to shorten index to just i in most cases
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i] * 2;
      
    }
    return array;
  };
  console.log("Los resultados son: " + forLoopDoubler([1, 2, 3])); // => [2,4,6]
