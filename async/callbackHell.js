const hola = (nombre, miCallback) => {
    setTimeout(() => {
        console.log("Hola " + nombre);
        miCallback();
    }, 1000);
};

const hablar = (callbackHablar) => {
    setTimeout(() => {
        console.log("Bla bla bla bla");
        callbackHablar();
    }, 1000);
};

const adios = (nombre) => {
    setTimeout(() => {
        console.log("Adios, " + nombre);
    }, 1000);
};

const conversacion = (nombre, veces, callback) => {
    if (veces > 0) {
        hablar(() => {
            conversacion(nombre, --veces, callback);
        });
    } else {
        callback(nombre);
    }
};
//-
console.log("Iniciando proceso");

const nombre = "Pedro";
hola(nombre, () => {
    conversacion(nombre, 5, adios);
});

// hola("Pedro", () => {
//     hablar(() => {
//         hablar(() => {
//             adios("Pedro", () => {
//                 console.log("TErminando el proceso");
//             });
//         });
//     });
// });
