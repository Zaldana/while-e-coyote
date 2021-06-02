const prompt = require('prompt-sync')();

let input = prompt("Enter a string:  ");

let string = input;

let inputCount = 0;

while (inputCount < 10) {
    console.log(input);
    input = input + string;
    inputCount = inputCount + 1;
}