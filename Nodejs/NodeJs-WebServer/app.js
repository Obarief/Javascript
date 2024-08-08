const http = require('http'); // diambil dari core module nodejs
const fs = require('fs')
const port = 4000; // mengapa harus port 3000 ? karena biasanya port dibawahnya 1 - 2999 biasanya sudah terpakai, sehingga dijadikan 3000 menjadi standart untuk membuat port untuk web server


// statis //
const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err){
            res.writeHead(404);
            res.write('Error: File Not Found!');
        }else{
            res.write(data);
        }
        res.end();
    })
}

http
    .createServer((req, res) => { // mengembalikan nilai request dan response
        res.writeHead(200, { // 200 dalam status code standart artinya ok (berjalan lancar)
            'Content-Type': 'text/html' // mendefinisikan bahwa teks yg ditulis berupa html
        });

        const url = req.url // akan mengembalikan nilai dibelakang port (/about atau /contact dll) (re.url = bagian dari http (core module nodejs))
        if(url === '/about'){
            res.write('<h1>Halo dunia h1</h1>');
            res.end();
        }else if(url === '/contact'){
            res.write('<p>lorem ipsum dolor sit amet akakakakkakakaka</p>');
            res.end();
        }else{

            switch(url){
                case '/about':
                    renderHTML('./about', res);
                    break;
                case '/contact':
                    renderHTML('./contact', res);
                    break;
                default:
                    renderHTML('./index.html', res);
                    break;
            }
            // res.write('halo dunia'); // ini akan ditampilkan pada halaman web ketika bukan about atau contact
            // res.end(); // res.end() digunakan agar response bisa menutup tanpa menunggu inputan dari client (dapat meload data dengan sempurna)
        }

    })
    .listen(port, () => { // mendengarkan/menyoroti pada port yang telah ditentukan
        console.log(`listen on localhost:${port}`); // ini akan ditampilkan dalam CLI
    })