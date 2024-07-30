// callback
// untuk mengeksekusi kode dengan waktu yang tepat atau setelah operasi tertentu selesai
// function yang dikirimkan sebagai parameter pada function lain

// synchronous function (jarang digunakan)
// function halo(nama){
//     alert(`halo, ${nama}`)
// }

// function tampilkanPesan(callback){
//     const nama = prompt('masukkan nama anda: ')
//     callback(nama)
// }

// bentuk sederhananya dari yang atas
// function tampilkanPesan(callback){
//     const nama = prompt('masukkan nama anda: ')
//     callback(nama)
// }

// tampilkanPesan(nama => alert(`halo, ${nama}`))
// halo dijadikan argumen dari fungsi tampilkanPesan, tampilkanPesan akan memangsung fungsi halo

// jika ditulis halo() maka fungsi halo dijalankan segera tanpa menunggu penginputan dari user

// Asynchronous function menggunakan jquery

console.log('mulai');
$.ajax({
    url: 'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responeText)
    }
})
console.log('selesai');

// HTML
{/* <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

<script src="advanced.js"></script> */}

// thread mahasiswa.json
// [
//     {
//         "nama": "Oktavari Budi Arief",
//         "nim": "2103015068",
//         "email": "oktavariba@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenPembimbing": 1
//     },

//     {
//         "nama": "Ariellio Bayu Aji",
//         "nim": "2103015069",
//         "email": "Ariel@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenPembimbing": 2
//     },

//     {
//         "nama": "Adam Julizar",
//         "nim": "2103015070",
//         "email": "Julizar@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenPembimbing": 3
//     },

//     {
//         "nama": "Arsya Pramudita Hanggara",
//         "nim": "2103015071",
//         "email": "Hanggara@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenPembimbing": 4
//     }
// ]