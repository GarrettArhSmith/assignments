var square = document.getElementById('square')

var blue = '#2b76f0'
var yellow = '#faeb43'
var green = '#58ad2d'
var red = '#d12828'
var orange = '#eb9a2a'

var isMouseOver = false
square.addEventListener('mouseover', e => {
    square.style.backgroundColor = blue
    isMouseOver = true
})
square.addEventListener('mouseout', e => {
    square.style.backgroundColor = 'whitesmoke'
    isMouseOver = false
})


square.addEventListener('mousedown', e => {
    square.style.backgroundColor = red
})
square.addEventListener('mouseup', e => {
    square.style.backgroundColor = yellow
})

square.addEventListener('dblclick', e => {
    square.style.backgroundColor = green
})


var isScrolling;
window.addEventListener('scroll', e => {
    window.clearTimeout(isScrolling)
    square.style.backgroundColor = orange
    isScrolling = setTimeout(() => {
        isMouseOver ?
        square.style.backgroundColor = blue :
        square.style.backgroundColor = 'whitesmoke'
    }, 300)
})


document.addEventListener('keydown', e => {
    switch (e.keyCode) {
        case 66:
            square.style.backgroundColor = blue
            break;
        case 82:
            square.style.backgroundColor = red
            break;
        case 89:
            square.style.backgroundColor = yellow
            break;
        case 71:
            square.style.backgroundColor = green
            break;
        case 79:
            square.style.backgroundColor = orange
            break;
        case 87:
            square.style.backgroundColor = 'whitesmoke'
            break;
    }
})