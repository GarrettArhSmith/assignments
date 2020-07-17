
// #1
function max(...nums) {
    let largest;
    nums.forEach(num => {
        if (num > largest || largest === undefined) largest = num
    });
    console.log(largest)
}

// #2
function charCheck(char, ...words) {
    words.forEach(word => {
        word.includes(char) ? console.log(word) : null
    });
}

// #3
function factorCheck(num1, num2) {
    console.log(num1 % num2 === 0)
}