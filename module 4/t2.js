document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = document.getElementById('query').value.trim();
    if (!query) {
        console.error('Please enter a valid TV series name.');
        return;
    }
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
});
