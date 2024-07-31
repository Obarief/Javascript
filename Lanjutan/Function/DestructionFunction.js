// Destructuring
// digunakan untuk memecah sebuah array atau object menjadi 1 per 1 dengan variabel yang berbeda

// function jumlahPerkalian(a,b){
//     return [a + b, a * b];
// }

// const [jumlah, kali = 'tidak ada'] = jumlahPerkalian(2,3);
// // jumlah dan kali menginisialisasikan sebagai return value pada function sebelumnya dan harus urut
// // 'tidak ada' adalah nilai default yang dapat kita kostumisasi dengan teks yang lain sebagai output pengganti bila variabel tidak ada atau undefined

// console.log(jumlah)
// console.log(kali)


// jika tidak mau berurutan gunakan return value object
// distruction return value
// function kalkulasi(a,b){
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     };
// };

// const {kurang, kali, bagi, tambah} = kalkulasi(2,3);
// console.log(kurang);


// distruction function arguments
// nested object
const mhs1 = {
    nama: 'okta',
    umur: 20,
    email: 'oktavariba@gmail.com',
    nilai: {
        tugas: 90,
        uts: 90,
        uas: 90
    }
};

function cetakMhs1({nama, umur, email, nilai: {tugas, uts, uas}}){
    return `halo, nama saya ${nama}, umur saya ${umur}, dan email saya ${email}, lalu nilai saya ${uas}`;
}

console.log(cetakMhs1(mhs1)); // parameter yang digunakan langsung mengarah ke object, karena dalam parameter function di atas adalah property dari object


