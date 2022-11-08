/** Video 9 - ES9 - Spread Operator */

// Spread Operator
const obj= {
    nombre: 'Dario',
    age: 52,
    country: 'AR',
};

let {nombre, ...all} = obj;
console.log(all); // {age: 52, country: "AR"} toma todos los datos menos el nombre

const obj1 = {
    nombre: 'Dario',
    age: 52,
}

const obj3  = {
    pais: 'AR',
};

// si queremos unir, seria asi de facil

const obj4 ={
    ...obj1,
    pais: 'AR', // si queremos agregar mas datos a la copia o union
                // ...obj3,
};

console.log(obj4); // {nombre: "Dario", age: 52, pais: "AR"}

/**
 * Promise.finally
 */

const hollaMundo = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve ('Hola Mundo')
        : reject (new Error ('Test Error'));
        });
};

hollaMundo()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo')); // Finalizo

/** Tambien podemos poner con demora de respuestas */

const hollaMundo = () => {
    console.log ('Comienza la promesa');
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(()  => resolve ('Hola Mundo'), 1000)
        : reject (new Error ('Test Error'));
        });
};

hollaMundo()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo')); // Finalizo

/**
 * agrupar bloques de regex
 */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day); // 2018 04 20