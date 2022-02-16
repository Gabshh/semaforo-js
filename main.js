'use strict'

const desligado = document.getElementById('desligado')
const vermelho = document.getElementById('vermelho')
const amarelo = document.getElementById('amarelo')
const verde = document.getElementById('verde')
const buttonDesligado = document.getElementById('buttonDesligado')
const automatico = document.getElementById('automatico')
let idAutomatizar = null

// Ligando o semáforo/Mudando o estado
const ligarVermelho = () => {
    desligado.src = './img/vermelho.png'
}

const ligarAmarelo = () => {
    desligado.src = './img/amarelo.png'
}

const ligarVerde = () => {
    desligado.src = './img/verde.png'
}
const desligarSemaforo = () => {
    desligado.src = './img/desligado.png'
    clearInterval(idAutomatizar)
}

// Estado do semáforo 
const farolDesligado = () => {
    return desligado.src.includes('desligado')
}

const farolVermelho = () => {
    return desligado.src.includes('vermelho')
}

const farolAmarelo = () => {
    return desligado.src.includes('amarelo')
}

const farolVerde = () => {
    return desligado.src.includes('verde')
}

const automatizar = () => {
    if(farolDesligado()) {
        ligarVermelho()
    }else if(farolVermelho()) {
        ligarVerde()
    } else if(farolVerde()) {
        ligarAmarelo()
    } else if (farolAmarelo()) {
        ligarVermelho()
    }
}

const automatizarSemaforo = () => {
    if(idAutomatizar == null) {
        idAutomatizar = setInterval(automatizar, 500)
        automatico.textContent = "Parar"
    }else{
        clearInterval(idAutomatizar)
        automatico.textContent = "Automáico"
        idAutomatizar = null
    }
}


vermelho.addEventListener('click', ligarVermelho)
amarelo.addEventListener('click', ligarAmarelo)
verde.addEventListener('click', ligarVerde)
automatico.addEventListener('click', automatizarSemaforo)
buttonDesligado.addEventListener('click', desligarSemaforo)
