// (function fetchBeer() {
//   let searchTermValue = localStorage.getItem('searchTermVal');
//   searchTermValue = JSON.parse(searchTermValue);
//   return fetch(`http://localhost:3000/api/beers?type=${searchTermValue}`, {
//     method: 'GET',
//     headers: {"Accept": "application/json", 'Content-Type': 'application/json'},
//     mode: 'cors'
//   })
//   .then(response => response.json())
//   .then(beers => {
//     renderBeers(beers);
//   });
// })();

(function fetchBeer() {
    let searchTermValue = localStorage.getItem('searchTermVal');
    searchTermValue = JSON.parse(searchTermValue);
    // const authToken = JSON.parse(localStorage.getItem('authToken'));
  
  
    const authtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWM2ZjAxMmQ3MzY4NWM2Yzk5NGY2NWUwIiwidXNlcm5hbWUiOiJwaWVycmUiLCJmaXJzdF9uYW1lIjoiYm9iYnkiLCJsYXN0X25hbWUiOiJ0YWJsZXMifSwiaWF0IjoxNTUwNzgwMjM2LCJleHAiOjE1NTEzODUwMzYsInN1YiI6InBpZXJyZSJ9.FnTg6H1mgA1_Tekce7-ryNvBhQ7ebkamBlh_6xBa_-U';
  
    return fetch(`http://localhost:3000/api/beers?type=${searchTermValue}`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authtoken}`
      },
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
        </div>`
      );
    });
  }