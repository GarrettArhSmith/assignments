
for (let i = 1; i <= 100; i++) {
    console.log(i % 3 != 0 && i % 5 != 0 ?
    i : (i % 3 === 0 ? "fizz" : "") + (i % 5 === 0 ? "buzz" : ""))
}

// NOT MY SOLUTION
// for(let i=0;i<100;)
//   console.log(( ++i%3 ? '' : 'fizz' ) + ( i%5 ? '' : 'buzz' ) || i
//   )