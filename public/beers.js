const port = 3000;
(function fetchBeer() {
	let searchTermValue = localStorage.getItem('searchTermVal');
	searchTermValue = JSON.parse(searchTermValue);
	const authToken = JSON.parse(localStorage.getItem('authToken'));
	const authtoken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWM2ZjAxMmQ3MzY4NWM2Yzk5NGY2NWUwIiwidXNlcm5hbWUiOiJwaWVycmUiLCJmaXJzdF9uYW1lIjoiYm9iYnkiLCJsYXN0X25hbWUiOiJ0YWJsZXMifSwiaWF0IjoxNTUwNzgwMjM2LCJleHAiOjE1NTEzODUwMzYsInN1YiI6InBpZXJyZSJ9.FnTg6H1mgA1_Tekce7-ryNvBhQ7ebkamBlh_6xBa_-U';

	return fetch(`http://localhost:${port}/api/beers?type=${searchTermValue}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',	
			// Authorization: `Bearer ${authtoken}`
		},
		mode: 'cors'
	})
		.then((response) => response.json())
		.then((beers) => {
			renderBeers(beers);
		});
})();

function renderBeers(beers) {
	beers.forEach((beer) => {
		console.log('beer: ', beer);
		$('#beersList').append(
			`<div class="beer-list-results">
          <ul>
            <li class= "beer-list-item">${beer.display_name}</li>
            <li class= "beer-list-item">${beer.brewer_name}</li>
            <li class= "beer-list-item">${beer.associated_business}</li>
            <li class= "beer-list-item">${beer.on_draft}</li></br>
          </ul>
          <button class="favorite-button" data-beer-id="${beer._id}">Favorite</button>
        </div>`
		);
	});
}

function saveFavoriteBeerRequest(favoriteBeerId) {
	console.log('saveFavroiteBeerRequest function fired');
	const userId = localStorage.getItem('userId');
	return (
		fetch(`http://localhost:${port}/api/users/${userId}/favorites`, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			mode: 'cors',
			body: JSON.stringify({
				favorite_beer_id: favoriteBeerId
			})
		})
			// .then(response => response.json())
			.then((auth) => {
				console.log('we are in there. Go us!', auth);
			})
	);
}

function favoriteBeer() {
	console.log('Favorite function fired');
	$('#beersList').on('click', '.favorite-button', function() {
		let $favorite = $(this).parent();
		let beerId = $(this).attr('data-beer-id');
		console.log('favorite beer id:', beerId);
		saveFavoriteBeerRequest(beerId, $favorite);
	});
}

favoriteBeer();
