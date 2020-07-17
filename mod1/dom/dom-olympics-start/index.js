var header = document.getElementById('header')
header.classList.add('header')
header.style.fontSize = '2em'
header.style.fontWeight = 'bolder'
header.textContent = "Javascript Made This!!"

var caption = document.createElement('h4')
caption.style.fontSize = '0.67em'
caption.innerHTML = "<span class='name'>Garrett</span> wrote the JavaScript"
header.append(caption)

var messages = document.getElementsByClassName('message')
var newMessages = ['something', 'fun', 'and', 'good']
for (let i = 0; i < messages.length; i++) {
   messages[i].textContent = newMessages[i]
}

// var messages = Array.from(document.getElementsByClassName('message'))
// var newMessages = ['something', 'fun', 'and', 'good']
// messages.forEach((e, i) => e.textContent = newMessages[i]);

document.getElementById('clear-button').addEventListener('click', e => {
    document.querySelector('.messages').innerHTML = ""
})