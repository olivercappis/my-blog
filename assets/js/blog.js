const x = localStorage.getItem('posts')
const section = $('.main')

const posts = JSON.parse(x)
console.log(posts[0].username)

for (let i = 0; i < posts.length; i++) {
    const divEl = $('<div>')
    const titleEl = $('<h3>')
    const breakEl = $('<hr>')
    const contentEl = $('<p>')
    const usernameEl = $('<p>')

    section.append(divEl)
    divEl.append(titleEl)
    divEl.append(breakEl)
    divEl.append(contentEl)
    divEl.append(usernameEl)

    divEl.addClass('post')
    contentEl.addClass('content')
    usernameEl.addClass('username')
    titleEl.text(posts[i].title)
    contentEl.text(posts[i].content)
    usernameEl.text(posts[i].username)


}

const button = document.getElementById('back')
button.addEventListener('click', function () {
    window.location.href = "./index.html"
})