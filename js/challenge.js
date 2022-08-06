const minus = document.getElementById('minus')
//console.log(minus)

const heart = document.getElementById('heart')
//console.log(heart)

const pause = document.getElementById('pause')
//console.log(pause)

const commentForm = document.getElementById("comment-form")

const commentInput = document.getElementById("comment-input")
//console.log(commentInput)

const heartLikes = {}


document.addEventListener("DOMContentLoaded", ()=> {
    startCounter()
    minus.addEventListener("click", minusClick)
    heart.addEventListener("click", heartClick)
    pause.addEventListener("click", pauseClick)
    plus.addEventListener("click", plusClick)
    commentForm.addEventListener("submit", handleSubmit)
})

const runningCounter = () => {
    return (pause.innerText === "pause") ? true:false;
 };

const startCounter = () => {
    setInterval(plusClick, 1000)
    }
const plusClick = () => {
    if (runningCounter()) {
    counter.innerText = parseInt(counter.innerText) + 1
}

};

const minusClick = () => {
    counter.innerText = parseInt(counter.innerText) - 1
}

const heartClick = () => {
    const time = parseInt(counter.innerText)
    heartLikes[time] ? heartLikes[time] += 1 : heartLikes[time] = 1
    const li = document.createElement("li")
    if (document.getElementById(`like-${time}`)) {
        document.getElementById(`like-${time}`).innerText = `${time} has been liked ${heartLikes[time]} time`
    } else {
        li.id = `like-${time}`
        li.innerText = `${time} has been liked 1 time`
        document.querySelector('ul.likes').append(li)
   }
};

const pauseClick = () => {
    pause.innerText = pause.innerText === "pause" ? "resume" : "pause"
    const buttons = [plus,minus,heart];
    buttons.forEach((button) => {
        button.disabled = !button.disabled
    })
}


const handleSubmit = (event) => {
    event.preventDefault()
    const comment = commentInput.value
    const p = document.createElement('p')
    p.innerHTML = comment
    list.appendChild(p)
    commentForm.reset() 
}

