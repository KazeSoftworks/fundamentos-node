//Guarda bytes hexadecimales
//let buffer = Buffer.alloc(4);
//let buffer = Buffer.from([1, 2, 5]);
//console.log(buffer);

// let buffer = Buffer.from('Hola');

// console.log(buffer);
// console.log(buffer.toString());

// - -

let abc = Buffer.alloc(26);
//console.log(abc);

for (let i = 0; i < 26; i++) {
	abc[i] = i + 97;
}
console.log(abc);
console.log(abc.toString());
