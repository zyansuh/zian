// HTML 요소 설정
const apiKey = 'YOUR_TMDB_API_KEY';
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

// 폼 제출 이벤트 리스너
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const query = searchInput.value;
    if (query) {
        fetchMovies(query);
    }
});

// TMDB API에서 영화 데이터를 가져오는 함수
async function fetchMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('데이터 가져오기에 실패했습니다');
        }
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error('오류:', error);
    }
}

// 영화 검색 결과를 화면에 표시하는 함수
function displayMovies(movies) {
    resultsContainer.innerHTML = '';
    if (movies.length === 0) {
        resultsContainer.innerHTML = '<p>검색 결과가 없습니다</p>';
        return;
    }

    movies.forEach((movie) => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
      <h2>${movie.title}</h2>
      <p>개봉일: ${movie.release_date}</p>
      <p>평점: ${movie.vote_average}</p>
      <button onclick="toggleBookmark('${movie.id}')">북마크</button>
    `;
        resultsContainer.appendChild(movieElement);
    });
}

// 북마크 기능을 처리하는 함수
function toggleBookmark(movieId) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    if (bookmarks.includes(movieId)) {
        bookmarks = bookmarks.filter((id) => id !== movieId);
        alert('북마크가 제거되었습니다');
    } else {
        bookmarks.push(movieId);
        alert('북마크가 추가되었습니다');
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

// 북마크를 로드하는 함수
function loadBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    if (bookmarks.length > 0) {
        resultsContainer.innerHTML = '<h3>북마크된 영화:</h3>';
        bookmarks.forEach((id) => {
            // 각 북마크에 대한 영화 정보를 가져옴
            fetchMovieById(id);
        });
    }
}

// 영화 ID로 영화 정보를 가져오는 함수
async function fetchMovieById(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('영화 정보 가져오기에 실패했습니다');
        }
        const movie = await response.json();
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
      <h2>${movie.title}</h2>
      <p>개봉일: ${movie.release_date}</p>
      <p>평점: ${movie.vote_average}</p>
    `;
        resultsContainer.appendChild(movieElement);
    } catch (error) {
        console.error('오류:', error);
    }
}

// 페이지 로드 시 북마크 로드
window.addEventListener('DOMContentLoaded', loadBookmarks);