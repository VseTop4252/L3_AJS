const ToDosPromise = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(toDos => {
        const falsyToDos = toDos.filter(toDo => toDo.completed == false)
        resolve(console.log(falsyToDos))
    })
    .catch(error => reject(console.log(error)))
})