// antes escribiamos asi
function newFunction(name, age, country) {
  var name = name || 'Dario';
  var age = age || 52;
  var country = country || 'AR';
  console.log(name, age, country);
}

//Ahora con ES6
function newFunction2(name = 'Dario', age = 52, country = 'AR') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'CO');

// Template literals
let hello = "Hello";
let world = "World";

let epicPharse = hello + ' ' + world;
console.log(epicPharse);

let epicPharse2 = `${hello} ${world}`;
console.log(epicPharse2);

// Multilinea de antes
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. \n" + "otra frase epica que necesitamos.";

// Multilinea con ES6
let lorem2 = `Una frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

// Destructura de elementos
let persona = {
  'nombre': 'Dario',
  'age': 52,
  'country': 'AR'
}

console.log(persona.nombre, persona.age, persona.country);

// Destructura con ES6
let {nombre,age,country} = persona;
console.log(nombre, age, country)
console.log(nombre);


// operador de propagacion para expandir varios elementos
let team1 = ['Oscar','Daniela','Dario'];
let team2 = ['Valeria','Yesica','Camila'];


let education = ['David', ...team1, ...team2];

console.log(education);

// antes utilzabamos var para ser global;
// let es para el scope.

{
  var globalVar = "Global Var"
}

{
  let globalLet = 'Global Let'
  console.log (globalLet);
}

console.log(globalVar);
console.log(globalLet); // globalLet no esta definido, solo en su scope.

const a = 'b'; // una constante que no cambia su valor.
a = 'a'; //va dar error, nunca va cambiar la variable a de su valor 'b'

console.log(a);

/* Propiedad de objetos mejorada */

// antes haciamos asi
let name = 'Oscar';
let age = 32;

obj = { name: name, age: age};

console.log(obj);

// ahora con ES6
obj2 = {name, age};
console.log(obj2);

/** Las arrow function
 * son funciones anonimas
 * 
 * const nombreVariable = () => {  };
 */
const names = [
  {name: 'Daniela', age: 41},
  {name: 'Dario', age: 52}
]

// antes era asi
let listOfNames = names.map(function (item){   // esta es una funcion anonima
  console.log(item.name);
})

// pero ahora las funciones anonimas, con arrow function.

let listOfNames2 = name.map(item => console.log (item.name));

const listOfNames3 = (name,age,country) => {
  ...
}

const listOfNames4 = name => {
  ...
}

const square = num => num * num;


/** Video 4 -Arrow function, Promesas y Parámetros en objetos
 * Ahora viene algo mas interante
 * que son las promesas
 * con las cuales vamos a trabajar
 * el asincronico
  */

const helloPromise = () =>{
  return new Promise((resolve, reject)=> {
    if (true){
      resolve ("Siiii Funciona");
    } else {
      reject ('Ups!!! fallo');
    }
  });
};

helloPromise()
  .then(response => console.log (response) )
  .catch(error => console.log(error));

  // tambien podria tener mas cantidad de then !!!
  helloPromise()
  .then(response => console.log (response) )
  .then(()=> console.log ('Hola'))
  .catch(error => console.log(error));


/** Video 05 Clases, Módulos y Generadores
 * 
 */

class calculator {
  constructor(){
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB){
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2,2));

import { hello} from './module';

hello();

function* helloWorld() {
  if (true){
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);