function Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    return'sudah makan'
}

let okta = new Mahasiswa('okta', 10);

//ketika membuat array maupun object maka akan secara otomatis dibuatkan prototype yang isinya function" seperti pada declaration.

//pada object.create(), isi didalam tanda kurungnya sebenarnya adalah (namafunction.prototype)

//artinya prototypenya adalah default dari javascript