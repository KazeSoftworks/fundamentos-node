//Process es un modulo global, asi que no requiere de imports
//const process = require("process")

process.on("beforeExit", () => {
    console.log("El proceso va a acabar");
});

process.on("exit", () => {
    console.log("El proceso ha acabado");
    setTimeout(() => {
        console.log("Esto no sale ya que en EXIT se desconecta del event loop");
    }, 0);
});

setTimeout(() => {
    console.log("Esto si se ve porque anda en hilo principal");
}, 0);

process.on("uncaughtException", (err, origin) => {
    console.error("Se ha capturado un error");
    console.error(err);
    setTimeout(() => {
        console.log("Este se ve porque el hilo no cierra");
    }, 0);
});

process.on("unhandledRejection", () => {
    console.error("No se ha capturado un error");
});

functionQueNoExiste();
console.log("Prueba de continuidad, esto no aparece");
