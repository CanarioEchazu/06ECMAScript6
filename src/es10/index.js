let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

/** 
 * flatMap
 */

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

let holas = '     hello world';
console.log(holas);
console.log(holas.trimStart());

let holas = 'hello World     ';
console.log(holas);
console.log (holas.trimEnd());

/** pasar en forma opcional el valor catch  */

try {

} catch {
  error
}

/** empty entries  */

let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);

