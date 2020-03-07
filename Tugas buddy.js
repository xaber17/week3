
var b = '';
var y = '';
for (let a = 4; a >= 0; a--) {
    //y += '*';

    for (let x = 0; x <= a - 1; x++) {
        b += ' ';

    }
    for (let z = a; z <= 4; z++) {
        y += '*';

    }
    console.log(`${b}${y}`);
    y = '';
    b = '';
}
console.log(); // space

var b = '';
var c = 1;
for (let x = 0; x < 5; x++) {
    b += c;
    c++;
    console.log(b);
    
}
console.log(); // space

var b = '';
for (let a = 4; a >= 0; a--) {

    var c = 1;
    for (let x = 0; x <= a - 1; x++) {
        b += ' ';

    }
    for (let z = a; z <= 4; z++) {
        
        y += c;
        c++;
    }
    console.log(`${b}${y}`);
    y = '';
    b = '';
}
