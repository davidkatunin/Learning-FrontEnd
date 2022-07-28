const resultsList = document.querySelector('.results')
isModalOpen = true



function resultHTML(anime) {
    if (anime.episodes === null) {
        anime.episodes = 'Still Airing'
    }
    return `<div class="result">
    <div class="result--img-wrapper">
        <img src="${anime.image}" class="result--img">
    </div>
    <div class="result--info">
        <div class="title"><h1 class="anime--title">${anime.title}</h1></div>
        <div class="episodes">
            <i class="fa-solid fa-film"></i>
            ${anime.episodes}
        </div>
    </div>
</div>`
}

function showNo() {
    return `<div class="show--none">
    <div class="none-img--wrapper">
        <img src="https://9anime.id/assets/_9anime/imagesv2/bg-error3.png" alt="" class="none-img">
    </div>
    <div class="none-text">
        Nothing to Display
    </div>
</div>`
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd9d8250088msh55824211245aee6p18de5bjsn413227e12efc',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

async function getAnimes() {
    const results = await fetch('https://anime-db.p.rapidapi.com/anime?page=3&size=12', options)
    resultsData = await results.json()
    animes = results
    resultsList.innerHTML = resultsData.data.map(post => resultHTML(post)).join("")
} 

async function searchAnimes(search) {
    const results = await fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=12&search=${search}`, options)
    resultsData = await results.json()
    resultsList.innerHTML = resultsData.data.map(post => resultHTML(post)).join("")
    animes = results
    if (resultsData.data.length == 0 ) {
        resultsList.innerHTML = showNo()
    }
}

async function searchPage(event) {
    const input = document.getElementById('search').value
    searchAnimes(input)
}


async function filterAnimes(event) {
    const filter = event.target.value

    if (filter === 'STANDARD') {
        const results = await fetch(`${animes.url}&sortBy=ranking&sortOrder=asc`,options)
        resultsData = await results.json()
        resultsList.innerHTML = resultsData.data.map(post => resultHTML(post)).join("")
    }
    if (filter === 'LOW_TO_HIGH') {
        const results = await fetch(`${animes.url}&sortBy=ranking&sortOrder=desc`,options)
        resultsData = await results.json()
        resultsList.innerHTML = resultsData.data.map(post => resultHTML(post)).join("")
    }
}

getAnimes()