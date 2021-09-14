import fs from 'fs';
import stream from 'stream';
import util from 'util';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF-8');

// readableStream.on('data', (chunk) => {
// 	//console.log(chunk);
// 	data += chunk;
// });

// readableStream.on('end', () => {
// 	console.log(data);
// });

//escribiendo a salida (buffer) estandar del sistema
// process.stdout.write('Hola');
// process.stdout.write('que');
// process.stdout.write('tal');

class Mayus extends stream.Transform {
	constructor() {
		super();
	}

	_transform(chunk, codif, cb) {
		let chunkMayus = chunk.toString().toUpperCase();
		this.push(chunkMayus);
		cb();
	}
}
let mayus = new Mayus();
readableStream.pipe(mayus).pipe(process.stdout);
