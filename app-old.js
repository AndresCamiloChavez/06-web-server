const http = require('http');

http.createServer((req, res) => {

    console.log('valor de la request', req.headers);
    // res.writeHead(404); // respondiendo un status 404
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv'); // le avisa al navegador que es un archivo que se va a descargar y que ese es el nombre
    // res.writeHead(200, {'content-type': 'application/csv'});

    // res.write('id, nombre\n');
    // res.write('1, Andres\n');
    // res.write('2, Pedro\n');
    // res.write('3, Juan\n');
    // res.write('4, Camilo\n');
    // res.write('5, Ivan\n');
    
    
    
    
    // -- retornar un JSON
    // res.writeHead(200, {'content-type': 'json'});
    // let persona = {
    //     nombre: 'Andres',
    //     apellido: 'Chavez'
    // }
    // res.write(JSON.stringify(persona));


    res.write(`<h1>Hola Mundo<h1><hr>`);
    res.end();
}).listen(8080);
console.log('Escuchando en el puerto 8080');
