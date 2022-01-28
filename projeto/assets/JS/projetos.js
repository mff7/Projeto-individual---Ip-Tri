const projeto1 = document.querySelector(".projeto1")
const projeto2 = document.querySelector(".projeto2")
const projeto3 = document.querySelector(".projeto3")
const projeto4 = document.querySelector(".projeto4")
const texto1 = document.querySelector(".texto1")
const texto2 = document.querySelector(".texto2")
const texto3 = document.querySelector(".texto3")
const texto4 = document.querySelector(".texto4")
const bannerSecundario1 = document.querySelector(".banner-secundario1")
const bannerSecundario2 = document.querySelector(".banner-secundario2")
const bannerSecundario3 = document.querySelector(".banner-secundario3")
const bannerSecundario4 = document.querySelector(".banner-secundario4")

projeto1.addEventListener('click', () => {

    texto1.classList.toggle("projeto__texto-ativo")
    bannerSecundario1.classList.toggle("banner-secundario-ativo")

})
projeto2.addEventListener('click', () => {

    texto2.classList.toggle("projeto__texto-ativo")
    bannerSecundario2.classList.toggle("banner-secundario-ativo")

})
projeto3.addEventListener('click', () => {

    texto3.classList.toggle("projeto__texto-ativo")
    bannerSecundario3.classList.toggle("banner-secundario-ativo")

})
projeto4.addEventListener('click', () => {

    texto4.classList.toggle("projeto__texto-ativo")
    bannerSecundario4.classList.toggle("banner-secundario-ativo")

})