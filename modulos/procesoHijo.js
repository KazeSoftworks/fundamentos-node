//import { exec } from "child_process"; //ES6 solo en modulos!
const { exec, spawn } = require("child_process");
const { DEFAULT_ENCODING } = require("crypto");

// exec("ls -la", (err, stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log(stdout);
// });

// exec("node modulos/consola.js", (err, stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log(stdout);
// });

let proceso = spawn("ls", ["-la"]);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", (dato) => {
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on("exit", () => {
    console.log("EL proceso ha terminado");
    console.log(proceso.killed);
});
