const readline = require("readline-sync")

const actions = ['Add', 'Subtract', 'Multiply', 'Divide']

let num1 = Number(readline.question("Please enter your first number: "))
let num2 = Number(readline.question("Please enter your second number: "))
const action = readline.keyInSelect(actions, "Please enter the operation to perform: ")

switch (actions[action]) {
    case 'Add':
        console.log(`The result is: ${num1 + num2}`)
        break;
    case 'Subtract':
        console.log(`The result is: ${num1 - num2}`)
        break;
    case 'Multiply':
        console.log(`The result is: ${num1 * num2}`)
        break;
    case 'Divide':
        console.log(`The result is: ${num1 / num2}`)
        break;
}