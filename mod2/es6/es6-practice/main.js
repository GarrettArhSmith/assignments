// let name = "John"
// const age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             pet.name = "fluffy"
//         } else {
//             pet.name = "spot"
//         }
//         console.log("pet name: ", pet.name)
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// console.log(runForLoop(["cat", "dog"]))



// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => ({ type: "carrot", name: carrot }))
// }

// console.log(mapVegetables(carrots))



// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => person.friendly)
// }

// console.log(filterForFriendly(people))



// const doMathSum = (a, b) => a + b

// const produceProduct = (a, b) => a * b

// console.log(doMathSum(1,2), produceProduct(1,2))



// const printStr = (fName = "Jane", lName = "Doe", age = 100) => `Hi ${fName} ${lName}, how does it feel to be ${age}?`

// console.log(printStr("Garrett", "Smith", 22))



// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  const filterForDogs = arr => arr.filter(animal => animal.type == "dog" ? true : false)

//  console.log(filterForDogs(animals))



const msg = (location, name) => `Hi ${name}!

Welcome to ${location}. 

I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`

console.log(msg("Ohio", "Garrett"))