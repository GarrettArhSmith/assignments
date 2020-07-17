
const form = document.addItem
const list = document.getElementById("list")

form.addEventListener("submit", e => {
    e.preventDefault()
    const item = document.createElement("li")
    item.innerHTML = `
        <div>${form.title.value}</div>
        <button>edit</button>
        <button>X</button>
    `

    list.append(item)
    form.title.value = ""
})

list.addEventListener('click', e => {
    const isButton = e.target.nodeName === 'BUTTON'
    if (!isButton) {
        return
    }

    switch (e.target.innerHTML) {
        case "X":
            e.target.parentNode.remove()
            break;
        case "save":
            e.target.previousSibling.previousSibling.setAttribute("contenteditable", false)
            e.target.innerHTML = "edit"
            console.log("save")
            break;
        case "edit":
            e.target.previousSibling.previousSibling.setAttribute("contenteditable", true)
            e.target.innerHTML = "save"
            console.log("edit")
        break;
    }
})