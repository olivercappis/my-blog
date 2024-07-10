const styleButton = document.getElementById('lightMode')
const container = document.querySelector('.container')
const header = document.querySelector('header')

let mode = 'light'

function switchMode() {
    console.log('called')
    if (mode === 'light') {
        container.setAttribute('class', 'container dark')
        // header.setAttribute('class', 'dark')
        mode = 'dark'
    } else {
        container.setAttribute('class', 'container')
        // header.setAttribute('class', 'light')
        mode = 'light'
    }
}

styleButton.addEventListener('click', switchMode)