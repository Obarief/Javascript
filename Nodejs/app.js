// core module 

// file system

const fs = require('fs')

// menulis file
// sinkronus
// untuk menangkap error dari kesalahan penulisan
// try{
//     fs.writeFileSync('data/test.txt', 'halo dunia fana~') // jika file txt tidak ada maka akan dibuat otomatis, jika sudah maka isinya akan di timpa/yang lama akan dihapus
// }catch(e){
//     console.log(e)
// }


// asinkronus
// fs.writeFile('data/text.txt', 'hello semuanya asinkronus', (e) => {
//     console.log(e)
// })

// membaca file
// sinkronus
// const data = fs.readFileSync('data/test.txt', 'utf-8'); // utf-8 agar file yang keluar/tampil adalah berupa bahasa latin (selain utf-8 ada string buffer dll)
// console.log(data)

//asinkronus
// fs.readFile('data/text.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data);// data inisialisasi dari fs.readfile tersebut (otomatis membaca data berarti fsnya)
// })


