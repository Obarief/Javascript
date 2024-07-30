// dom selection, dom manipulation, dom traversal, event handling, projek

// element = 1 element, contoh = p, a, img, dll
// HTMLCollection = semua element 
// nodeList = campuran element dan teks/isi dari element tersebut


// document.getElementById() -> element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Oktavari';


// // document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName('p');
// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue'
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // document.getElementByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Diubah dari javascript';


// // document.querySelector() -> element
// const p4 = document.querySelector(' #b p' );
// p4.style.color = 'green';
// p4.style.fontSize = '25px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // document.SelectorAll() -> nodeList
// const li = document.querySelectorAll('li');
// for(let i = 0; i < li.length; i++){
//     li[i].innerHTML = 'ini diubah dari javascript';
// }

// // jika sudah punya id di html gunakan = byId
// // jika sudah punya kelas di html gunakan = byClassName
// // jika tidak ingin mengubah struktur htmlnya maka gunakan = querySelector
// // yang tercepat adalah = byId dan ByTagName


// // document.getElementById() = dari idnya
// // document.getElementsByTagName() = dari tag htmlnya = array
// // document.getElementByClassName() = dari classnya
// // document.querySelector() = ditulis dengan tanda (# kalau id) dan (. kalau kelas)
// // document.SelectorAll() = ditulis tag htmlnya = array


// // ingin mengubah node root menggunakan tagName/selector
// const sectionB = document.querySelector('section#b');
// const li3 = sectionB.getElementsByTagName('li')[2];
// li3.style.backgroundColor = 'lightblue';

//penjelasan = dalam mempersempit scope pencarian node root dari document dengan cara diatas. gunakan selector untuk menangkat section#b lalu buatlah li3 sebagai variabel penampung dan cari menggunakan scope dari sectionB saja lalu cari bagian li pada index ke-2 lalu ganti menjadi lightblue background colornya.


// manipulasi element dan node

// innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Oktavari Budi Arief';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world <a href="#">coba link</a>';

// // style
// const p4 = document.querySelector('#b p');
// p4.style.backgroundColor = 'lightgreen';

// // attribute
// const a = document.querySelector('section#a a');
// a.getAttribute('href');

// const pppp = document.querySelector('section#b p');
// pppp.setAttribute('id', 'p4');

// // classItem
// // menambah atribut class 
// const body = document.getElementsByTagName('body')[0];
// document.body.classList.add('body');
// document.body.classList.add('satu');
// document.body.classList.add('dua');
// document.body.classList.add('tiga');

// // membuat atribut kelas jika sudah ada maka dihapus, jika tidak ada maka dibuat
// document.body.classList.toggle('biru-muda');

// // untuk melihat class ke-n
// console.log(body.classList.item(2));

// // untuk bertanya apakah ada class dengan nama tersebut
// console.log(body.classList.contains('dua'));

// // untuk mengganti nama kelas
// console.log(body.classList.replace('dua', 'duaaaa'));

// // menghapus kelas
// console.log(body.classList.remove('satu'));



// manipulasi DOM

// // 1. paragraf = appendChild()
// // membuat elemen baru
// const pBaru = document.createElement('p');

// // membuat teks
// const teksPBaru = document.createTextNode('paragraf baru cenah');

// // menyimpan teks ke elemen
// pBaru.appendChild(teksPBaru);

// // tampilkan ke laman website
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// //=================================================================================

// // 2. list = insertBefore()
// const liBaru = document.createElement('li'); // membuat tag elemennya
// const teksLiBaru = document.createTextNode('item tambahan'); // membuat teksnya

// liBaru.appendChild(teksLiBaru); // memasukkan teks ke tag elemen

// const ul = document.querySelector('section#b ul'); // menangkap parentNode
// const li2 = ul.querySelector('li:nth-child(2)') // menangkap elemen ke 2

// ul.insertBefore(liBaru, li2) // memasukkan tag elemen baru ke-elemen sebelumnya yaitu sebelum tag elemen ke-2

// //=================================================================================

// // 3. a = removeChild()
// const link = document.getElementsByTagName('a')[0]; // harus diberi array ke-0 karena getElemenByTagName mengembalikan nilai array
// sectionA.removeChild(link) // menghapus elemen

// //=================================================================================

// // 4. paragraf menjadi h2 = replaceChild()
// const sectionB = document.getElementById('b'); // menangkap section b
// const p4 = sectionB.querySelector('p'); // menangkap tag p dalam section b

// const h2 = document.createElement('h2'); // membuat elemen baru
// const teksh2 = document.createTextNode('Judul baru cenah'); // membuat teks

// h2.appendChild(teksh2); // memasukkan teks ke elemen baru

// sectionB.replaceChild(h2 ,p4) // replace elemen (elemen baru , elemen lama)

// pBaru.style.backgroundColor = 'lightblue';
// liBaru.style.backgroundColor = 'lightblue';
// h2.style.backgroundColor = 'lightblue';

// document.createElement() = membuat elemen
// document.createTextNode() = membuat teks
// namaNode.appendChild() = menyimpan ke akhir elemen yang dipilih
// namaNode.insertBefore() = ul.insertBefore(tagBaru, tagSebelum) = menyimpan sebelum tag elemen ke-n
// namaParentNode.removeChild() = menghapus elemen
// namaParentNode.replaceChild() = mengganti elemen

//=================================================================================

