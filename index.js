 document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('searchInput');
            const movieList = document.getElementById('movieList');
            const movies = Array.from(movieList.getElementsByClassName('movie-card'));

            // Функція пошуку фільмів
            searchInput.addEventListener('input', function () {
                const searchQuery = searchInput.value.toLowerCase();
                movies.forEach(movie => {
                    const title = movie.querySelector('h3').textContent.toLowerCase();
                    if (title.includes(searchQuery)) {
                        movie.style.display = 'block';
                    } else {
                        movie.style.display = 'none';
                    }
                });
            });

            // Перенаправлення при натисканні на зображення
            movies.forEach(card => {
                card.querySelector('img').addEventListener('click', () => {
                    const url = card.getAttribute('data-url');
                    if (url) {
                        window.location.href = url;
                    }
                });
            });
        });
