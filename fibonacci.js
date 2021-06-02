const prompt = require('prompt-sync')();

let times = prompt("Enter a value for 'n':  ");

let numberOne = 0

let numberTwo = 1;

let count = 1;

while (Number(times) >= count) {
    console.log(numberOne);
    numberOne = numberTwo;
    numberTwo = numberOne + ;
    count = count + 1;
}