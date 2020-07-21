const readline = require("readline-sync"),
    chalk = require('chalk')

const system = chalk.green
const input = chalk.keyword(`orange`)
const prompt = chalk.magentaBright
const dmg = chalk.red.bold

let customerAppeared
const customerTypes = [
    `Soccer Mom`,
    `Shoplifting Teen`,
    `Bored Old Man`,
    `Stoner`,
    `Child Too Young To Be Here Alone`,
    `Weird Lady Still In Pajamas`
]
const items = [
    `A Loaf of Bread`,
    `A Half Eaten Chocolate Bar`,
    `A Broken Jar of Pickles`,
    `A T-Shirt With A Hole`
]

let inventory = {}

// START OF GAME
console.log(system(`
Welcome to your first shift at ${chalk.bold.blue(`GROCERY${chalk.yellow(`★`)}MART`)}, where the customer is always annoying!`))

const name = readline.question(prompt(`\n    Can I get your name? `))

console.log(system(`
Thank you, ${input(name)}! You'll be making $11.50/hour, and you'll hate every second of it!
Now get out there and ${chalk.italic(`"help"`)} some customers!`))

let customer
let rounds = 0
let damageDealt = 0
let damageTaken = 0
let customerSatisfaction = 0
let mentalHealth = 20
let escaped
let item

// FUNCTIONS TO DEAL/TAKE DAMAGE
function takeDamage(max) {
    damageTaken = Math.floor( Math.random() * max + 1)
    if (damageTaken > mentalHealth) damageTaken = mentalHealth
    mentalHealth -= damageTaken
}
function dealDamage(max) {
    damageDealt = Math.floor( Math.random() * max + 1)
    if (damageDealt > 10 - customerSatisfaction) damageDealt = 10 - customerSatisfaction
    customerSatisfaction += damageDealt
}

// "ATTACK" SEQUENCE LOOP
function attackSequence() {
    customerSatisfaction = 0
    while (customerSatisfaction < 10 && mentalHealth > 0) { // WHILE CUSTOMER SATISFACTION IS NOT FULL AND YOU ARE NOT DEAD
        dealDamage(10)

        takeDamage(5)

        console.log(system(`\nCustomer satisfaction went up by ${dmg(damageDealt)}. \nThe customer decreased your mental health by ${dmg(damageTaken)}
        \nCustomer Satisfaction : ${chalk.bgBlue(" ".repeat(customerSatisfaction * 2))}${chalk.bgWhite(" ".repeat(20 - (customerSatisfaction * 2)))}
        \nYour Mental Health    : ${chalk.bgGreen(" ".repeat(mentalHealth))}${chalk.bgWhite(" ".repeat(20 - mentalHealth))}`))

        if (mentalHealth <= 0) {
            console.log(chalk.red.bold(`\nThat customer really took it out of you, ${input(name)}. You had a mental breakdown, and quit your job.`))
            const print = readline.question(`Type "print" to see your final stats: `)
            if (print === "print") console.log(input(`${name} - Lasted ${rounds} rounds.`), system(`\nMental Health: ${mentalHealth} \n${input(`Inventory:`)} \n`), inventory)
        }
        else readline.keyInPause(`\nContinue...`)
    } 
    //CUSTOMER SATISFACTION IS FULL (KILLED ENEMY)
    if (customerSatisfaction >= 10 && mentalHealth > 0) {
        item = items[Math.floor(Math.random() * items.length)]
        inventory[item] = (inventory[item] || 0) + 1
        console.log(input(`\nInventory: \n`), inventory)
        mentalHealth += 5
        console.log(system(`\nYou did it! You ${chalk.italic(`"helped"`)} that customer! You somehow ended up with ${item}, and gained back ${chalk.blue(`5`)} mental health.`))
    }
    else if (customerSatisfaction >= 10) {
        console.log(chalk.yellowBright(`\n...That customer was so appreciative of your ${chalk.italic(`"help"`)}. They mentioned it to your manager.`))
        let revived = readline.keyInYNStrict(system(`\n${chalk.bold.blue(`GROCERY${chalk.yellow(`★`)}MART`)} wants you back. Keep going? `))
        if (revived) {
            mentalHealth = 20
        }else console.log(chalk.blue(`We're sad to see you go, ${input(name)}`))

    }
}

// WALK LOOP
while (mentalHealth > 0) {
    readline.keyIn(prompt(`\n    Press ${chalk.italic.hex(`#ffbdfb`)(`W`)} to walk `), {limit: '$<w>'})
    rounds++

    customerAppeared = Math.random() < 0.33
    if (customerAppeared) { // CUSTOMER ENCOUNTER
        customer = customerTypes[Math.floor(Math.random() * customerTypes.length)]
        console.log(system(`\nOh no! You've encountered a ${customer}!`))

        let helpChosen = readline.keyInYNStrict(prompt(`\n    Do you want to ${chalk.italic(`"help"`)} the customer? (or try to run away)`))

        if (helpChosen) { //IF USER CHOSE TO "ATTACK"
            attackSequence()
        } else { // IF USER CHOSE TO RUN
            escaped = Math.random() < 0.5
            if (escaped) console.log(system(`\nPhew, you avoided that customer!`)) // RUNNING WAS SUCCESSFUL
            else { // RUNNING WAS UNSUCCESSFUL
                takeDamage(5)

                console.log(system(`\nYou tried to run, but the customer ran after you! \nThe customer hit your mental health for ${dmg(damageTaken)}
                \nYour Mental Health    : ${chalk.bgGreen(" ".repeat(mentalHealth))}${chalk.bgWhite(" ".repeat(20 - mentalHealth))}`))

                readline.keyInPause()
                attackSequence()
            }
        }
    }
}
