let nav = document.querySelector('.nav--list')

let menuButton = document.querySelector('.open-menu')

let loginButton = document.querySelector('.mobile--button')

let signInButton = document.querySelector('.redMobile--button')

let menuOptions = document.querySelector('li')

menuButton.addEventListener('click', navBar)

function navBar() {
    nav.classList.toggle('active')
    menuButton.classList.toggle('active')
    loginButton.classList.toggle('active')
    signInButton.classList.toggle('active')
    menuOptions.classList.toggle('active')
}