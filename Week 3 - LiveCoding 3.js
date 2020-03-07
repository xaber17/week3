/**
 ==================
 Password Encryptor
 ==================

 Implementasikan program password Encryptor, yang akan mengamankan password kalian agar tidak mudah ditebak 
 oleh orang-orang. Password encryptor akan mengambil input berupa sebuah string password, dan menukar 
 masing-masing karakter di dalam string tersebut dengan karakter yang lain dengan aturan:

 1. vokal (a, i, u, e, o) akan diubah menjadi huruf berikutnya
 2. konsonan (huruf selain vokal) atau Huruf Uppercase akan diubah menjadi '<'
 3. angka (0-9) akan diubah menjadi angka disebelahnya, namun jika angka tersebut adalah angka 9, 
    maka ubahlah angka tersebut menjadi 0
 4. karakter-karakter spesial '@', '#', '$', '*' akan dibiarkan saja
 
BATASAN INPUT:
- Untuk karakter-karakter spesial yang ada pada keyboard: hanya akan ada 4 macam yang perlu kalian handle, yaitu:
    -@
    -# 
    -$
    -*

Contoh:
1. Input:  'password21'
   Output: '<b<<<p<<32'

2. Input: '#####'
   Output: '#####'

3. Input: 'holmes@ABCDE'
   Output: '<p<<f<@<<<<<'

3. Input: '9thelegend'
   Output: '0<<f<f<f<<'

Rules:
- Boleh menambahkan variabel jika diperlukan
- Dilarang menggunakan built-in function kecuali untuk: 
   -konversi Number to String dan sebaliknya [ contoh: Number(), parseInt(), String() ]  
   -pengecekan karakter tersebut adalah angka atau karakter [ contoh: isNaN(), isInteger() ]
   -boleh menggunakan toUpperCase(), toLowerCase()
 */

var password = 'xaber17@#$*' //silahkan isi dengan testcase/password seperti diatas

//Tulis program disini
let a, c;
var d = '';
var b = '';

for (let e = 0; e < password.length; e++) {
   d = d + password[e];
   if (d == 'a') {
      b = b + 'b';
      d = '';
   } else if (d == 'i') {
      b = b + 'j';
      d = '';
   } else if (d == 'u') {
      b = b + 'v';
      d = '';
   } else if (d == 'e') {
      b = b + 'f';
      d = '';
   } else if (d == 'o') {
      b = b + 'p';
      d = '';
   } else if (d == '1') {
      b = b + '2';
      d = '';
   } else if (d == '2') {
      b = b + '3';
      d = '';
   } else if (d == '3') {
      b = b + '4';
      d = '';
   } else if (d == '4') {
      b = b + '5';
      d = '';
   } else if (d == '5') {
      b = b + '6';
      d = '';
   } else if (d == '6') {
      b = b + '7';
      d = '';
   } else if (d == '7') {
      b = b + '8';
      d = '';
   } else if (d == '8') {
      b = b + '9';
      d = '';
   } else if (d == '9') {
      b = b + '0';
      d = '';
   } else if (d == '@') {
      b = b + '@';
      d = '';
   } else if (d == '#') {
      b = b + '#';
      d = '';
   } else if (d == '$') {
      b = b + '$';
      d = '';
   } else if (d == '*') {
      b = b + '*';
      d = '';
   } else {
      b = b + '>';
      d = '';
   }
      
   }

console.log(b);