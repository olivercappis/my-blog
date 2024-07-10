const username = document.getElementById('username')
const title = document.getElementById('title')
const content = document.getElementById('content')
const submitButton = document.getElementById('submit')
let posts = []

let x = localStorage.getItem('posts')
let postsFromLocal = JSON.parse(x)
// console.log(postsFromLocal)
if (postsFromLocal !== null) {
    posts = postsFromLocal
}

function storeResponse(event) {
    event.preventDefault()

    // let formComplete = 'no'
    // while (formComplete === 'no') {
    if (username.value === '' ||
        title.value === '' ||
        content.value === '') {
        alert('Please fill in all fields')
    } else {

        formComplete = 'yes'
        let post = {
            username: username.value,
            title: title.value,
            content: content.value,
        }
        posts.push(post)
        localStorage.setItem('posts', JSON.stringify(posts))
        window.location.href = "./blog.html"
    }
    //}
}


submitButton.addEventListener('click', (storeResponse))