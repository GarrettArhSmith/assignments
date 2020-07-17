
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
    var output = []
    for (let i = 0; i < people.length; i++) {
        output.push(`${people[i]}:`)
        output = output.concat(alphabet.toUpperCase().split(""))
    }
    return output
}

console.log(forception(people, alphabet))