

// PRELIMINARIES //

// #1 //
// for (let i = 0; i <= 9; i++) {
//     console.log(i) 
// }

// #2 //
// for (let i = 9; i >= 0; i--) {
//     console.log(i)   
// }

// #3 //
// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }


// BRONZE //

// #1
// var arr = []
// for (let i = 0; i <= 9; i++) {
//     arr.push(i)
// }

// #2
// for (let i = 0; i <= 100; i++) {
//     i % 2 === 0 && console.log(i)
// }

// #3
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (let i = 0; i < fruit.length; i++) {
//     i % 2 === 0 && console.log(fruit[i])
// }


// SILVER //

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
// ]

// #1
// for (let i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name)
// }

// var names = []
// var occupations = []
// #2
// for (let i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name)
//     occupations.push(peopleArray[i].occupation)
// }

// #3
// for (let i = 0; i < peopleArray.length; i++) {
//     i % 2 === 0 && names.push(peopleArray[i].name)
//     i % 2 != 0 && occupations.push(peopleArray[i].occupation)
// }


// GOLD

// var arr = [];
// #1
// for (let i = 0; i < 3; i++) {
//     arr.push([])
//     for (let j = 0; j < 3; j++) {
//         arr[i].push(0)
//     }
// }

// #2
// for (let i = 0; i < 3; i++) {
//     arr.push([])
//     for (let j = 0; j < 3; j++) {
//         arr[i].push(i)
//     }
// }

// #3
// for (let i = 0; i < 3; i++) {
//     arr.push([])
//     for (let j = 0; j < 3; j++) {
//         arr[i].push(j)
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         arr[i][j] = 'X'
//     }
// }