/* Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. 
Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang 
dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, 
anggap saja semua text lowercase.

Contoh jika animalsadalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

Code
*/
function groupAnimals(animals) {
  // you can only write your code here!
    var hasil = [];

    for (var x = 0; x < animals.length; x++) {
        var tampung = [];
        var huruf = animals[x][0];
        var hewan = animals[x];

        for (var z = animals.length - 1; z > x; z--) {

            if (huruf === animals[z][0]) {
                hewan = `${hewan}, ${animals[z]}`;
                animals.splice(z, 1);
            }
        }
        tampung.push(hewan);
        hasil.push(tampung);              
    }
  return hasil.sort();                       
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]