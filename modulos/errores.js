const { callbackify } = require("util");

const otraFuncion = () => {
    bugFoo();
};

const bugFoo = () => {
    return 3 + z;
};

const seRompeAsync = (callback) => {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (err) {
            console.error("Error en funcion asincrona");
            callback(err);
        }
    }, 1000);
};
try {
    //otraFuncion();
    seRompeAsync(console.log); //Se rompe porque el error se encuentra en otro hilo
} catch (err) {
    console.error("Ha habido un error " + err);
}

console.log("Esto se ejecuta luego del error");
