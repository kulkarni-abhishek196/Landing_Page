const prevBtn = document.getElementById("prev")

const nextBtn = document.getElementById("next")

let currentIndex = 0;

const slider = document.querySelectorAll(".image-slider")
const imagesSlider = document.querySelectorAll(".image-slider img")

prevBtn.addEventListener("click", ()=>{
    console.log("clicked!!")
    slider[0].style.transform = 'translateX(540px)'
})

nextBtn.addEventListener("click", ()=>{
    slider[0].style.transform =  'translateX(-540px)'
})
console.log(slider)
console.log(imagesSlider)

