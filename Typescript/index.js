"use strict";
//custom type
// logic samsung
function createSamsung(phone) {
    console.log(`ini hp bermerek ${phone.brand}, ini termasuk hp yang modern ? ${phone.isModern}, paketnya berapa? ${phone.paket}, dengan versi android ${phone.android}, casingnya apa? ${phone.softCase}`);
}
// logic nokia
function createNokia(phone) {
    console.log(`ini hp bermerek ${phone.brand}, ini termasuk hp yang modern ? ${phone.isModern}, paketnya berapa? ${phone.paket}, dengan versi android ${phone.android}, casingnya apa? ${phone.hardCase ? phone.hardCase : "tidak ada"}`);
}
// value mockup 1
const ZFlip = {
    brand: "Samsung",
    isModern: true,
    paket: 2,
    android: 5.3,
    softCase: "halus"
};
// value mockup 2
const Xperia = {
    brand: "Nokia",
    isModern: false,
    paket: "lima",
    android: 3.1,
};
// print out value 1
createSamsung(ZFlip);
// print out value 2
createNokia(Xperia);
