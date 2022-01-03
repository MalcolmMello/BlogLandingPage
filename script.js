let nav = document.querySelector('.nav--list')

let menuButton = document.querySelector('.open-menu')

let loginButton = document.querySelector('.mobile--button')

let signInButton = document.querySelector('.redMobile--button')

let menuOptions = document.querySelectorAll('li')

menuButton.addEventListener('click', navBar)

menuOptions.forEach((item) => {
    item.addEventListener('click', downScreen)
})

function upScreen() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function downScreen() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    })
}

//document.documentElement.scrollHeight

function showButton() {
    if(window.scrollY === 0) {
        document.querySelector('.scroll--button').style.display = 'none'
    } else {
        document.querySelector('.scroll--button').style.display = 'block'
    }
}

window.addEventListener('scroll', showButton)

function navBar() {
    nav.classList.toggle('active')
    menuButton.classList.toggle('active')
    loginButton.classList.toggle('active')
    signInButton.classList.toggle('active')
    menuOptions.classList.toggle('active')
}
