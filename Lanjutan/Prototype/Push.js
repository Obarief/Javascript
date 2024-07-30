const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Menjumlahkan elemen array
const newAngka = [];
for(let i = 0; i < angka.length; i++){
    for(let j = i + 1; j < angka.length; j++){
        newAngka.push(angka[i] + angka[j])
    }
}

console.table(newAngka)

// ================================================================================

//menghitung setiap angka dikali 2

// const newAngka = [];

// for(let i = 0; i < angka.length; i++){
//     newAngka.push(angka[i] * 2)
// }
// console.log(newAngka)

// ================================================================================

// menampilkan angka diatas 3 dan yang sama dengan 3

// const newAngka = [];
// for(let i = 0; i < angka.length; i++) {
//     if(angka[i] >= 3) {
//         newAngka.push(angka[i])
//     }
// }

// console.log(newAngka);