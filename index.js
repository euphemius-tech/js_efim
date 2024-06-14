document.addEventListener("DOMContentLoaded", function() {
    const data = [
        { Title: "The Shawshank Redemption", Year: "1994", Poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDI1LThmZTUtNWQyZmY3ZGUzMDNkXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg" },
        { Title: "The Godfather", Year: "1972", Poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmYtYTAwMC00ZGE5LTg0MzUtYjRiNWM2YjNjZGQ3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" },
        { Title: "The Dark Knight", Year: "2008", Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3ZTctYTVlOC00ZjQxLWEzNjgtY2NjZWIyYjA2YTM4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" },
        { Title: "Pulp Fiction", Year: "1994", Poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzNmItYmU0ZC00ZTY1LWE5ODQtYzU5N2NhNTZhYTAxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" },
        { Title: "Schindler's List", Year: "1993", Poster: "https://m.media-amazon.com/images/M/MV5BMWYwYjczZjItN2FkZS00Y2IzLWE5YjMtNzRmM2E2YzA0MjhkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
        { Title: "The Lord of the Rings: The Return of the King", Year: "2003", Poster: "https://m.media-amazon.com/images/M/MV5BYWZkNjRmNTgtN2E3MC00N2I2LTk5MTgtY2RmY2Q0Njg0NmE3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" },
        { Title: "Fight Club", Year: "1999", Poster: "https://m.media-amazon.com/images/M/MV5BMmEzNzQxNmYtMWU2NC00YmFhLTkzMDgtM2Q3NDg3OTBiYmNlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" },
        { Title: "Forrest Gump", Year: "1994", Poster: "https://m.media-amazon.com/images/M/MV5BZmYxZDU0NmQtZjQwZC00YzI2LWFmMjktN2FkNGFmNzE3NjQ3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" },
        { Title: "Inception", Year: "2010", Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjYwNl5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg" }
    ];

    // Function to perform Bubble Sort
    function bubbleSort(arr, key) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (arr[j][key] > arr[j + 1][key]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    // Function to display results
    function displayResults(items) {
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = "";
        items.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card-category');
            card.innerHTML = `<img src="${item.Poster}" alt="${item.Title}"><p>${item.Title} (${item.Year})</p>`;
            resultsContainer.appendChild(card);
        });
    }

    // Function to search movies
    window.searchMovies = function(event) {
        event.preventDefault();
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const filteredItems = data.filter(item => item.Title.toLowerCase().includes(searchTerm));
        const sortedItems = bubbleSort(filteredItems, 'Title');
        displayResults(sortedItems);
    }
});
