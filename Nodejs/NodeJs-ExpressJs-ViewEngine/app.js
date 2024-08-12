const express = require('express');
const path = require('path');
const { title } = require('process');
const app = express();
const port = 3000;

// menggunakan EJS
// membantu nodejs dalam me-render halaman webnya menggunakan templating ejs

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Budi',
            email: 'budi@gmail.com'
        },
        {
            nama: 'rizal',
            email: 'rizal@gmail.com'
        },
        {
            nama: 'gion',
            email: 'gion@gmail.com'
        }
    ]


    res.render('index', { 
        nama: 'Oktavari Budi Arief', 
        title: 'Home',
        mahasiswa,
    })
})

app.get('/about',(req,res) => {
    res.render('about');
});

app.get('/contact',(req,res) => {
    res.render('contact');
});

app.use('/',(req,res) => {
    res.status(404);
    res.send('404');
});

app.listen(port, () => {
    console.log(`Sudah Menyala Servernya Pada Port: ${port}`);
});