const styleButton = document.getElementById('lightMode')
const container = document.querySelector('.content')
const header = document.querySelector('header')

let mode = 'light'

function switchMode() {
    console.log('called')
    if (mode === 'light') {
        container.setAttribute('class', 'content dark')
        header.setAttribute('class', 'dark')
        mode = 'dark'
    } else {
        container.setAttribute('class', 'content light')
        header.setAttribute('class', 'light')
        mode = 'light'
    }
}

styleButton.addEventListener('click', switchMode)