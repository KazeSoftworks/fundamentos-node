console.log("Algo");
console.warn("Precaucion");
console.error("Error");

var tabla = [
    {
        a: 1,
        b: "z",
    },
    {
        a: 2,
        b: "E",
    },
];

console.log(tabla);
console.table(tabla);

//Explicacion de console group
console.group("conver");
console.log("Conversacion:");
console.log("Hola");
console.group("bla");
console.log("Bla bla");
console.log("Bla bla");
console.log("Bla bla");
console.groupEnd("bla");
console.log("Adios");
console.groupEnd("conver");

console.log("Otra cosa");

const foo1 = () => {
    console.group("Funcion 1");
    console.log("Esto es foo1");
    console.log("Esto tambien");
    foo2();
    console.log("Sigue siendo foo1");
    console.groupEnd("Funcion 1");
};

const foo2 = () => {
    console.group("Funcion 2");
    console.log("Esto es funcion 2");
    console.groupEnd("Funcion 2");
};

console.log("Empezamos");
foo1();

//Count para contar una salida de consola cuantas veces ha pasado
console.count("Veces que pasa algo");
console.count("Veces que pasa algo");
console.count("Veces que pasa algo");
console.countReset("Veces que pasa algo");
console.count("Veces que pasa algo");
