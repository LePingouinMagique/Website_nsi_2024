

// document.addEventListener("DOMContentLoaded", () => {
//     const slider = document.querySelector("#slider");
//     if (slider) {
//         let paragraph = document.createElement("p");
//         paragraph.textContent = "Voici quelques paysages :";
//         slider.appendChild(paragraph);

//         function load_image_slider() {
//             for (let i = 1; i < 9; i++) {
//                 let img = document.createElement("img");
//                 img.src = `ressources/slider/paysage${i}.jpg`;
//                 img.alt = `Paysage ${i}`;
//                 img.classList.add("slider-image");
//                 slider.appendChild(img);
//             }
//         }
//         load_image_slider();
//     } else {
//         console.error("L'élément '#slider' est introuvable.");
//     }
// });




const links = document.querySelectorAll('nav li')
const icons = document.querySelector('#icons')

icons.addEventListener("click", () => {
    nav.classList.toggle("active")
})

links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove("active")
    })
})

//changement css grid
const button_grid = document.querySelector('#change_grid')
const button_reset = document.querySelector("#reset")



function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

const randomNum = getRandomNumber(10); 


function updateGridArea(elementClass, areaValue) {
    const element = document.querySelector(elementClass);
    if (element) {
        element.style.gridArea = areaValue; // Modifie la propriété grid-area
    } else {
        console.log(`Élément avec l'ID "${elementId}" introuvable.`);
    }
}

button_grid.addEventListener("click", ()=>{
     button_reset.style.display = "block"
     const liste_div = ["red","green",'blue',"black","yellow"]
     for (let i = 0; i < 5; i++) {
        let placement = `${getRandomNumber(4)}/${getRandomNumber(3)}/${getRandomNumber(4)}/${getRandomNumber(5)}`
         updateGridArea(".p"+liste_div[i],placement)
     }
})

button_reset.addEventListener("click",()=>{
    button_reset.style.display= "none"
    const liste_div = ["red","green",'blue',"black","yellow"]
    const placement = ["2/2/4/4","1/1/4/1","1/2/2/4","3/4/4/5","1/4/3/5"]
    for (let i = 0; i<5;i++){
        updateGridArea(".p"+liste_div[i],placement[i])
    }

})













