async function fetchJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }
        const data = await response.json();
        document.getElementById('joke').innerText = data.value;
    } catch (error) {
        document.getElementById('joke').innerText = 'Error fetching joke: ' + error.message;
    }
}
