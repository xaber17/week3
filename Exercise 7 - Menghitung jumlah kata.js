/* Diberikan sebuah function hitungJumlahKata(kalimat) yang menerima parameter berupa string yang 
merupakan sebuah kalimat. Function akan mengembalikan jumlah kata dari kalimat tersebut. 
Contoh, "I have a dream" akan menghasilkan nilai 4, karena memiliki 4 kata.

Code
*/
function hitungJumlahKata(kalimat) {
  // you can only write your code here!
    v = 1;
    z = kalimat;
    y = ' ';
    for (let x = 0; x < z.length; x++) {

        if (y === z[x]) {
          v = v + 1;
        } 

    }
    return v;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5