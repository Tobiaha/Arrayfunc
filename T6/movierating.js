'use strict';

function movieRate() {
    const movies = [];
    while (true) {
        const title = prompt('Please enter the details of movie or type "done" to quit:')

        if (title.toLowerCase() === 'done') {
            break;
        }

        const rating = parseInt(prompt(`Please enter the rating for the movie ${title}:`));
        if (!isNaN(rating) && rating >= 0 && rating <= 5) {
            const movie = {
                title: title,
                rating: rating,
            };
            movies.push(movie);
        } else {
            console.log('Rating is invalid. Try rating between 1 and 5');
        }
    }
    movies.sort((a, b) => b.rating - a.rating);
    const targetresult = document.getElementById('result');
    targetresult.innerHTML = '';

    if (movies.length > 0) {
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.textContent = `${movie.title} - Rating: ${movie.rating}`;
            targetresult.appendChild(movieItem);
        });
    }
}

movieRate();

