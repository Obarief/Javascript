// function
function cetakNama(n){
    return `halo nama saya ${n}`
}

// variabel
const PI = 3.14;

// object
const mahasiswa = {
    nama: 'okta',
    umur: 20,
    cetakMhs(){
        return `nama saya ${this.nama} dan umur saya ${this.umur} tahun.`
    }
}

// class
class Orang { // aturan dalam pembuatan kelas itu huruf besar
    constructor(){ // constructor adalah ketika class orang diinstansiasi maka jalankan ......
        console.log('objek orang telah dibuat')
    }
}



// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI
// module.exports.mahasiswa = mahasiswa
// module.exports.Orang = Orang

// .PI dan .cetakNama bisa bebas namanya namun untuk agar tidak membingungkan maka samakan saja

// kita bisa mengeksport tidak dengan berulang kali seperti diatas dengan cara menjdikan object
// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// };

// untuk lebih simple lagi jika nama key dan valuesnya sama maka tulis sekali saja (ES6)
module.exports = {cetakNama, PI, mahasiswa, Orang};