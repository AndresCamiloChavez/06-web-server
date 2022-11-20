const express = require('express');
const hbs = require('hbs');
const app = express();
require('dotenv').config()

//middleware una función que se ejecuta antes de hacer otra cosa
//Servir contenido estatico
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'));


app.get('/', (req, res) =>{
    res.render('home', {
        nombre: 'Andres',
        titulo: 'Curso de Node'
    });
});


app.get('/generic', (req, res) =>{
    // res.sendFile(__dirname+'/public/generic.html');
    res.render('generic', {
        nombre: 'Andres',
        titulo: 'Curso de Node'
    });

});

app.get('/elements', (req, res) =>{
    res.render('elements', {
        nombre: 'Andres',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) =>{
    res.statusCode = 404;
    res.sendFile(__dirname+'/public/404.html'); // dirname es donde se encuentra la aplicación
});


app.listen(process.env.PORT, ()=>{
    console.log('Corriendo en ', process.env.PORT);

});