const process = require('node:process');

if(process.argv.length < 3) {
    console.log("Make sure you provide a mark");
    return;
}

let mark = parseInt(process.argv[2]);

if(mark >= 50) {
    console.log("Passed!");
} else {
    console.log("Oh no, something went wrong :(");
}

