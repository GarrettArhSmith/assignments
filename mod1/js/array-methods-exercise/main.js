var fruit = ["banana", "apple", "orange", "watermelon"]
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]

function logArrays() {
    console.log("fruit: ", fruit)
    console.log("vegetables: ", vegetables)
}

function arrays() {
    // #1
    vegetables.splice(vegetables.length - 1, 1)
    logArrays()
    // #2
    fruit.splice(0, 1)
    logArrays()
    // #3
    var orangeIndex = fruit.indexOf("orange")
    // #4
    fruit.push(orangeIndex)
    // #5
    var vegetablesLength = vegetables.length
    // #6
    vegetables.push(vegetablesLength)
    // #7
    var food = fruit.concat(vegetables)
    // #8
    food.splice(4, 2)
    // #9
    food.reverse()
    // #10
    return food.join(",")
}

console.log(arrays())