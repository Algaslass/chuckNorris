const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("jokeText");


jokeBtn.addEventListener('click', function(){
    const url = 'https://api.chucknorris.io/jokes/random';
    console.log(url)
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data.value.joke);
            jokeText.innerHTML = data.value
        })
})