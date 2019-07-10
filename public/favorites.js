(function fetchFavorites() {
  
  // const authToken = JSON.parse(localStorage.getItem('authToken'));
  const authtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWM2ZjAxMmQ3MzY4NWM2Yzk5NGY2NWUwIiwidXNlcm5hbWUiOiJwaWVycmUiLCJmaXJzdF9uYW1lIjoiYm9iYnkiLCJsYXN0X25hbWUiOiJ0YWJsZXMifSwiaWF0IjoxNTUwNzgwMjM2LCJleHAiOjE1NTEzODUwMzYsInN1YiI6InBpZXJyZSJ9.FnTg6H1mgA1_Tekce7-ryNvBhQ7ebkamBlh_6xBa_-U';
  const userId = localStorage.getItem('userId');
  return fetch(`http://localhost:8080/api/users/${userId}/favorites`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authtoken}`
    },
    mode: 'cors'
  })
  .then(response => response.json())
  .then(beers => renderBeers(beers));
})();

function renderBeers(beers) {
  beers.forEach(beer => {
    console.log('beer: ', beer);
    $( "#beersList" ).append(
      `<div class="beer-list-results">
        <ul>
          <li class= "beer-list-item">${beer.display_name}</li>
          <li class= "beer-list-item">${beer.brewer_name}</li>
          <li class= "beer-list-item">${beer.associated_business}</li>
          <li class= "beer-list-item">${beer.on_draft}</li></br>
        </ul>
        <button class="delete" data-beer-id="${beer._id}">Delete</button>
      </div>`
    );   
  });
}

function deleteRequest(beerId, $deletedObj) {
  return fetch(`http://localhost:8080/api/beers/${beerId}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
  })
  .then (() => $deletedObj.remove())
    //Add confirmation that beer was successfully deleted
}

function deleteBeer() {
  console.log("Delete function fired");
 $('#beersList').on('click', ".delete", function() {
    let $deletedObj = $(this).parent();
    let beerId = $(this).attr('data-beer-id');
    deleteRequest(beerId, $deletedObj);
  })
};

deleteBeer();

