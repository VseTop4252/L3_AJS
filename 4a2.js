fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => console.log(comments.sort((firstName, secondName) => firstName.name.localeCompare(secondName.name))))