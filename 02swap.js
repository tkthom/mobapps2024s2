

function swap(x, y) {
    let tmp = x.number; // since 0x1000 contains a number at that address, we can change it at that address 
    x.number = y.number; //since 0x2000 contains a number at that address, we can do the same
    y.number = tmp;
}

function printOut(msg, x, y) {
    console.log(msg);
    console.log(x + ' ' + y);
}


let a = { number: 10 }; // object declaration and initialisation in js | 0x1000
let b = { number: 20 }; // 0x2000

printOut("Before:", a.number, b.number);

//before
//swap(10, 20) => instance here when a and b were numbers not objects

//swap(0x1000, 0x2000) 
swap(a, b)
/*let tmp = a;
a = b;
b = tmp;*/

printOut("After:", a.number, b.number);
