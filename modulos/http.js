const http = require('http');

const router = (request, response) => {
	console.log('Nueva peticion');
	console.log(request.url);

	switch (request.url) {
		case '/hola':
			let saludo = hola();
			response.writeHead(201, { 'Content-Type': 'text/plain' });
			response.write(saludo);
			response.end();
			break;
		default:
			response.writeHead(404, { 'Content-Type': 'text/plain' });
			response.write('Error 404');
			response.end();
	}

	//Escribir respuesta al usuario
	// response.writeHead(201, { "Content-Type": "text/plain" });
	// response.write("HTTP en NodeJS");

	response.end();
};

http
	.createServer((request, response) => {
		router(request, response);
	})
	.listen(3000);

function hola() {
	return 'Hola que tal';
}

console.log('Escuchando http en el puerto 3000');
