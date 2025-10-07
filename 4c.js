async function sortByTitleLength() {
    try
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        return posts.sort((firstPost, secondPost) => secondPost.title.length - firstPost.title.length)
    }
    catch (error)
    {
        console.log(error)
    }
}

sortByTitleLength().then(sortedPosts => console.log(sortedPosts))

async function sortByUserName() {
    try
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const comments = await response.json()
        return comments.sort((firstName, secondName) => firstName.name.localeCompare(secondName.name))
    }
    catch (error)
    {
        console.log(error)
    }
}

sortByUserName().then(sortedNames => console.log(sortedNames))

async function getUserFields() {
    try
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        return users.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        }))
    }
    catch (error)
    {
        console.log(error)
    }
}

getUserFields().then(userFields => console.log(userFields))

async function filterFalsyToDos() {
    try
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const toDos = await response.json()
        return toDos.filter(toDo => toDo.completed == false)
    }
    catch (error)
    {
        console.log(error)
    }
}

filterFalsyToDos().then(falsyToDos => console.log(falsyToDos))