const form = document.travel
let checkedBoxes

form.addEventListener("submit", e => {
    e.preventDefault()
    checkedBoxes = [...document.querySelectorAll("input[name=diet]:checked")]
        .map(diet => diet.value)

    alert(`
    First Name: ${form.firstName.value}
    Last Name: ${form.lastName.value}
    Age: ${form.age.value}
    Sex: ${form.sex.value}
    Location: ${form.location.value}
    Dietary Restrictions: ${checkedBoxes}
    `)
    
    form.reset()
})