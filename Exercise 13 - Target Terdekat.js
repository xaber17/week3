/* Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri 
dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

Code
*/
function targetTerdekat(arr) {
  // you can only write your code here!
    var w = 0;
    for (let x = 0; x < arr.length; x++) {
        var y = arr[x];
        if (y == 'o') {
            for (let z = x; z < arr.length; z++) {
                if (arr[z] == ' ') {
                    w += 1;
                } else if (arr[z] == 'x') {
                    w += 1;
                    return w;
                } else {
                    w = 0;
                }    
            }
        } else if (arr[x - 1] == 'x') {
            w += 1;
            return w;
        } else {
            w = 0;
        }
    }
    return w; 
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2