/*Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string 
dan mengembalikan kebalikannya. */
var kata = ['hello world!'];

function balikString(kata) {
    z = kata;
    y = '';
    for (let x = kata[0].length; x > 0; x--) {
        y = y + z[0][x-1];
    }
    return y;
}
console.log(balikString(kata));