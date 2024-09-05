// promise





// penanganan operasi asinkron dengan cara yang lebih bersih daripada callback

// untuk penanganan operasi yang belum selesai (asinkron) untuk menghindari masalah yang disebut callback hell atau pyramid of doom

// jika menggunakan callback bersarang maka akan sulit dibaca dan di pelihara, dengan itu adanya promises untuk membantu menyederhanakan kode dan lebih terstruktur

//tanpa jquery (javascript manual/vanilla javascript)

// const xyz = new XMLHttpRequest();
// xyz.onreadystatechange = function(){
//     if(xyz.status === 200){
//         if(xyz.readystate === 4){
//             console.log(JSON.parse(xyz.response))
//         }
//     }else {
//         console.log(xyz.responseText)
//     }
// }
// xyz.open('get','http://www.omdbapi.com/?apikey=ee6e8b41&s=avengers');

// xyz.send();

// dengan ajax
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=ee6e8b41&s=starwars',
//     success: movies => console.log(movies)
// })

// =================================================================================

// promise (janji) (biasanya digunakan untuk req ke API)
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asinkron di masa yang akan datang
// janji (terpenuhi / tidak terpenuhi)
// keadaan = states (fulfilled / rejected / pending) (pending waktu yang diperlukan untuk ditepati atau tidaknya)
// callback (resolve / reject / finally) (finally waktu tunggunya selesai ketika terpenuhi atau tidak)
// aksi (then / catch)

// promise sederhana

// let ditepati = true
// const janji = new Promise((resolve, reject) => { // new untuk membuat object khusus dan baru bernama Promise
//     if(ditepati){
//         setTimeout(() => {
//             resolve('janji ditepati')
//         }, 2000);
//     }else {
//         setTimeout(() => {
//             reject('ingkar janji')
//         }, 2000);
//     }
// });

// console.log('mulai')
// janji
//     .finally(() => console.log('selesai menunggu!')) 
        // digunakan untuk membuat loading sebelum finally (ketika menunggu fungsi loading dijalankan dan diselesaikan ketika finally)
        // () pada finally adalah function Promise
//     .then(response => console.log('Ok : ' + response)) // response dapat diganti dengan variabel lain
//     .catch(response => console.log('Not Ok : ' + response))
// console.log('selesai')

// then artinya untuk response janji ditepati / resolve / fulfilled / terpenuhi
// catch artinya untuk response ingkar janji / reject / rejected / tidak terpenuhi


// promise.all()

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'bandung',
            temp: 20
        }])
    }, 1000);
})

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'angry birds',
            rating: 10
        }])
    }, 500);
})

console.log('mulai')
Promise.all([cuaca, film])
    .finally(() => console.log('selesai menunggu!'))
    .then(response => {
        const [cuaca, film] = response
        console.log(cuaca);
        console.log(film);
    })
console.log('selesai')



// fetch
// fetch('http://www.omdbapi.com/?apikey=ee6e8b41&s=starwars')
//     .then(response => response.json())
//     .then(response => console.log(response));