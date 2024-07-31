const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(newAngka)
//0 itu default bisa diganti dan totalnya bisa berubah (berada di awal sebuah elemen)
//accumulator adalah angka hasil dari penjumlahan sebelumnya
//currentValue adalah angka yang sedang di proses

//mencari angka lebih besar dari 5, kalikan 3 lalu jumlahkan
chaining = berantai
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// menggunakan arrow function dan implisit argumen
const hasil = angka.filter(a => a > 5) // mencari angka diatas 5
    .map(a => a * 3) // di kali 3
    .map(a => a + 2) // ditambah 2
    .reduce((acc, curr) => acc + curr) // menambahkan dari operasi terakhirnya

console.log(hasil) // print hasil