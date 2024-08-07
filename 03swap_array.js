

function swapAt(array, i, j) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

function printOut(msg, x, y) {
    console.log(msg);
    console.log(x + ' ' + y);
}


let numbers = [ 1, 2, 3, 4, 5];

//printOut("Before: ", numbers[1], numbers[3]);
console.log(numbers);

//swapAt(0x3000, 1, 3);
swapAt(numbers, 1, 3);

//printOut("After: ", numbers[1], numbers[3]);
console.log(numbers);