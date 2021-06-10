const prompt = require('prompt-sync')();

let input = prompt("Enter a string:  ");

let string = input;

while (input.length <= 10) {
    console.log(input);
    input = input + string;
}
