// framework dari javascript
// mendukung MERN, MEAN, MEVN

// fitur 
// menangani request dalam http (get, post dll) restapi
// mvc
// templating engine
// middleware

// kelebihan
// flexibel
// bongkar pasang middleware~

// root = titik awal pencarian
// route = tujuan

// request = req = apa yang dikirim ke expressjs
// response = res = apa yang dikirim dari expressjs

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    // res.send('Hello World :D');
    
    
    
    // .sendfile() digunakan untuk membaca file dengan ketentuan ('nama filenya', {root: path.join.....}) root: path.join digunakan untuk menentukan pada path mana file tersebut berada 
    res.sendFile('index.html', { root: path.join(__dirname, 'view') })

    // terdapat method .json() untuk membaca json dengan menuliskan sebagai object karena bedanya json dengan object adalah tidak memiliki kutip 2 ""
    // res.json({
    //     nama: 'oktavari',
    //     umur: 20,
    //     nomorHP: '081383966520'
    // })
});

app.get('/about',(req,res) => {
    // res.send('Ini halaman about');
    res.sendFile('./about.html', { root: __dirname })
});

app.get('/contact',(req,res) => {
    // res.send('Ini halaman contact');
    res.sendFile('./contact.html', { root: __dirname })
});

// app.get('/product/:id/category/:idCat', (req, res) => {

//     // apa yang diminta(req) oleh kita ke pada server express ? yaitu parameter id dari product dan category
//     // res.send(`Product ID: ${req.params.id} <br> Category ID: ${req.params.idCat}`);

//     
    
// })



app.get('/product/:id', (req, res) => {
    // req.query untuk mengambil query yang dikirimkan dari klien ke server seperti untuk pencarian, pengisian form, dan mengirim parameter tambahan, penulisan req.query.category = request.query.dari category, pada urlnya = ?category=sepatu
    res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`);
});




// method .use() digunakan ketika halaman tidak ada/tidak terinisialisasi (dapat dijadikan alternatif bila tidak membuat suatu page, namun sebaiknya dibuat juga untuk ppemberitahuan page not found-nya) *use ini tidak boleh di letakkan diatas apapun saat memakai .get() dikarenakan halaman pada yg telah di inisialisasi akan tertutup jalannya sehingga tidak dapat diakses (seperti if else namun baris menentukan)
app.use('/',(req,res) => {
    res.status(404);
    res.send('404');
});

app.listen(port, () => {
    console.log(`Sudah Menyala Servernya Pada Port: ${port}`);
});



// const http = require('http'); // diambil dari core module nodejs
// const fs = require('fs')
// const port = 4000; // mengapa harus port 3000 ? karena biasanya port dibawahnya 1 - 2999 biasanya sudah terpakai, sehingga dijadikan 3000 menjadi standart untuk membuat port untuk web server


// // statis //
// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err){
//             res.writeHead(404);
//             res.write('Error: File Not Found!');
//         }else{
//             res.write(data);
//         }
//         res.end();
//     })
// }

// http
//     .createServer((req, res) => { // mengembalikan nilai request dan response
//         res.writeHead(200, { // 200 dalam status code standart artinya ok (berjalan lancar)
//             'Content-Type': 'text/html' // mendefinisikan bahwa teks yg ditulis berupa html
//         });

//         const url = req.url // akan mengembalikan nilai dibelakang port (/about atau /contact dll) (re.url = bagian dari http (core module nodejs))
//         if(url === '/about'){
//             res.write('<h1>Halo dunia h1</h1>');
//             res.end();
//         }else if(url === '/contact'){
//             res.write('<p>lorem ipsum dolor sit amet akakakakkakakaka</p>');
//             res.end();
//         }else{

//             switch(url){
//                 case '/about':
//                     renderHTML('./about', res);
//                     break;
//                 case '/contact':
//                     renderHTML('./contact', res);
//                     break;
//                 default:
//                     renderHTML('./index.html', res);
//                     break;
//             }
//             // res.write('halo dunia'); // ini akan ditampilkan pada halaman web ketika bukan about atau contact
//             // res.end(); // res.end() digunakan agar response bisa menutup tanpa menunggu inputan dari client (dapat meload data dengan sempurna)
//         }

//     })
//     .listen(port, () => { // mendengarkan/menyoroti pada port yang telah ditentukan
//         console.log(`listen on localhost:${port}`); // ini akan ditampilkan dalam CLI
//     })