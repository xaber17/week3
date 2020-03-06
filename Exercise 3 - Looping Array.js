/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. 
Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n. 
Contoh input dapat dilihat dibawah: */
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

/* Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan 
data-data pada dari argumen seperti di bawah ini:
Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

function dataHandling(array) {
    let a, b, c, d;
    var z = '';
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array.length + 1; y++) {
            if (y === 0) {
                a = array[x][y];
                z += `Nomor ID: ${a}\n`;

            } else if (y === 1) {
                b = array[x][y];
                z += `Nama Lengkap: ${b}\n`;

            } else if (y === 2) {
                c = array[x][y];
                z += `TTL: ${c}`;

            } else if (y === 3) {
                c += ' ' + array[x][y];
                z += ` ${c}\n`;

            } else {
                d = array[x][y];
                z += `Hobi: ${d}\n\n`;

            }
        
        }
    }
    return z;
}

console.log(dataHandling(input));