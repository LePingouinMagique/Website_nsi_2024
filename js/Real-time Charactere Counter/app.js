const total = document.querySelector(".total")
const remaining = document.querySelector(".remaining")
const max = 400

document.querySelector('textarea').addEventListener("input",(e)=>{
    
    console.log("état du champ :",e.currentTarget.value)
    changeTotal(e.currentTarget.value.length)
    changeRemaining(e.currentTarget.value.length,max )
}) 

function changeTotal(numberOfCaracter){
    total.innerHTML = `Total : ${numberOfCaracter}`
}
function changeRemaining(numberOfCaracter, max){
    remaining.innerHTML = `Remaining : ${max - numberOfCaracter}`
}