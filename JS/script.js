

// var nama  = prompt('masukkan nama:');
// alert(nama);
// confirm('kamu yakin ini ' + nama + '?');

// ======================================================================================

// alert('selamat datang...');

// var greeting = true;

// while(greeting){
//     var nama = prompt('masukkan nama:');
//     alert('halo ' + nama);

//     greeting = confirm('coba lagi ?...');
// }

// alert('terimkasih :)');

// ======================================================================================

// alert('mulai');
// for (var i = 0; i < 5; i++){
//     alert('halo dunia');
// }
// alert('selesai');

// ======================================================================================

// var ulang = true;

// while( ulang ){
//     console.log('hello world');
//     ulang = confirm('lagi?');
// }


// var nilaiAwal = 1;

// while( nilaiAwal <= 5 ){
//     console.log('hello world');
//     nilaiAwal++;
// }

// var nilaiAwal = 1;

// while( nilaiAwal <= 10 ){
//     console.log('halo dunia ' + nilaiAwal + 'x');
//     nilaiAwal++;
// }

// var angkot = 1;
// var jumlah = 10;

// while( angkot <= jumlah ){
//     console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
// angkot++;
// }


// ======================================================================================

// var jumlah_angkot = 10;
// var angkot_beroperasi = 3;
// var no_angkot = 1; 

// while(no_angkot <= angkot_beroperasi){
//     console.log('Angkot No. ' + no_angkot + ' beroperasi dengan baik.');
// no_angkot++
// }

// for(no_angkot = angkot_beroperasi + 1; no_angkot <= jumlah_angkot; no_angkot++){
//     console.log('Angkot No. ' + no_angkot + ' sedang tidak beroperasi.');
// }


// ======================================================================================

// var jml_angkot = prompt('masukkan jumlah angkot: ');
// var angkot_beroperasi = prompt('masukkan angkot yang beroperasi: ');


// for(var no_angkot = 1; no_angkot <= jml_angkot; no_angkot++){
    
//     if(no_angkot <= angkot_beroperasi && no_angkot !== 5){
//         console.log('angkot no. ' + no_angkot + ' beroperasi dengan baik.');

//     }else if(no_angkot === 8 || no_angkot === 10 || no_angkot === 5) {
//         console.log('angkot no. ' + no_angkot + ' sedang lembur.');

//     }else{
//         console.log('angkot no. ' + no_angkot + ' sedang tidak beroperasi')
//     }

// }

// ======================================================================================


// var item = prompt('masukkan nama makanan dan minuman: \n (cth: nasi, daging, susu, burger, softdrink)')

// switch( item ){
//     case 'nasi' :
        
//     case 'daging' :
        
//     case 'susu' :
//         alert('makanan/minuman sehat ini mah');
//         break;

//     case 'burger' :
        
//     case 'softdrink' :
//         alert('makanan/minuman tidak sehat ini coy');
//         break;
//     default :
//         alert('data yang anda masukkan salah');
//         break;
// }

// ======================================================================================


// var bintang = ''

// for(var i = 0; i < 7; i++){
//     for(var j = 0; j < 10; j++){
//         bintang += '*'
//     }

//     bintang += '\n'
// }
// console.log(bintang)

// var bintang = ''

// for(var i = 0; i < 5; i++){
//         for(var j = 0; j < i; j++){
//             bintang += '*'
//         }
//     bintang += '\n'
// }

// console.log(bintang)

// // i menjadi jumlah baris kebawah
// // j menjadi jumlah banyaknya *

// // banyaknya bintang akan bertambah bersamaan dengan banyaknya baris


// var sharp = ''

// for(var i = 0; i < 10; i++){
//         for(var j = 0; j < 5; j++){
//             sharp += '# '; 
//         }
//     sharp += '\n';

//     if(i % 2 === 0){
//         sharp += ' ';
//     }
    
// }
// console.log(sharp)

// // if digunakan untuk print kosong saat mencetak baris genap

// ======================================================================================


// tebak angka 1 - 10

// tentukan computer pilih berapa

// ada 3 kesempatan, jika habis maka selesai

// var lagi = true;

// while( lagi ){
//     alert('Tebak angka dari 1 - 10!\n Kamu punya 3 kesempatan.')
//     var comp = Math.round(Math.random() * 10); // math.round digunakan untuk membulatkan angka randomnya


//     for(var i = 3; i > 0; i--){ // jika i lebih dari 0 maka kurangi 1 setiap perulangan
//         var p = prompt('Masukkan angka tebakan!');
//         j = i - 1; // inisialisasi j adalah i yang dikurang 1
//         if(p == ''){ // jika data yang di input kosong
//             alert('Yang anda masukkan bukan angka');
//             i = 0;
//         }else if(p == null){ // jika yang di input null
//             i = 0;
//         }else{
//             if(p == comp){ // jika data yang di input sama dengan computer
//                 alert('Anda Benar!\nAngka yang dicari ' + comp);
//                 i = 0;
//             }else if(p < comp){ // jika data yang di input terlalu rendah
//                 if(j == 0){// jika kesempatan habis maka 
//                     alert('Anda gagal!\n angka yang di pilih computer adalah ' + comp);
//                 }else{ // jika terlalu rendah maka jalankan ini
//                     alert('Terlalu rendah!\n Ayo masih ada ' + j + ' Kesempatan')
//                 }
//             }else if(p > comp){ // jika data yang di input terlalu tinggi
//                 if(j == 0){ // jika kesempatan habis maka 
//                     alert('Anda gagal!\n angka yang di pilih computer adalah ' + comp);
//                 }else{ // jika terlalu tinggi jalankan ini
//                     alert('Terlalu tinggi!\n Ayo masih ada ' + j + ' Kesempatan')
//                 }
//             }else{ // selain dari angka 1 - 10 maka 
//                 alert('yang anda masukkan bukan angka');
//                 i = 0;
//             }
//         }
//     }
//     lagi = confirm('Main lagi ?'); // comfirm apakah ingin main lagi ?
// }
// alert('Terimakasih sudah bermain :)'); // penutup jika player tidak ingin bermain lagi

// ======================================================================================

// var sisi = 8;
// var sisi2 = 3

// var hitung1 = sisi ** 3;
// var hitung2 = sisi2 ** 3;

// var jumlah = hitung1 + hitung2;

// console.log(jumlah)

// menjadi function dengan dibawah ini

// function jumlahVolumeDuaKubus(a,b){
//     var total, volumea, volumeb;

//     volumea = a ** 3;
//     volumeb = b ** 3;
//     total = volumea + volumeb;

//     return total;
// }

// console.log(jumlahVolumeDuaKubus(8, 3));
// console.log(jumlahVolumeDuaKubus(10, 15));

// ======================================================================================

// function penjumlahan(a,b){
//     return a + b;
// }

// var a = parseInt(prompt('Masukkan nilai 1 :'));
// var b = parseInt(prompt('Masukkan nilai 2 :'));
// var hasil = penjumlahan(a,b);
// console.log(hasil);

// ======================================================================================

// function tambah(a,b){
//     return a + b;
// }

// function kali(a,b){
//     return a * b;
// }

// var hasil = kali(tambah(1,2), tambah(3,4));
// console.log(hasil)

// ======================================================================================

// function tambah(){
//     var hasil = 0;
//     for(var i = 0; i < arguments.length; i++){
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// var coba = tambah(1,2,3,4);
// console.log(coba);


// function tiket(){
//     var jumlah = 0;
//     for(var i = 0; i < arguments.length; i++){
//         jumlah += arguments[i]; // contoh jumlah sudah sampai angka 5 lalu ditambah dengan argumen nya 5 dibaca dari arguments.lenght untuk melihat panjangnya arguments

//         //arguments.lenght = membaca berapa banyak value didalam arguments serta membaca berapa atau apa isinya misal string atau number
//     }
//     return jumlah;
// }
// var hasil = tiket(2,3,5);
// console.log(hasil);

// ======================================================================================

// function tambahKubus(){
//     var hasil = null; // untuk menampung hasil/jumlahnya
//     for(var i = 0; i < arguments.length; i++){
//         hasil = arguments[i] ** 3 + arguments[i] ** 3;
//     }
//     return hasil;
// }
// console.log(tambahKubus(2,3));

//refactoring
// function tambahKubus(a,b){
//     return a ** 3 + b ** 3;
// }
// var hasil = tambahKubus(prompt('Masukkan angka pertama:'),prompt('Masukkan angka kedua:'));

// console.log(hasil);

// ======================================================================================

// //scope 

//  var a = 1; //variabel scope global/window
// // var a; // ini terbuat otomatis namun tidak di tampilkan dalam kode jika kita memanggil yang di dalam function namun tidak ada var nya 
// function scope(){
//     // var a = 2; //variabel scope function
//     a = 2; // jika var tidak ada maka a akan ditimpa dengan 2 dari variabel global

// }

// scope()
// console.log(a) //dimaksud memanggil scope global bukan function


// var b = 1;

// function nyobaScope(){

//     var b = 2;

//     console.log(window.b); // akan mengambil dari scope lokal karena ada window. yang artinya ambil dari scope global/window yaitu variabel b
// }

// nyobaScope()

// PENTING : gunakan var selalu untuk membuat dalam scope lokal/function

// ======================================================================================

// rekursif = memanggil dirinya sendiri seperti loop

// function rekursif(n){
//     if( n === 0 ) return;

//     console.log(n);
//     rekursif(n-1)
// }
// rekursif(10);

// looping faktorial
// function faktorial(n){
//     var hasil = 1;
//     for(var i = n; i > 0; i--){
//         hasil *= i;
//     }
    
//     return hasil;
    
// }

// console.log(faktorial(10));

// rekursif faktorial
// function faktorial(n){
//     if( n === 0 ) return 1; // mengapa return 1 ? agar mengembalikan ketika nilai faktorial sampai di perkalian 1 dan n = 0.
//     return n * faktorial(n-1);
// }

// console.log(faktorial(10))

// ======================================================================================

// function ekspresion

// var sapaan = function(nama){
//     alert('halo ' + nama);
// }

// console.log(sapaan('okta'));


// ======================================================================================

// array

// var array = ['okta','yusuf',[4,5,6]];

// console.log(array[2][1]);

// // manipulasi array : menambah isi
// var array = [];
// array[0] = 'jancu';
// array[1] = 'okta';
// array[3] = 2;

// // manipulasi array : menghapus array
// var array2 = ['jancuk','okta',1,2,3];
// array2[1] = undefined;
// console.log(array2)

// menampilkan isi array
// var array = ['jancuk','okta',1,2,3,4];

// for(var i = 0; i < array.length; i++){
//     console.log('data ke-' + (i+1) + ' = ' + array[i]);
// }

// method pada array
// 1. join = merubah isi array menjadi string lalu menampilkan secara default
// var array = ['jancuk','okta',1,2,3,4];
// // console.log(array.join(' - ')) // - digunakan sebagai pemisahnya

// // 2. push dan pop = menambah dan menghapus isi terakhir dari array
// array.push('okelah')
// array.pop(); // okelah hilang karna pop ini


// // 3. unshift dan shift = menambah dan mengurangi isi pertama dari array
// array.unshift('baiklah');
// array.shift(); // baiklah hilang karena shift ini


// // 4. slice dan splice = mengambil dan menyisipkan ditengah atau dimana saja pada array
// // rumus .splice(indexmulai, hapusberapa, isiapa, isiapa2)
// array.splice(2, 4, 'eek', 'iik','uuk');

// var array2 = array.slice(1,3); // slice harus di tampung pada variabel baru agar bisa dipanggil

// console.log(array.join(' - ')); // array 1

// console.log(array2.join(' - ')); // array 2

// 5. forEach = melakukan perulangan for namun dengan syntax yang singkat

// var array = ['okta','dika','galuh'];

// array.forEach(function(a, b){ // a dijadikan sebagai isi dari array dan b dijadikan sebagai hitungan index-ke-
//     console.log('mahasiswa ke-' + (b+1) + ' adalah ' + a);
// })

// 6. map = sama seperti forEach namun dapat mengembalikan array
// var array = [1,2,3,4,5,6];
// var angka = array.map(function(a){ // ditampung dalam variabel angka
//     return a * 2; // dapat membuat operasi matematika
// })

// console.log(angka.join(' - '))

// 7. sort = mengurutkan isinya
// var array = [1,12,3,11,4,7,6];

// array.sort(function(a,b){
//     return a-b;// misal a = 1 dan b = 12 maka hasilnya -11 dan angka 12 tetap setelah 1, akan terus seperti itu sampai akhirnya terurut
// });
// console.log(array.join(' - '));

// 8. filter = menemukan banyak nilai
// var array = [1,12,3,11,4,7,6];

// var angka = array.filter(function(x){

//     array.sort(function(a,b){
//         return a-b;
//     })

//     return x > 3;
// })

// console.log(angka.join(' - '))

// 9. find = menemukan 1 nilai saja jadi tidak dapat menggunakan .join
// var array = [1,12,3,11,4,7,6];

// var angka = array.find(function(x){
    
//     array.sort(function(a,b){
//         return a-b;
//     })

//     return x < 12;
// })
// console.log(array.join(' - '))
// console.log(angka); // output bukan 11 dikarenakan dalam urutan array angka yg pertama lebih kecil dari 12 adalah 1

// ======================================================================================

// membuat program pengelola penumpang angkot
// var penumpang = [];
// var tambahPenumpang = function(namaPenumpang, penumpang){
//     // jika ada yang kosong 
//     if( penumpang.length == 0){
//         //  tambah penumpang di awal array
//         penumpang.push(namaPenumpang);
//         // kembalikan isi array & keluar dari function
//         return penumpang;

//     // else
//     }else{
    
//         // telusuri seluruh kursi dari awal
//         for(var i = 0; i < penumpang.length; i++){
//             // jika ada kursi kosong
//             if(penumpang[i] == undefined){ // CATATAN : penumpang[i] = jika pada array penumpang ke- i yang menyesuaikan panjang array penumpang
//                 // tambah penumpang di kursi tersebut
//                 penumpang[i] = namaPenumpang;
//                 // kembalikan isi array & keluar dari function
//                 return penumpang;
            
//             // jika sudah ada nama yang sama
//             }else if(penumpang[i] == namaPenumpang){
//                 // tampilkan pesan kesalahannya
//                 console.log(namaPenumpang + ' Sudah ada di daftar penumpang!');
//                 // kembalikan isi array & keluar dari function
//                 return penumpang;
            
//             // jika seluruh kursi terisi // CATATAN : penumpang.length = banyaknya data bukan index array 
//             }else if(i == penumpang.length - 1){ // membaca banyak data lalu kurangi 1 karena untuk membaca index (length untuk membaca banyak data sedangkan index membaca letak data)
//                 // tambah penumpang di akhir array
//                 penumpang.push(namaPenumpang);
//                 // kembalikan isi array & keluar dari function
//                 return penumpang; // CATATAN : return namaFungsi = digunakan biasanya mengembalikan nilai hasilnya
//             }
//         }
//     }
// }


// // var hapusPenumpang = function(namaPenumpang,penumpang){
// //     if( penumpang.length == 0 ){
// //         console.log('Angkot masih kosong!');
// //         return penumpang;
// //     }else if( penumpang[i] == namaPenumpang ){
// //         penumpang.pop(namaPenumpang);
// //         return penumpang;
// //     }else if( penumpang[i] != namaPenumpang ){
// //         console.log(namaPenumpang + 'Tidak ada didalam angkot!');
// //         return penumpang;
// //     }
// // }

// var hapusPenumpang = function(namaPenumpang,penumpang){
//     if( penumpang.length == 0 ){
//         console.log('Angkot kosong dan tidak mungkin ada penumpang yang turun!');
//         return penumpang;
//     }else{
//         for(var i = 0; i < penumpang.length; i++){
//             if( penumpang[i] == namaPenumpang ){
//                 penumpang[i] = undefined;
//                 return penumpang;
//             }// else if( penumpang[i] != namaPenumpang ){
//                 //console.log('Penumpang tidak ada di dalam angkot!');
//                 //return penumpang;
//                 // CATATAN : jika di tulis "penumpang[i] != namaPenumpang" dia akan melihat dari awal dan tidak sampai akhir
//             //}

//             else if(i == penumpang.length - 1){
//                 console.log('Penumpang tidak ada di dalam angkot!');
//                 return penumpang;
//                 // CATATAN : jika di tulis "i == penumpang.length - 1" maka akan membaca dahulu seluruhnya sampai index ke akhir lalu di keluarkan pesannya
//             }
//         }
//     }
// }


// Object

// var mahasiswa = {
//     nama : 'okta',
//     lulus : true,
//     IPsemester : [4.00, 4.00, 4.00, 4.00, 4.00],
//     IPkumulatif : function(){
//         var total = 0;
//         var ips = this.IPsemester
//         for(var i = 0; i < ips.length; i++){
//             total += ips[i];
//         }
//         return total/ips.length;
//     }
// }

// CATATAN : 
// ips[i] = untuk menghitung di setiap array untuk menjadi total
// ips.length = untuk menghitung banyaknya data didalamnya untuk dihitung menjadi rata - rata

// var profile = {
//     nama : 'okta',
//     usia : 21,
//     alamat : {
//         jalan : 'albariyah',
//         kota : 'jakarta timur',
//         provinsi : 'jakarta'
//     }
// };

// console.log(profile.alamat.jalan)

// Constructor
// function Mahasiswa(nama, usia, nim, gender){
//     // var this = {};
//     this.nama = nama;
//     this.usia = usia;
//     this.nim = nim;
//     this.gender = gender;
//     // return this;

//     // CATATAN : this bagaikan membuat variabel untuk objek sekaligus mengembalikannya
// }

// var mhs = new Mahasiswa('okta', 21, 2103015068, 'Laki-Laki');


















// CATATAN : return = memberhentikan yang hasilnya undefined (memang untuk memberhentikan dan tidak ada unsur nilai didalamnya)