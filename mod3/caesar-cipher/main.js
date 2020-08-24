var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ');
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function cipher(text, offset) {
  return String.fromCharCode(...[...text].map(char => {
    if (/[a-zA-Z]/.test(char)) {
      const caseNum = /[a-z]/.test(char) ? 122 : 90
      let charCode = char.charCodeAt() + offset
      return (charCode > caseNum) ? charCode -= 26 : charCode
    } else return char.charCodeAt()
  }))
}

console.log(cipher(input, shift))