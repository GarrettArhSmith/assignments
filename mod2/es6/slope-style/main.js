// function collectAnimals(...animals) {  
//     return animals
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]



// function combineFruit(fruit, sweets, vegetables){
//     return {
//         fruit,
//         sweets,
//         vegetables
//     }
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"]))
// //=> {
//     //     fruit: ["apple", "pear"],
//     //     sweets: ["cake", "pie"],
//     //     vegetables: ["carrit"]
//     //  }



// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
//   function parseSentence({location, duration} = vacation){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }

//   console.log(parseSentence())



// function returnFirst(items){
//     const [firstItem] = items; /*change this line to be es6*/
//     return firstItem
// }

// console.log(returnFirst([1,2,3]))



// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav] = arr
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))



// function combineAnimals(...arrays) {  
//     return [...arrays[0], ...arrays[1], ...arrays[2]]
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// // ["dog", "cat", "mouse", "jackolope", "platypus"]



// const product = (...nums) => nums.reduce((acc, number) => acc * number, 1)

// console.log(product(1,2,3,4,5,6,7,8,9))



// const unshift = (array, ...items) => [...items, ...array]

// console.log(unshift([1,2],1,2,3))



function populatePeople(names){
    return names.map(name => {
        name = name.split(" ");
        const [firstName, lastName] = name
        return {
            firstName,
            lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]