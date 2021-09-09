let saludo = process.env.NOMBRE || "sin nombre";
let web = process.env.WEB || "No hay web";

console.log(`Hola ${saludo}, mi web es: ${web}`);

console.log("Otra cosa...");
console.log("Agregamos otra cosa para el nodemon");
//nodemon ./archivo.js
//npx nodemon ./archivo.js en Windows!
