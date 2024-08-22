//custom type

// type Teman = {
//     nama: string,
//     isJancuk: boolean,
//     hutang?: number // ? artinya opsional
// }

// let temangAing: Teman

// temangAing = {
//     nama: "bait",
//     isJancuk: false,
//     // hutang: 23_000
// }

// console.log({ temangAing })


// function create(x:number,y:number): void {
//     const z:number = x + y
//     console.log('halohalohalobandung ' + z)
// }

// create(20,30)

// function add(a:number,b:number): number{
//     return a + b
// }

// add(20, 40)

// function add(x:number,y:number):string{
//     return `${x} ditambah ${y} hasilnya ${x + y}`
// }

// const result = add(20, 30)

// console.log(result)

// type wanita = string
// type pria = boolean

// type gender  = wanita | pria

// const wanita = "dinda"

// type Orang = {
//     nama: string
//     umur: number
//     hutang?: boolean
// }

// let teman: Orang

// teman = {
//     nama: "okta",
//     umur : 2,
// }
// console.log({ teman })

// penentuan package terkecil
type PackageCount = 2 | 3 | 4 | 5
type PackageName = "dua" | "tiga" | "empat" | "lima"

// penentuan package memakai angka atau kata
type Package = PackageCount | PackageName

// mockup
interface Phone {
    brand: string
    isModern: boolean
    paket: Package
    android: number
}

// mockup extend from Iphone 1
interface Samsung extends Phone {
    softCase: string
}

// mockup extend from Iphone 2
interface Nokia extends Phone {
    hardCase?: string
}


// logic samsung
function createSamsung(phone: Samsung): void {
    console.log(`ini hp bermerek ${phone.brand}, ini termasuk hp yang modern ? ${phone.isModern}, paketnya berapa? ${phone.paket}, dengan versi android ${phone.android}, casingnya apa? ${phone.softCase}`)
}

// logic nokia
function createNokia(phone: Nokia): void {
    console.log(`ini hp bermerek ${phone.brand}, ini termasuk hp yang modern ? ${phone.isModern}, paketnya berapa? ${phone.paket}, dengan versi android ${phone.android}, casingnya apa? ${phone.hardCase ? phone.hardCase : "tidak ada"}`)
}

// value mockup 1
const ZFlip: Samsung = {
    brand: "Samsung",
    isModern: true,
    paket: 2,
    android: 5.3,
    softCase: "halus"
}

// value mockup 2
const Xperia: Nokia = {
    brand: "Nokia",
    isModern: false,
    paket: "lima",
    android: 3.1,
    // hardCase: "kasar"
}

// print out value 1
createSamsung(ZFlip)

// print out value 2
createNokia(Xperia)