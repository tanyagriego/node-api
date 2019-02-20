(function fetchBeer() {
  let searchTermValue = localStorage.getItem('searchTermVal');
  searchTermValue = JSON.parse(searchTermValue);
  return fetch(`http://localhost:3000/api/beers?type=${searchTermValue}`, {
    method: 'GET',
    headers: {"Accept": "application/json", 'Content-Type': 'application/json'},
    mode: 'cors'
  })
  .then(response => response.json())
  .then(beers => {
    renderBeers(beers);
  });
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
  return fetch(`http://localhost:3000/api/beers/${beerId}`, {
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

//Post a new beer
// function postBeer(event) {
//   event.preventDefault();
// }

deleteBeer();

