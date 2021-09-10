//requireJS

//import fs from "fs"; //Alternativa ES6
const fs = require("fs");
const leer = (ruta, callback) => {
    fs.readFile(ruta, (err, data) => {
        callback(data.toString());
    });
};
leer(__dirname + "/archivo.txt", console.log);

const escribir = (ruta, contenido, callback) => {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.error("No se pudo escribir el archivo " + err);
        } else {
            console.log("Se ha escrito el archivo");
        }
    });
};

//escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log);

const borrar = (ruta, callback) => {
    fs.unlink(ruta, callback);
};

borrar(__dirname + "/archivo1.txt", console.log);
