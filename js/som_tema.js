const botao = document.querySelector(".botao")
const musica = document.getElementById("musica")

botao.addEventListener("click", (evento) =>{
    if(evento.target.dataset.play != "tocando"){
    play()
    console.log(evento.target.dataset.play)
    }

    else{
    pause()
    console.log(evento.target.dataset.play)
    }
})

function play(evento){
    musica.play()
    somMarch.pause()
    death.setAttribute("data-star", "desativo")
    botao.setAttribute("data-play", "tocando")
    botao.innerHTML = "Tema tocando"
}

function pause(evento){
    musica.pause()
    botao.setAttribute("data-play", "pausado")
    botao.innerHTML = "Tema pausado"
}


const logo = document.getElementById("logo")
const som = document.getElementById("som_death")
const death = document.querySelector(".death")
const somMarch = document.getElementById("som_march")
const father = document.getElementById("som_father")


logo.addEventListener("click", (evento) =>{
    deathStar(evento.target.dataset.logo)
    console.log(evento)
})

function deathStar (evento){
    if(evento != "ativo"){
    som.play()
    somMarch.play()
    father.play()
    botao.setAttribute("data-play", "pausado")
    botao.innerHTML = "Tema pausado"
    musica.pause()
    death.setAttribute("data-star", "ativo")
    logo.setAttribute("data-logo", "ativo")
    botao.innerHTML = "Tocando a Marcha"
    }

    if(evento === "ativo" ){
    death.setAttribute("data-star", "desativo")
    logo.setAttribute("data-logo", "desativo")
    somMarch.pause()
    }
}