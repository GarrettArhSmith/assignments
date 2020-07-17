const addForm = document.add
const subtractForm = document.subtract
const multiplyForm = document.multiply

let num1
let num2
function setNums(event) {
    event.preventDefault()
    num1 = Number(event.target.num1.value)
    num2 = Number(event.target.num2.value)
    switch (event.target.name) {
        case "add": document.getElementById("addAns")
            .textContent = num1 + num2
            break
        case "subtract": document.getElementById("subtractAns")
            .textContent = num1 - num2
            break
        case "multiply": document.getElementById("multiplyAns")
            .textContent = num1 * num2
            break
    }
}

addForm.addEventListener("submit", e => setNums(e))
subtractForm.addEventListener("submit", e => setNums(e))
multiplyForm.addEventListener("submit", e => setNums(e))