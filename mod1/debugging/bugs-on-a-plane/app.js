var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");

function formAlert() {
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];

    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    else if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    else if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }

    alert(`First Name: ${firstName}
Last Name: ${lastName}
Age: ${age}
Gender: ${gender}
Travel Location: ${location}
Diet: ${diet}
Awesome, now if you die, it won't be an accident..`
    )
    // alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);