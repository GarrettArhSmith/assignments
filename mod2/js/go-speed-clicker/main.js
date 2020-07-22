tracker = document.createElement("h1")
tracker.textContent = localStorage.getItem("clicks")
document.body.append(tracker)

let timeLeft = 30
timer = document.createElement("h1")
timer.textContent = timeLeft
document.body.append(timer)

const countDown = setInterval(() => {
    timeLeft -= 1
    timer.textContent = timeLeft
    if (timeLeft <= 0) clearInterval(countDown)
}, 1000)



let clicks
window.addEventListener("click", e => {
    if (timeLeft > 0){
        clicks = Number(localStorage.getItem("clicks"))
        localStorage.setItem("clicks", ++clicks)
        tracker.textContent = localStorage.getItem("clicks")
    }
})