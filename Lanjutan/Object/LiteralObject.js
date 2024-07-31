// literal = langsung pembuatan dengan isinya
let player = {
    nama : 'okta',
    mana : 10,
    makan: function(porsi){
        this.mana = this.mana + porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }
}

