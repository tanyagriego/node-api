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
          <li _id=${beer._id} class= "beer-list-item">${beer.display_name}</li>
          <li _id=${beer._id} class= "beer-list-item">${beer.brewer_name}</li>
          <li _id=${beer._id} class= "beer-list-item">${beer.associated_business}</li>
          <li _id=${beer._id} class= "beer-list-item">${beer.on_draft}</li></br>
        </ul>
        <button class="delete" attr="data-beer-id">Delete</button>
        </div>`
    );   
     // code to create an event listener
  });
}
//This function deletes a beer from the database
function deleteRequest() {
  // Need something here which acknowledges the user's/frontend and then puts that request onto the end of the url string
  let deletedBeer = /*need to access the ID of the beer user wants to delete*/;
  return fetch(`http://localhost:3000/api/beers/${deletedBeer}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
  })
  .then(response => response.json())
  .then (beer => {
    deleteBeer(beer);
  });
}

//This function deletes a beer from the DOM. Note: Add an alert/confirmation feature so the user can confirm the deletion before deleting
function deleteBeer() {
  console.log("Delete function fired");
 $('#beersList').on('click',".delete", function() {
    $(this).parent().remove();
    deleteRequest('#data-beer-id');
  })
};

//Post a new beer
// function postBeer(event) {
//   event.preventDefault();
// }

deleteBeer();

