// declaration = pembuatan tamplatenya
function Player(nama, mana){
    let player = {}; // sengaja di kosongkan agar dapat di inisialisasikan dengan cara dibawah ini
    player.nama = nama;
    player.mana = mana;
// =================================================================
    player.makan = function(porsi){
        this.mana += porsi;
        console.log(`halo ${this.nama}, selamat maem`);
    }
// =================================================================
    player.main = function(jam){
        player.mana -= jam;
        console.log(`kamu ${this.nama}, terlalu banyak main.`)
    }
// =================================================================
    return player; // mengembalikan nilai yang di hasilkan oleh object (harus ada jika menggunakan declaration/membuat suatu yang dapat menghasilkan sesuatu)
}

let okta = Player('okta', 10);
let doddy = Player('doddy', 10);


