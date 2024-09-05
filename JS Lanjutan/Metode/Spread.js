// spread operator (...)


// memecah iterables (isinya banyak) menjadi single
const mhs = ['okta', 'yasin', 'bait'];
console.log(...mhs[0]) // jika ditambah [0] maka yang dipecah adalah array pada index ke-0 menjadi o k t a

// menggabungkan 2 array
// const mhs = ['okta', 'yasin', 'bait'];
// const dsn = ['firman', 'hamid', 'nuroji']
// console.log(...mhs, 'ucup', ...dsn) // bisa ditambah ditengahnya yaitu ucup

// mengcopy array
// const mhs = ['okta', 'yasin', 'bait'];
// const mhss1 = mhs // pembuatan variabel baru hanya reference dari mhs
// const mhs1 = [...mhs] // pembuatan variabel baru namun mengcopy isi dalam bentuk array dari mhs
// mhs1[0] = 'ucup'
// console.log(...mhs1)


// mengambil value dari html untuk menjadikan array
// dengan manual (for loop)
// const limhs = document.querySelectorAll('li');
// const mhs = [];
// for(let i = 0; i < limhs.length; i++){
//     mhs.push(limhs[i].textContent)
// }
// console.log(mhs)

// dengan spread operator
// const limhs = document.querySelectorAll('li');
// const mhs = [...limhs].map(m => m.textContent); // jika tanpa [...] maka akan error "limhs is not a function" alias function map tidak ada dalam array
// console.log(...mhs)

// menjadikan span perhuruf di html dengan dom
// const ayam = document.querySelector('.ayam');
// const huruf = [...ayam.textContent].map(h => `<span>${h}</span>`).join('')
// console.log(huruf)

// HTML 
{/* <ul>
    <li class="ayam">ayam</li>
    <li>kuda</li>
    <li>kucing</li>
  </ul> */}