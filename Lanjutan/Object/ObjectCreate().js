// object.create()

const objectMahasiswa = {
    makan: function(porsi){
        this.energi += porsi;
        console.log('sudah makan');
    },

    main: function(jam){
        this.energi -= jam;
        console.log('maen mulu');
    },

    tidur: function(jam){
        this.energi += jam * 2;
        console.log('selamat istirahat');
    }
};

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(objectMahasiswa); // object yang sebagai fungsi makan, tidur dan main dipisah dari parentnya, dan otomatis di inisialisasikan dengan object.create(). (ini akan meminimalisir dalam penggunaan memori)
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;


    return mahasiswa;
};

let okta = Mahasiswa('okta', 10);

