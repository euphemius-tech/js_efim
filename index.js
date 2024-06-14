document.addEventListener("DOMContentLoaded", function() {
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
        const apiKey = 'YOUR_OMDB_API_KEY'; // Replace with your OMDb API key
        const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    const sortedItems = bubbleSort(data.Search, 'Title');
                    displayResults(sortedItems);
                } else {
                    alert('No movies found!');
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }
});
