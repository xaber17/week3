/* Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. 
Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. 
Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling 
besar diantara yang lainnya.

Code
*/
function pasanganTerbesar(num) {
    var string = num.toString();
    var c = string[0] + string[1];
    for (let x = 0; x < string.length; x++) {
        var a = string[x] + string[x + 1]
        if (a > c) {
            c = a;
        }
    }
    return c;
}
   

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99