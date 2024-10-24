

options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjg5ODFjNDQwNzc1YzQwZjU0MjZiOTQ4MGI1N2EyNSIsIm5iZiI6MTcyOTY4NDkxMC44Njg4NjksInN1YiI6IjY3MTZmOGUxMmI5ZjM0MjQ5YWU5ZjljYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m1E27aS5X49dWRQvqZejxYQpHURdyoZRU5mdJ_7YAgw'
    }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', option)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));



const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjg5ODFjNDQwNzc1YzQwZjU0MjZiOTQ4MGI1N2EyNSIsIm5iZiI6MTcyOTY4NDkxMC44Njg4NjksInN1YiI6IjY3MTZmOGUxMmI5ZjM0MjQ5YWU5ZjljYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m1E27aS5X49dWRQvqZejxYQpHURdyoZRU5mdJ_7YAgw'
    }
};

fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

const optionss = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjg5ODFjNDQwNzc1YzQwZjU0MjZiOTQ4MGI1N2EyNSIsIm5iZiI6MTcyOTY4NDkxMC44Njg4NjksInN1YiI6IjY3MTZmOGUxMmI5ZjM0MjQ5YWU5ZjljYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m1E27aS5X49dWRQvqZejxYQpHURdyoZRU5mdJ_7YAgw'
    }
};

fetch('https://api.themoviedb.org/3/movie/movie_id/images', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
