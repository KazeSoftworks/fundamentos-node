const asincrona = (callback) => {
	setTimeout(() => {
		try {
			let a = 3 + z;
			callback(null, a);
		} catch (e) {
			callback(e, null);
		}
	}, 1000);
};

//!! Esto no funciona ya que el try y catch es para funciones sincronas, usa el patron error first callback!
// try {
// 	asincrona((err, dato) => {
// 		if (err) {
// 			//console.error('Tenemos un error');
// 			//console.error(err);
// 			throw err;
// 			//return false;
// 		}
// 		console.log('Todo es correcto, el dato es: ', dato);
// 	});
// } catch (e) {
// 	console.error('Error capturado');
// 	console.error(e);
// }

asincrona((err, dato) => {
	if (err) {
		console.error('Tenemos un error');
		console.error(err);
		//throw err;
		return false;
	}
	console.log('Todo es correcto, el dato es: ', dato);
});
