const hola = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1000);
    });
};

const hablar = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Bla bla bla bla");
            resolve(nombre);
            //reject("Error en hablar");
        }, 1500);
    });
};

const adios = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adios, " + nombre);
            resolve();
        }, 1000);
    });
};

const main = async () => {
    let name = await hola("Carlos");
    await hablar();
    hablar(); //Proceso de sincrono a asincro
    hablar();
    await hablar();
    await adios(name);
    console.log("Termina proceso");
};

console.log("Proceso empieza");
main();
console.log("Segunda instrucción");
