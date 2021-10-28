const handleMenu = document.querySelector('.handle-menu')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const navegacao = document.querySelector('.navegacao')
const body = document.querySelector('.body')

function toggleClass(){
  if(hamburgerMenu.classList.contains('animate')){
    hamburgerMenu.classList.remove('animate')
    navegacao.classList.remove('ativado')
    body.classList.remove('scroll-block')
  } else {
    hamburgerMenu.classList.add('animate')
    navegacao.classList.add('ativado')
    body.classList.add('scroll-block')
  }
}

handleMenu.addEventListener("click", toggleClass, false)