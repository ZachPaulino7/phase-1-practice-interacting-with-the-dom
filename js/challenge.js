const counter = document.getElementById('counter')

const minus = document.getElementById('minus')

const plus = document.getElementById('plus')

const heart = document.getElementById('heart')

const resume = document.getElementById('pause')

const comment = document.getElementById('comment')

const submit = document.getElementById('submit')


let timer = setInterval(countup, 1000) 

function countup {
    counter.innerText = parseInt(counter.innerText + 1)
}