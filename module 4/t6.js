document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = document.getElementById('query').value.trim();
    const jokesContainer = document.getElementById('jokesContainer');
    jokesContainer.innerHTML = '';
    if (!query) {
        jokesContainer.innerHTML = '<p>Please enter a valid search</p>';
        return;
    }
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data.result.length === 0) {
            jokesContainer.innerHTML = '<p>No jokes found. Try a different search</p>';
            return;
        }
        data.result.forEach(joke => {
            const jokeArticle = document.createElement('article');
            const jokeParagraph = document.createElement('p');
            jokeParagraph.textContent = joke.value;
            jokeArticle.appendChild(jokeParagraph);
            jokesContainer.appendChild(jokeArticle);
        });
    } catch (error) {
        console.error('Error fetching jokes:', error.message);
        jokesContainer.innerHTML = '<p>There was an error fetching jokes</p>';
    }
});
