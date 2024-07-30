//THIS PADA ARROW FUNCTION
//intinya :
//- arrow function tdk memakai konsep this dan variabelny akan di telusuri lgi di lokal parent trdkt 
//- declaration function memakai konsep this tpi bila variabelny  yg dicri tdk ad dlm localnya maka lngsng di telesuri di window
//- expression function memakai konsep this tpi bila variabel yg dicri tdk dlm local maka, ditelusuri lgi ke lokal parent trdkt

const Mahasiswa = function (){
    this.nama = 'okta';
    this.umur = 20;
    this.salam = () => { 
        console.log(`halo nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`)
    }
}

const okta = new Mahasiswa();


//penggunaan implisit return
let jumlhhuruf = mahasiswa.map( nama => nama.length)
console.table(jumlhhuruf)

//penggunaan simpel dan modifikasi ke object
//untuk menjadikan object harus di tambahkan "({})" () = sebagai penanda ada sesuatu didalamnya {} = diguankan untuk menjadikan output sebuah object
//mengembalikan object dan valuenya sama maka tulis 1 saja seperti contoh (nama) 
let jmlhhuruf = mahasiswa.map(nama => ({ nama, jmlhhuruf: nama.length}))
console.log(jmlhhuruf)


// function expresion
const greeting = function (nama){
    return `halo ${nama}`;
}

console.log(greeting('okta'));

// arrow function
const salam = (nama, waktu) => {
    return `halo ${nama}, selamat ${waktu}`;
}

console.log(salam('okta', 'malam'))

//implisit return hanya baris return saja)
//jika 1 parameter saja maka tidak pakai kurung
//  const salam = nama => `selamat belajar ${nama}`;
console.log(salam('okta'))

// tidak ada parameter harus menggunakan () sebagai penanda bahwa itu adalah function
//  const greeting = () => 'halo dunia'
console.log(greeting())

//pemetaan function dengan map()
let mahasiswa = ['oktavari budi arief', 'arie kriting', 'yasin dzikrillah'];


//penggunaan manual
//  let jmlhhuruf = mahasiswa.map(function(nama){
    return nama.length;
//})

console.table(jmlhhuruf)