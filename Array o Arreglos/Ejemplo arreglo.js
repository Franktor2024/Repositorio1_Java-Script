console.log([4, 7, 9].length); // => 3
console.log([4, 7, 9][3-1]); // => undefined
console.log([4, 7, 9][2]); // => 9

let arr = [1, 2, 3];
arr.push(8);
arr.push(5);
console.log(arr);   // => [1, 2, 3, 4, 5]
arr.pop(arr.indexOf(0));
console.log(arr);   // => [1, 2, 3, 4]