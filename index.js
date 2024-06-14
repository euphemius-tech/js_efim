document.addEventListener("DOMContentLoaded", function() {
    // Example data
    const data = [
        { name: "Apple", category: "Fruit" },
        { name: "Carrot", category: "Vegetable" },
        { name: "Banana", category: "Fruit" },
        // Add more items here
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
            card.innerHTML = `<p>${item.name} - ${item.category}</p>`;
            resultsContainer.appendChild(card);
        });
    }

    // Function to search items
    window.searchItems = function(event) {
        event.preventDefault();
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const filteredItems = data.filter(item => item.name.toLowerCase().includes(searchTerm));
        const sortedItems = bubbleSort(filteredItems, 'name');
        displayResults(sortedItems);
    }
});
