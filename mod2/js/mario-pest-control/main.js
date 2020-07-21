const goombaPrice = document.getElementById("goombaPrice")
const bobOmbPrice = document.getElementById("bobOmbPrice")
const cheepCheepPrice = document.getElementById("cheepCheepPrice")
const totalPrice = document.getElementById("totalPrice")

let total = 0
let goomba = 0
let bobOmb = 0
let cheepCheep = 0

window.addEventListener("input", e => {
    switch (e.target.name) {
        case "goomba": 
        goomba = Number(e.target.value) * 5
        goombaPrice.textContent = `${goomba} coins`
            break;
        case "bobOmb": 
        bobOmb = Number(e.target.value) * 7
        bobOmbPrice.textContent = `${bobOmb} coins`
            break;
        case "cheepCheep": 
        cheepCheep = Number(e.target.value) * 11
        cheepCheepPrice.textContent = `${cheepCheep} coins`
            break;
    }
    total = goomba + bobOmb + cheepCheep
    totalPrice.textContent = `${total} coins`
})