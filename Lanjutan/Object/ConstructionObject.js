// costruction
function Mahasiswa(nama,energi){
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi){
        this.energi += porsi;
        console.log('sudah makan');

    this.main = function(jam){
        this.energi -= jam;
        console.log('malah maen, kan jadi berkurang energinya');
    }
    }
}

let okta = new Mahasiswa('okta', 10);