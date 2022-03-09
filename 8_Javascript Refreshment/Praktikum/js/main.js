var a = 5;
let b = "Kampus Merdeka";
let nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "Perkenalkan nama saya "+
        nama +
        " nomor urut "+
        a +
        " sekarang sedang mengikuti "+
        b +
        " berasal dari "+
        asal
    );
}



// console.log("Asal diakses = " + perkenalan(asal));

console.log("nomor 1-a")
console.log("======================================")
console.log(lengkap_arr[1])
console.log("======================================")

console.log("nomor 1-b")
console.log("======================================")
if (terdaftar==true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}
console.log("======================================")

console.log("nomor 1-c")
console.log("======================================")
perkenalan()
console.log("======================================")

console.log("nomor 1-d")
console.log("======================================")
if (terdaftar==true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}
a = b;
nama = b;
console.log("array = " + nama);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan()
console.log("======================================")


// nomor 2

// a. karena pada line 4 menunjukan bahwa variabel tersebut memiliki statement false 
// dimana pada bagian kondisional memerlukan statement true agar dapat berjalan

// b. karena pada variable "nama" menggunakan const yang dimana const memiliki sifat
// nilai yang tidak dapat diubah atau diganti 

// c.tidak karena tidak dapat mengambil variable dari dalam fungsi yang dimana variable tersebut hanya
// bisa digunakan pada fungsi itu saja

console.log("nomor 3")
console.log("======================================")
const foo = ["Budi", "Sita", "Ayu"];
const [A ,B ,C] = foo;
console.log("variable a adalah = " + A)
console.log("variable b adalah = " + B)
console.log("variable c adalah = " + C)
console.log("======================================")

console.log("nomor 4")
console.log("======================================")

let bdays = ['10-17', '05-09', '20-19'];
console.log(bdays)
console.log("diubah menjadi")
for(let i=0; i < bdays.length; i++) {
    bdays[i] = bdays[i].replace(/-/g, '/');
}
console.log(bdays)
console.log("======================================")

console.log("nomor 5")
console.log("======================================")
let value = [1,2,3,4,5,6];
let kali=value.map(x => x * 2);
console.log(kali)
console.log("======================================")

console.log("nomor 6")
console.log("======================================")
let arr = [1.5, 2.56, 5.1, 12.33]
let bulatkan = arr.map(Math.round)
console.log(bulatkan)
console.log("======================================")