document.addEventListener("DOMContentLoaded", function() {
    let data = [];

    // Function to load JSON data using AJAX
    function loadJSON(callback) {
        const xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'star_wars_movies.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(JSON.parse(xobj.responseText));
            }
        };
        xobj.send(null);
    }

    // Function to perform Bubble Sort
    function bubbleSort(arr, key, order = 'asc') {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (order === 'asc' ? arr[j][key] > arr[j + 1][key] : arr[j][key] < arr[j + 1][key]) {
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

    // Function to load data and display initially
    loadJSON(function(response) {
        data = response.Search;
        displayResults(data);
    });

    // Function to sort movies
    window.sortMovies = function(order) {
        const sortedItems = bubbleSort([...data], 'Year', order);
        displayResults(sortedItems);
    }
});
