let saludo = process.env.NOMBRE || "sin nombre"
let web = process.env.WEB || "No hay web"

console.log(`Hola ${saludo}, mi web es: ${web}`)