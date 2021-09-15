const puppeteer = require('puppeteer');

(async () => {
	console.log('lanzamos navegador');
	// const browser = await puppeteer.launch();
	const browser = await puppeteer.launch();

	const page = await browser.newPage();
	await page.goto('https://scp-wiki.wikidot.com/scp-033');

	var titulo = await page.evaluate(() => {
		const title = document.querySelector('title');
		console.log(title.innerHTML);
		return title.innerHTML;
	});

	var titulo1 = await page.evaluate(() => {
		const h1 = document.querySelector('h1');
		console.log(h1.innerHTML);
		return h1.innerHTML;
	});

	console.log(titulo);
	console.log('Cerramos navegador');
	browser.close();
	console.log('Navegardor cerrado');
})();
