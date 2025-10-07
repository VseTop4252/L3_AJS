const userPromise = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const resultUsers = users.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        }))
        resolve(console.log(resultUsers))
    })
    .catch(error => reject(console.log(error)))
})