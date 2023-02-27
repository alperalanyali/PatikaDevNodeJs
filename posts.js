let posts = [
    { title: 'post 1', description: 'Post 1 içerigi', date: '2018' },
    { title: 'post 2', description: 'Post 2 içerigi 2', date: '2019' },
    { title: 'post 3', description: 'Post 3 içerigi 2', date: '2020' },
    { title: 'post 4', description: 'Post 4 içerigi 2', date: '2021' },
]

let listPosts = () => {
    posts.map(post => {
        console.log(post.title, post.description, post.date)
    })
}

let addPosts = () => {
    let promiseAddPost = new Promise((resolve, reject) => {
        posts.push({ title: 'post 5', description: 'Post 5 icerigi', date: '2022' })
        resolve('Post eklendi')
    })

    return promiseAddPost
}

async function addListPosts() {
    try {
        let response = await addPosts()
        console.log(response)
        listPosts()
    } catch (error) {
        console.log('hata olustu')
    }
}

addListPosts()