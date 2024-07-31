// templates literals
// highlight ekspression
const nama = 'okta';
const umur = 20;

function coba(strings, ...values){ 
// ...values = digunakan untuk mengumpulkan sebuah nilai (interpolasi) dari ekspresi didalam ${} menjadi sebuah array bernama values 



  return strings.reduce((result, str, i) => `${result}${str} <span class="coba"> ${values[i] || ''}</span>`, '');
}
// result = accumulator = variabel penampung sementara untuk hasil gabungan
// str = currentValues = nilai yang sedang di proses
// values[i] = karena ekspresi masuk ke sebuah array maka di inisialisasikan bahwa nama itu index ke 0 dan umur index ke 1, maka jika hanya di tulis values tanpa index ke-i maka akan keluar per huruf dari sebuah ekspresi
// '' setelah || = adalah jika values[i] selanjutnya adalah falsy (undefined, null dan '') maka jadikan string kosong ''.
// lalu '' yang terakhir sebagai nilai awal accumulator, karna accumulator pasti terdapat nilai dibelakangnya secara invisible, jika angka maka 0 jika string '' (kosong)



const str = coba `halo, nama saya ${nama}, saya berumur ${umur} tahun.`

document.body.innerHTML = str;

// dapat digunakan untuk mencegah defacing pada halaman web

// ==============================================================

// CSS

///* <style>
//  .coba{
//    background-color: salmon;
//  }
//</style> }