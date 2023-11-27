// Selecting Elements
const jokeElement = document.querySelector(".joke-card h2");
const punchlineElement = document.querySelector(".joke-card h3");
const jokeButton = document.querySelector(".joke-card .btn");

// Fetching a Joke
function fetchJoke() {
  fetch(
    "https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Christmas?blacklistFlags=religious,political,racist&type=twopart"
  )
    .then((response) => response.json())
    .then((data) => {
      // Displaying the joke and the punchline
      jokeElement.textContent = data.setup;
      punchlineElement.textContent = data.delivery;
    })
    .catch((error) => console.error("Error:", error));
}

fetchJoke();

jokeButton.addEventListener("click", fetchJoke);
