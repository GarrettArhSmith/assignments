function upperLower(string) {
    return string.toUpperCase()+string.toLowerCase()
}

function halfDown(string) {
    return Math.floor(string.length/2)
}

function half(string) {
    return string.slice(0, halfDown(string))
}

function halfUpperLower(string) {
    return half(string).toUpperCase() + string.slice(halfDown(string)).toLowerCase()
}

function upperAfterSpace(string) {
    var splitString = string.split(" ")

    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1)
    }
    return splitString.join(" ")
}

console.log(upperAfterSpace("hello world"))