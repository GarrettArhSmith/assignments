// function sum(x, y){
//     if (isNaN(x) || isNaN(y)) throw new Error("One of you inputs is not a number!") 
//     return x + y;
// }
// try {
//     sum(1, "hi")
// } catch (error) {
//     console.log(error)
// }

var user = {username: "sam", password: "123abc"};
function login(username, password){
  if(username === user.username && password === user.password) {
      console.log("login successful!")
  }else throw new Error("username or password incorrect!")
}

try {
    login("sam", "123abc")
    login("sam", "123ab")
} catch (error) {
    console.log(error)
}