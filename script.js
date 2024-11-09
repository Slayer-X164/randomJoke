const jokeBox = document.querySelector(".jokeBox");
const btn = document.querySelector(".btn");
let jokeData = {}
//fetching data from api
async function getJokeData(){
    const res = await fetch ('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,sexist,explicit&type=twopart')
    const data = await res.json()
    jokeData = data
    displayJoke(jokeData)
}

// Display the joke on the page
function displayJoke(joke) {
    jokeBox.innerHTML = `
        <p>😊</p>
        <h1>"${joke.setup}"</h1>
        <h2>${joke.delivery}</h2>
    `;
}


btn.addEventListener("click", () => {
    getJokeData();
});


getJokeData();
