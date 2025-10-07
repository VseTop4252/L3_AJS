fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => console.log(posts.sort((firstPost, secondPost) => secondPost.title.length - firstPost.title.length)))