
class Tempat{ // pembuatan class harus huruf kapital
    constructor(gedung, lantai){ // mengembalikan object dari class
        this.gedung = gedung // this mengacu pada intance Tempat
        this.lantai = lantai
    }
    logic(){ // logika penyelesaian akhir
        console.log(`gedung: ${this.gedung} dan lantai: ${this.lantai}`)
    }
}

    const gedung1 = new Tempat('Menara 165', 20) // pemanggilan object baru (new) dari instance Tempat dengan mengisi variabel yang sesuai wadahnya
    gedung1.logic() // pemanggilan variabel isi dengan mengacu pada fungsi logika (agar isi dapat diisi di logika)

// catatan
// class = digunakan untuk membuat template (blueprint)
// constructor untuk membuat suatu object dari class
// logika berada dalam class agar menganut lexical scope
// pembuatan object baru diperlukan agar object lama(yaitu templatenya) tidak dapat diubah isinya namun menjadi sebuah wadah yang dapat dipakai kapan saja
// pemanggilan dengan menggunakan object yang baru(dan sudah ada isi) dengan mengacu pada logika sebagai tempat akhirnya 

