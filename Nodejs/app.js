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


// readline 
// sinkronus
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin, // data yang akan di masukkan ke command prompt
//     output: process.stdout, // data yang akan dikirim dari command prompt
// });

// rl.question('masukkan nama anda : ', (nama) => { // callback function digunakan untuk menampung data yang akan di inputkan
//     rl.question('masukkan nim anda : ', (nim) => {
        
//         console.log(`terimakasih ${nama} sudah mengisi data, dan ini nim anda ${nim}`);
//         rl.close();
//     });
// });


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('masukkan nama anda: ', (nama) => {
    rl.question('masukkan nim anda: ', (nim) => {
        
        // membaca data
        const contact = { nama, nim }; // menjadikan data menjadi object
        const file = fs.readFileSync('data/contact.json', 'utf-8'); // karena bentuknya string maka pada file jsonnya berikan [] agar terbacanya array (karena tidak boleh kosong)
        const contacts = JSON.parse(file)// mengubah string menjadi json
        contacts.push(contact) // karena push maka file akan ditambahkan dibelakangnya bukan menimpa yang lama
        

        // masukan data ke file
        fs.writeFileSync('data/contact.json', JSON.stringify(contacts, null, 2)); // strigify merubah json menjadi string, karena dalam witefilesync harus dalam bentuk string


        console.log('terimakasih sudah memasukkan data')
        rl.close();
    });
});