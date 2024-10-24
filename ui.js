document.addEventListener('DOMContentLoaded', function () {
    // HTML 요소 동적으로 생성
    const body = document.querySelector('body');

    // 검색 폼 생성
    const searchForm = document.createElement('form');
    searchForm.id = 'search-form';
    searchForm.style.margin = '20px';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'search-input';

    searchInput.style.padding = '10px';
    searchInput.style.fontSize = '16px';
    searchInput.style.width = '300px';
    searchInput.style.border = '1px solid #ccc';
    searchInput.style.borderRadius = '4px';

    const searchButton = document.createElement('button');
    searchButton.type = 'submit';
    searchButton.textContent = '검색';
    searchButton.style.padding = '10px';
    searchButton.style.fontSize = '16px';
    searchButton.style.border = 'none';
    searchButton.style.backgroundColor = '#007bff';
    searchButton.style.color = 'white';
    searchButton.style.cursor = 'pointer';
    searchButton.style.borderRadius = '4px';
    searchButton.style.marginLeft = '10px';

    searchButton.addEventListener('mouseover', function () {
        searchButton.style.backgroundColor = '#0056b3';
    });

    searchButton.addEventListener('mouseout', function () {
        searchButton.style.backgroundColor = '#007bff';
    });

    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);
    body.appendChild(searchForm);

    // 검색 결과 컨테이너 생성
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'results';
    resultsContainer.style.display = 'flex';
    resultsContainer.style.flexDirection = 'column';
    resultsContainer.style.alignItems = 'center';
    resultsContainer.style.width = '80%';
    resultsContainer.style.maxWidth = '800px';
    resultsContainer.style.marginTop = '20px';
    body.appendChild(resultsContainer);

    // 영화 정보를 화면에 표시하는 함수
    function displayMovies(movies) {
        resultsContainer.innerHTML = '';
        if (movies.length === 0) {
            resultsContainer.innerHTML = '<p>검색 결과가 없습니다</p>';
            return;
        }

        movies.forEach((movie) => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.style.backgroundColor = 'white';
            movieElement.style.padding = '20px';
            movieElement.style.margin = '10px';
            movieElement.style.width = '100%';
            movieElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            movieElement.style.borderRadius = '8px';

            const movieTitle = document.createElement('h2');
            movieTitle.textContent = movie.title;
            movieTitle.style.margin = '0';
            movieTitle.style.fontSize = '24px';
            movieTitle.style.color = '#333';

            const movieReleaseDate = document.createElement('p');
            movieReleaseDate.textContent = `개봉일: ${movie.release_date}`;
            movieReleaseDate.style.margin = '5px 0';
            movieReleaseDate.style.color = '#666';

            const movieRating = document.createElement('p');
            movieRating.textContent = `평점: ${movie.vote_average}`;
            movieRating.style.margin = '5px 0';
            movieRating.style.color = '#666';

            const bookmarkButton = document.createElement('button');
            bookmarkButton.textContent = '북마크';
            bookmarkButton.style.marginTop = '10px';
            bookmarkButton.style.padding = '10px';
            bookmarkButton.style.fontSize = '16px';
            bookmarkButton.style.border = 'none';
            bookmarkButton.style.backgroundColor = '#28a745';
            bookmarkButton.style.color = 'white';
            bookmarkButton.style.cursor = 'pointer';
            bookmarkButton.style.borderRadius = '4px';

            bookmarkButton.addEventListener('mouseover', function () {
                bookmarkButton.style.backgroundColor = '#218838';
            });

            bookmarkButton.addEventListener('mouseout', function () {
                bookmarkButton.style.backgroundColor = '#28a745';
            });

            bookmarkButton.addEventListener('click', function () {
                toggleBookmark(movie.id);
            });

            movieElement.appendChild(movieTitle);
            movieElement.appendChild(movieReleaseDate);
            movieElement.appendChild(movieRating);
            movieElement.appendChild(bookmarkButton);
            resultsContainer.appendChild(movieElement);
        });
    }

    // TMDB API와 영화 검색 함수는 기존 JavaScript 코드와 동일하게 사용
});

