// factory function
function salam(waktu){
    return function(nama){
        console.log(`halo ${nama}, selamat ${waktu} hari, semoga harimu menyenangkan`);
    }
}

let pagi = salam('pagi');

console.log(pagi('okta'))// mengapa dapat memanggil nama ?, karena dalam funsi salam ada 1 argumen yang dikembalikan yaitu nama (dapat disebut juga karna ada perilaku closure*)

