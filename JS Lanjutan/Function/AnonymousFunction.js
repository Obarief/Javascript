// anonymous function dengan (function(){console.log('halo')}())
let add = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
}());

console.log(add());