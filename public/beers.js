 (function fetchBeer() {
  let searchTermValue = localStorage.getItem('searchTermVal');
  searchTermValue = JSON.parse(searchTermValue);
  return fetch(`http://localhost:3000/api/beers?type=${searchTermValue}`, {
    method: 'GET',
    headers: {"Accept": "application/json", 'Content-Type': 'application/json'},
    mode: 'cors'
  }).then(data => {
    return data.json();
  }).then(beers => {
    renderBeers(beers);
  });
})();

function renderBeers(beers) {
  beers.forEach(beer => {
    console.log('beer: ', beer);
    $( "#beersList" ).append(
      `<div class="beer-list-results">
        <ul>
          <li _id=${beer._id} class= "beer-list-item">${beer.display_name}</li>
          <li _id=${beer._id} class= "beer-list-item">${beer.brewer_name}</li>
          <li _id=${beer._id} class= "beer-list-item">${beer.associated_business}</li>
          <li _id=${beer._id} class= "beer-list-item">${beer.on_draft}</li></br>
        </ul>
        <button class="delete">Delete</button>
        </div>`
    );   
     // code to create an event listener
  });
}
//This function deletes a beer from the database
function deleteRequest(beer, url) {
  let searchTermValue = localStorage.getItem('searchTermVal');
  searchTermValue = JSON.parse(searchTermValue);
  return fetch(`http://localhost:3000/api/beers?type=${searchTermValue}`, {
    method: 'delete',
  })
  .then(response => response.json())
  .then (beer => {
    deleteBeers(beer);
  });
}

function deleteBeer() {
  console.log("Delete function fired");
  //when the delete button is clicked
 $('#beersList').on('click',".delete", function() {
    console.log("Click Event Fired")
  //remove the div that holds targeted beer from the DOM (would '.beer-list-results' remove all beers, in this case??)
    $(this).parent().slideUp();
  })
};

deleteBeer();
