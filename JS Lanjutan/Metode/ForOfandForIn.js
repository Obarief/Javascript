// FOR..OF

// ================================================================================
// array
const mhs = ['okta', 'yasin', 'albait', 'jay', 'jek'];

// ================================================================================
// for biasa
// for(let i = 0; i < mhs.length; i++){
//     console.log(mhs[i])
// }

// ================================================================================
// forEach (khusus array)
// mhs.forEach(m => console.log(m));

// mhs.forEach((m,i) => { // m sebagai isi dari array dan i sebagai index
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`)
// });

// const linama = document.querySelectorAll('.nama');

// linama.forEach(n => console.log(n.innerHTML));
// HTML
{/* <ul>
    <li class="nama">okta</li>
    <li class="nama">barkah</li>
    <li class="nama">jupar</li>
  </ul> */}

// ================================================================================
// for..of
// for(const m of mhs){
//     console.log(m)
// };


// for(const [i, n] of mhs.entries()){ 
//     // dibuatkan destruction namun karena dia array maka harus urut, i sebagai pertama yaitu index dan n sebagai isi dari arraynya.
//     // mengembalikan nilai yang berisi key dan value
//     console.log(`${n} adalah mahasiswa ke-${i + 1}`)
// }

// html
// const linama = document.querySelectorAll('.nama');

// for (n of linama){
//     console.log(n.innerHTML)
// }

// HTML 
{/* <ul>
    <li class="nama">okta</li>
    <li class="nama">barkah</li>
    <li class="nama">jupar</li>
  </ul> */}

// arguments
// function jumlahAngka(){
//     let jumlah = 0; // jumlah sebagai variabel pemancing serta penampung agar argumen dapat ditambahkan menggunakan for..of

//     for(a of arguments){ // arguments adalah penampung default bila tidak tertampung di fungsinya (argumen/parameternya tidak ditentukan)
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1,2,3,4,5))

// ================================================================================
// string
// const nama = 'oktavari';
// for(const n of nama){
//     console.log(n)
// }

// ================================================================================

// FOR..in (khusus untuk object)

const mhs1 = {
    nama: 'okta',
    umur: 20,
    email: 'oktavariba@gmail.com'
};

for(m in mhs1){ 
    console.log(mhs1[m]) 
    // m didalam[in] mhs1 sebagai index .
    // jika hanya di tulis m saja pada console.log maka yang ditampilkan adalah keynya bukan valuenya.
}