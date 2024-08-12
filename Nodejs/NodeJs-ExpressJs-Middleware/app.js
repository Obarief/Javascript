const express = require('express');
const path = require('path');
const { title } = require('process');
const morgan = require('morgan')
const app = express();
const port = 3000;

// menggunakan middleware
// sebelum sebuah halamn di render maka jalankan middleware (middle tengah antara aplikasi dengan client)

app.set('view engine', 'ejs')

// jika tidak menambahkan ini maka asset tidak dapat dilihat oleh user, karena expressjs memiliki keamanan agar data asset tidak sembarangan terlihat oleh user
app.use(express.static('public'));

// third-party middleware untuk melihat waktu response sesuatu
app.use(morgan('dev'))

// ini disebut middleware user-defined
app.use((req,res,next) => {
    console.log('Time : ', Date.now());
    // next digunakan untuk melanjutkan operasi setelah console.log diatas
    next();
})


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