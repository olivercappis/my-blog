const username = document.getElementById('username')
const title = document.getElementById('title')
const content = document.getElementById('content')
const submitButton = document.getElementById('submit')
const posts = []

function storeResponse(event) {
    event.preventDefault()
    let post = {
        username: username.value,
        title: title.value,
        content: content.value,
    }
    posts.push(post)
    console.log(posts)
}


submitButton.addEventListener('click', storeResponse)