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
        <button class="delete">Delete</button>
        </div>`
    );   
     // code to create an event listener
  });
}
//This function deletes a beer from the database
function deleteRequest() {
  // Need something here which acknowledges the user's/frontend and then puts that request onto the end of the url string
  // let deletedBeer = something about the id?
  return fetch(`http://localhost:3000/api/beers/${deletedBeer}`, {
    method: 'delete',
  })
  .then(response => response.json())
  .then (beer => {
    deleteBeer(beer);
  });
}

//This function deletes a beer from the DOM. Note: Add an alert/confirmation feature so the user can confirm the deletion before deleting
function deleteBeer() {
  console.log("Delete function fired");
  //when the delete button is clicked
 $('#beersList').on('click',".delete", function() {
    console.log("Click Event Fired")
  //remove the div that holds targeted beer from the DOM (would '.beer-list-results' remove all beers, in this case??)
    $(this).parent().remove();
  })
};

deleteBeer();
deleteRequest();