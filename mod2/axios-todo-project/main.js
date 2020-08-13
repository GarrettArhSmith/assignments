function getData() {
    axios.get("https://api.vschool.io/garrettsmith/todo")
    .then(response => display(response.data))
    .catch(err => console.log(err))
}

function display(response) {
    document.getElementById("list").innerHTML = ""
    response.map(item => {
        const li = document.createElement("li")
        li.setAttribute("id", item._id)
        document.getElementById("list").prepend(li)

        const imgContainer = document.createElement("div")
        imgContainer.classList.add("imgContainer")
        li.appendChild(imgContainer)
        

        const img = document.createElement("img")
        img.setAttribute("src", item.imgUrl ? item.imgUrl : "")
        imgContainer.appendChild(img)

        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        item.completed && checkbox.setAttribute("checked", "true")
        checkbox.classList.add("check")
        li.appendChild(checkbox)

        const text = document.createElement("div")
        text.classList.add("text", item.completed && "completed")
        li.appendChild(text)

        const title = document.createElement("h3")
        title.textContent = `${item.title} - `
        document.getElementById("list").appendChild(title)
        text.appendChild(title)

        const price = document.createElement("span")
        price.textContent = item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        price.classList.add("price")
        title.appendChild(price)

        const desc = document.createElement("p")
        desc.textContent = item.description
        text.appendChild(desc)

        const actions = document.createElement("div")
        actions.classList.add("actions")
        li.appendChild(actions)

        const edit = document.createElement("button")
        edit.textContent = "✎"
        edit.classList.add("action", "edit")
        actions.appendChild(edit)

        const del = document.createElement("button")
        del.textContent = "✖"
        del.classList.add("action", "delete")
        actions.appendChild(del)
    })
}

getData()

const addForm = document["addItem"]
addForm.addEventListener("submit", e => {
    e.preventDefault()

    const newItem = {
        title: addForm.title.value,
        description: addForm.desc.value,
        price: addForm.price.value ? addForm.price.value : 0,
        imgUrl: addForm.imgUrl.value,
        completed: false
    }

    axios.post("https://api.vschool.io/garrettsmith/todo", newItem)
    .then(res => getData())
    .catch(err => console.log(err))
})

function check(e) {
    const update = {completed: e.target.checked}

        axios.put(`https://api.vschool.io/garrettsmith/todo/${e.target.parentNode.id}`, update)
            .then(res => getData())
            .catch(err => console.log(err))
}

let editing = false
function edit(e) {
    function showEdit(res) {
        editing = true
        let singleData = res

        const li = e.target.parentNode.parentNode

        const newEl = document.createElement("form")
        newEl.setAttribute("name", "editForm")
        newEl.innerHTML = `
        <li id="${singleData._id}">
            <div class="imgContainer"></div>
            <div class="text">
                <input type="url" name="imgUrl" value=${singleData.imgUrl}>
                <input type="number" name="price" value=${singleData.price} step=".01">
                <input type="text" name="title" value=${singleData.title}>
                <input type="text" name="desc" value=${singleData.description}>
            </div>
            <div class="actions">
                <button class="action save">✓</button>
                <button class="action back">⬅</button>
            </div>
        </li>`

        li.replaceWith(newEl)
    }

    axios.get(`https://api.vschool.io/garrettsmith/todo/${e.target.parentNode.parentNode.id}`)
        .then(res => showEdit(res.data))
        .catch(err => console.log(err))
}

function del(e) {
    axios.delete(`https://api.vschool.io/garrettsmith/todo/${e.target.parentNode.parentNode.id}`)
    .then(res => getData())
    .catch(err => console.log(err))
}

function save(e) {
    e.preventDefault()
    const editForm = document["editForm"]

    const updates = {
        title: editForm.title.value,
        description: editForm.desc.value,
        price: editForm.price.value,
        imgUrl: editForm.imgUrl.value,
    }

    axios.put(`https://api.vschool.io/garrettsmith/todo/${e.target.parentNode.parentNode.id}`, updates)
        .then(res => {
            getData()
            editing = false
        })
        .catch(err => console.log(err))
}

document.getElementById("container").addEventListener("click", e => {
    if (e.target.type === "checkbox") check(e)

    if ([...e.target.classList].includes("edit") && !editing) edit(e)

    if ([...e.target.classList].includes("delete")) del(e)

    if ([...e.target.classList].includes("save")) save(e)

    if ([...e.target.classList].includes("back")) getData()
})