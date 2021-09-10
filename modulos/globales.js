//Global son funciones que funcionan de manera global
console.log(global);
//setInterval
//setTimeout

let i = 0;
let intervalo = setInterval(() => {
    i++;
    console.log("Test de Interval");
    if (i === 3) {
        clearInterval(intervalo);
        console.log("Intervalo limpiado");
    }
}, 10);

setImmediate(() => {
    console.log("Inmediato!");
});

//requiere() para acceder modulos

console.log(__dirname);
console.log(__filename);

//No usar variables globales a menos que sea estrictamente necesario!
//Ejemplo de mal uso de global:
global.miVariable = "Variable global";
console.log(miVariable);
