// const fs = require('fs') // untuk core modules
// const cetakNama =  require('./coba') // local modules import (karena ada ./...)
// const nodemon = require('nodemon') // NPM


const coba = require('./coba')
// file coba menjadi sebuah object sehingga pemanggilan valuesnya menggunakan coba.(nama keynya)

console.log(coba.cetakNama('okta'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang)
// dapat memanggil function, variabel, object, class