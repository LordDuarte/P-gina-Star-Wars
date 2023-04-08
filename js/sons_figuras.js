const xwing = document.querySelector(".x-wing")
const somXwing = document.getElementById("som_xwing")
const somXwing2 = document.getElementById("som_xwing2")
const somXwing3 = document.getElementById("som_xwing3")
const somXwing4 = document.getElementById("som_xwing4")
var contadorXwing = 0

const fighter = document.querySelector(".fighter")
const somFighter = document.getElementById("som_fighter")
const somFighter2 = document.getElementById("som_fighter2")
var contadorFighter = 0

const millennium = document.querySelector(".millennium")
const somMillennium = document.getElementById("som_millennium")
const somMillennium2 = document.getElementById("som_millennium2")
const somMillennium3 = document.getElementById("som_millennium3")
var contadorMillennium = 0

fighter.addEventListener("click", (evento) =>{
    fighter.setAttribute("data-fighter", "clicado")
    playFighter(evento.target.dataset.play)
    console.log("clicado")
})


xwing.addEventListener("click", (evento) =>{
    xwing.setAttribute("data-xwing", "clicado")
    playXwing(evento.target.dataset.play)
    console.log("clicado")
})

millennium.addEventListener("click", (evento) =>{
    millennium.setAttribute("data-millennium", "clicado")
    playMillennium(evento.target.dataset.play)
    console.log("clicado")
})


function playXwing(play){
    if(contadorXwing === 0){
    somXwing.play()
    console.log(contadorXwing)
    }
    if(contadorXwing === 1){
        somXwing2.play()
        console.log(contadorXwing)
    }
    if(contadorXwing === 2){
        somXwing3.play()
        console.log(contadorXwing)
    }
    if(contadorXwing === 3){
        somXwing4.play()
        console.log(contadorXwing)
        contadorXwing = contadorXwing -4
    }
        
    contadorXwing = contadorXwing + 1

}

function playFighter(play){
    if(contadorFighter === 0){
    som_fighter.play()
    console.log(contadorFighter)
    }
    if(contadorFighter === 1){
    som_fighter2.play()
    console.log(contadorFighter)
    contadorFighter = contadorFighter -2
    }
        
    contadorFighter = contadorFighter + 1

}

function playMillennium(play){
    if(contadorMillennium === 0){
    som_millennium.play()
    console.log(contadorMillennium)
    }
    if(contadorMillennium === 1){
    som_millennium2.play()
    console.log(contadorMillennium)
    }
    if(contadorMillennium === 2){
    som_millennium3.play()
    console.log(contadorMillennium)
    contadorMillennium = contadorMillennium -3
    }
    contadorMillennium = contadorMillennium + 1

}