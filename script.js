var minutes = 0
var seconds = 0
var salise = 0

var started = false
var toggle = false
var reset = false

var timeInterval = null

function stopWatchInterval() {
    salise++
    let minuteText = "00"
    let secondsText = "00"
    let saliseText = "00"

    if (salise == 100) {
        salise = 0
        seconds++
        saliseText = "00"
    } else {
        if (salise < 10) {
            saliseText = "0" + salise
        } else {
            saliseText = salise
        }
    }

    if (seconds == 60) {
        seconds = 0
        minutes++
        secondsText = "00"
    } else {
        if (seconds < 10) {
            secondsText = "0" + seconds
        } else {
            secondsText = seconds
        }
    }

    if (minutes < 10) {
        minuteText = "0" + minutes
    } else {
        minuteText = minutes
    }

    if (minutes == 60) {
        minuteText = "60"
        secondsText = "00"
        saliseText = "00"
        clearInterval(timeInterval)
    }

    minutesEl.innerText = minuteText
    secondsEl.innerText = secondsText
    milisecondEl.innerText = saliseText
}

let startButton = document.getElementById("start-button")
let toggleButton = document.getElementById("toggle-button")
let resetButton = document.getElementById("reset-button")

let minutesEl = document.getElementById("minute")
let secondsEl = document.getElementById("second")
let milisecondEl = document.getElementById("milisecond")

startButton.addEventListener("click", () => {
    if (started == true) return
    started = true
    toggle = true
    timeInterval = setInterval(stopWatchInterval, 10)
})

toggleButton.addEventListener("click", () => {
    if (started == false) return
    if (toggle == true) {
        toggle = false
        toggleButton.innerText = "Resume"
        clearInterval(timeInterval)
    } else if (toggle == false) {
        toggle = true
        toggleButton.innerText = "Stop"
        timeInterval = setInterval(stopWatchInterval, 10)
    }
})

resetButton.addEventListener("click", () => {
    if (started == true) clearInterval(timeInterval)
    toggleButton.innerText = "Stop"
    minutes = 0
    seconds = 0
    salise = 0
    started = false
    toggle = false
    minutesEl.innerText = "00"
    secondsEl.innerText = "00"
    milisecondEl.innerText = "00"
})