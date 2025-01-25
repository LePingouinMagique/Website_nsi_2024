const clock = document.querySelector(".clock")
const moinsButton = document.querySelector('.moins')
const resetButton = document.querySelector('.reset')
const plusButton = document.querySelector('.plus')
let counter = 0
function colorClock(counter){
    if (counter <0){
        clock.classList.remove("plus_")
        clock.classList.add("moins_")
    }else if(counter >0){
        clock.classList.add("plus_")
        clock.classList.remove("moins_")

    }else {
        clock.classList.remove("plus_")
        clock.classList.remove("moins_")

    }
}

moinsButton.addEventListener('click',()=>{
    counter -= 1
    clock.innerHTML = counter
    colorClock(counter)
})
resetButton.addEventListener('click',()=>{
    counter = 0
    clock.innerHTML = counter
    colorClock(counter)
})
plusButton.addEventListener('click',()=>{
    counter+=1
    clock.innerHTML = counter
    colorClock(counter)

})