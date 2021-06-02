const prompt = require('prompt-sync')();

let input = Number(prompt("Enter a number:  "));

let doubler = 1;

while (input <= 100) {
    input = input * doubler;
    doubler = 2;
    console.log(input);
}