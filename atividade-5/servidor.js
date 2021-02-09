const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {
	const decodedURL = decodeURI(req.url);

	if (decodedURL.indexOf('/minha-rota') > -1) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Ola! Voce acessou minha rota :)!');
    } else if (decodedURL.indexOf('/meu-html') > -1) {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        fs.readFile('index.html',(_,html) => { res.end(html) });
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Ola! Voce acessou outra rota!');
    }
}

const server = http.createServer(requestListener);

server.listen(3000, function() { console.log("Listening on port 3000")});