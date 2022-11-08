/** video 7 que se implemento en ES8 */

const data = {
    frontend: 'Dario',
    backend: 'Daniela',
    design: 'Nacho',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const datos = {
    frontend: 'Dario',
    backend: 'Daniela',
    design: 'Nacho',
};

const values = Object.values(datos);
console.log(values);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, '  -----'));

const obj = {
    name: 'Dario',
};

/* video 8 async await */

const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout (()=> resolve('Hello World'), 2000)
        : reject(new Error('Test Error'));
    })
}

const holaAsync = async () => {
    const hola = await helloWorld();
    console.log('Escribe antes');
    const hola2 = await helloWorld();
    console.log (hola);
    console.log (hola2);
};

holaAsync();

const otraFuncion = async () => {
    try {
        const hola = await helloWorld();
        console.log(hola);
    }
    catch (error){
        console.log(error);
    }
}

otraFuncion();