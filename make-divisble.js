const prompt = require('prompt-sync')();

let numOne = Number(prompt("Enter X:  "));

let numTwo = Number(prompt("Enter y:  "));

while (numOne % numTwo !== 0) {
    console.log(numOne);
    numOne = numOne + 1;
}

console.log(numOne, " is divisible by, ", numTwo);