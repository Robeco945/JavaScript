document.getElementById("searchForm").addEventListener("submit", async function (event) {
  event.preventDefault();
  const query = document.getElementById("query").value;
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;})


