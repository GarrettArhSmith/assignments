
// #1 //
console.log(`
~~FIRST PRACTICE~~`)

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computerCount = 0

for (let i = 0; i < officeItems.length; i++) {
    officeItems[i] === "computer" && computerCount++
}
console.log(computerCount);


// #2 //
console.log(`
~~SECOND PRACTICE~~`)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
var oldEnough;
var pronouns = {is: "", isNot: ""}
for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    var element = peopleWhoWantToSeeMadMaxFuryRoad[i]
    oldEnough = element.age >= 18
    pronouns = element.gender === "male" ? {is: "He's", isNot: "him"} : {is: "She's", isNot: "her"}
    console.log(`${element.name} is ${oldEnough ? "" : "not "}old enough${oldEnough ? `. ${pronouns.is} good to see Mad Max Fury Road.` : ` to see Mad Max Fury Road, don't let ${pronouns.isNot} in.`}`)
}


// #3 //
console.log(`
~~THIRD PRACTICE~~`)

//creates array of random length 1-10 with random numbers 0-99
var randArr = []

var randLength = Math.floor(Math.random() * 10 + 1)
var randNum;

for (let i = 0; i < randLength; i++) {
    randNum = Math.floor(Math.random() * 100)
    randArr.push(randNum)
}


console.log(`Array: ${randArr} - Sum: ${randArr.reduce((a, b) => a + b, 0)}
The light is`, randArr.reduce((a, b) => a + b, 0) % 2 === 0 ? "OFF" : "ON")
