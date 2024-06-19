/* Create a Faculty calculator using JavaScript This  faculty calculator does following :
1. It takes two numbers as input from the user
2. It takes wrong operations as follows:
+ = -
* = +
- = /
/ = **
It performs wrong operations 10% of the times
*/
const PROMPT = require('prompt-sync')()
let firstNumber = PROMPT("Enter the 1st Number :")
let secondNumber = PROMPT("Enter the 2nd Number :")
let operation = PROMPT("Enter Operation")

let random = Math.random();

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1) {
    console.log(`The eval is ${eval(`${firstNumber} ${secondNumber} ${operation}`)}`);

} else {

}