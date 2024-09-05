// Rest Parameter

// menangkap banyak argumen pada function menjadi array dengan jumlah yang tidak terbatas
// function act(a, ...args){
//     // return a, args;
//     // return args;
//     // return Array.from(args);
//     return [...arguments] // penyimpanan default pada function untuk isi dari argumen
// }

// console.log(act(1,2,3,4,5)) // args menampilkan sisanya dari sebuah argumen pada function


// function jumlah (...angka){
//     return angka.reduce((a, b) => a + b);
// }

// console.log(jumlah(1,2,3,4,5))

// array destructuring

// const klmpk = {
//     kelompok1: ['okta','ucup','mamank','bibin','burya','axel'],
//     kelompok2: ['yasin','jay','dimas','erik']
// };

// const {kelompok1: [ketua, wakilKetua, ...anggota]} = klmpk;

// console.log(ketua, wakilKetua, anggota.join(' '));


function filterDari(type, ...values){
    return values.filter(v => typeof v === type) // typeof mengembalikan nilai tipedatanya menjadi sebuah string, oleh karena itu jika tipedatanya sesuai dengan string yang diinputkan yaitu number/boolean/string maka outputnya sesuai dengan tipedata dari teks tersebut

    // kesimpulannya typeof mengembalikan sebuah string yang sesuai diantara lain (number/boolean/string)
}

console.log(filterDari('number',1,2,'okta', true, false, 10, 'B'))
