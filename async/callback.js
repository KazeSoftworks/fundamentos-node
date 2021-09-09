const hola = (nombre, miCallback) => {
    setTimeout(() => {
        console.log("Hola " + nombre);
        miCallback();
    }, 1500);
};

const adios = (nombre, otroCallback) => {
    setTimeout(() => {
        console.log("Adios, " + nombre);
        otroCallback();
    }, 1000);
};

console.log("Iniciando proceso");

hola("Pedro", () => {
    adios("Pedro", () => {
        console.log("TErminando el proceso");
    });
});
