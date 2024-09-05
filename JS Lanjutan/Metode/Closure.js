//CLOSURE

function init(){
    let nama = 'okta'; // lokal variabel (karena ada di dalam function scope)
    function tampilNama(){ // inner function (Closure*) karena membutuhkan data dari parent fucntion
        console.log(nama); // akses ke parent variabel yaitu function utamanya (let nama  = 'okta') (lexical scope*)
    }
    tampilNama();
}
init();

//closure sudah pasti menggunakan lexical scope