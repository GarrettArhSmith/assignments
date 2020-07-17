const readline = require("readline-sync")

var foundKey = false
var gameOver = false

const name = readline.question("What is your name? ")

const options = ["Put your hand in the hole.", "Look for the key.", "Open the door."]

console.log(
    `Hello, ${name}.
    You are locked in a room.
    There is a hole in the wall.
    There is a door.`
    )

while (gameOver === false) {
    let option = readline.keyInSelect(options, "What do you want to do?")

    switch (options[option]) {
        case "Put your hand in the hole.":
            console.log("You have died mysteriously.")
            gameOver = true
            break;
        case "Look for the key.":
            if (foundKey) console.log("You have already found the key.")
            else {
                var rand = Math.floor(Math.random() * 2)
                if (rand === 0) {
                    console.log("You have found the key!")
                    foundKey = true
                }else {console.log("You couldn't find the key, keep looking...")}
            }
            break;
        case "Open the door.":
            if (foundKey) console.log(`Congratulations, ${name}, you have escaped!`)
            else {console.log("You haven't found the key yet!")}
            break;
    }
}