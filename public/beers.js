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
      `<div>
        <li _id=${beer._id}>${beer.display_name}</li>
        <li _id=${beer._id}>${beer.brewer_name}</li>
        <li _id=${beer._id}>${beer.associated_business}</li>
        <li _id=${beer._id}>${beer.on_draft}</li>
       </div>`
    );
    // code to create an event listener
  });
}


function deleteBeer() {
  // code to delete from database
  renderBeers();
}