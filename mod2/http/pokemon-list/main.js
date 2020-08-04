const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText
        const data = JSON.parse(jsonData)
        console.log(data.objects[0].pokemon[0])
        showData(data.objects[0].pokemon)
    }
}

function showData(arr) {
    arr.map(pokemon => {
        const h1 = document.createElement("h1")
        h1.textContent = pokemon.name
        document.body.append(h1)
    })
}