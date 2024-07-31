// async await

// sebuah function yang bekerja secara asinkronus (melalui event loop), yang menghasilkan (implisit) promise (terdapat promise namun tidak ada kode yang asinkronus) sebagai return value-nya, tapi penulisan kodenya menggunakan penulisan yang sinkronus (standar)

// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000);
// });
// coba.then(() => console.log(coba))

// untuk menggunakan asycn await membutuhkan function

// function cobaPromise(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('selesai')
//         }, 2000);
//     });
// };

// function cobaAsync(){
//     const coba = cobaPromise()
//     console.log(coba)
// }

// cobaAsync() // hasilnya akan pending karena langsung mengeksekusi console log tanpa terdeteksi bahwa cobaPromise() memiliki promise function didalamnya

// maka gunakan seperti ini

// function cobaPromise(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('selesai')
//         }, 2000);
//     });
// };

// async function cobaAsync(){
//     const coba = await cobaPromise() // await pada fungsi yang memiliki promise didalamnya
//     console.log(coba)
// }

// cobaAsync()

// penggunaan async await hanya ketika promisenya resolved ketika tidak/rejected maka uncaught/tidak tertangkap datanya, jika masih ingin menggunakan asink await maka bisa gunakan try dan catch (try sebagai coba jalankan, bila gagal maka catch tangap kegagalannya)

function cobaPromise(){
    return new Promise((resolve,rejected) => {
        const waktu = 6000;
        if(waktu < 5000){
            setTimeout(() => {
                resolve('selesai')
            }, waktu);
        }else if(waktu > 5000 && waktu < 10000){
            setTimeout(() => {
                rejected('kelamaan!')
            }, waktu);
        }else{
            rejected('gagal')
        }
    });
};

async function cobaAsync(){
    try{
        const coba = await cobaPromise() // await pada fungsi yang memiliki promise didalamnya
    console.log(coba)
    }catch(error){
        console.error('kelamaan!')
    }
    
}

cobaAsync()


