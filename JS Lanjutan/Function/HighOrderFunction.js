//HIGHER ORDER FUNCTION
//function didalam function

function ulang (n, aksi){
    for(let i = 0; i <= n; i++){
        aksi(i);
    }
}

ulang(10, console.log);