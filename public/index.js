//This function submits a GET request/registers a click event and grabs the user's input

// const authtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWM2ZjAxMmQ3MzY4NWM2Yzk5NGY2NWUwIiwidXNlcm5hbWUiOiJwaWVycmUiLCJmaXJzdF9uYW1lIjoiYm9iYnkiLCJsYXN0X25hbWUiOiJ0YWJsZXMifSwiaWF0IjoxNTUwNzgwMjM2LCJleHAiOjE1NTEzODUwMzYsInN1YiI6InBpZXJyZSJ9.FnTg6H1mgA1_Tekce7-ryNvBhQ7ebkamBlh_6xBa_-U';


//This function registers a click event and grabs the user's input/beer query
(function () {
    $(".search-form").submit (event => {
        console.log("Submit function fired");
        event.preventDefault();
        const searchTermVal = $(event.currentTarget).find(".search-box")
        .val();
        localStorage.setItem('searchTermVal', JSON.stringify(searchTermVal));
        // fetchBeer();
        window.location.href = "http://localhost:3000/beers";
    })

//This function registers a click event and grabs the user's input for registration
    $(".registration").submit (event => {
        console.log("registration function fired");
        event.preventDefault();
        const username = $(event.currentTarget).find(".username").val();
        const password = $(event.currentTarget).find(".password").val();
        const first_name = $(event.currentTarget).find(".first-name").val();
        const last_name = $(event.currentTarget).find(".last-name").val();
        const user = {username, password, first_name, last_name};
        registerUser(user);
    })
})();

function registerUser(user) {
  console.log('registerUser: ', user);
  return fetch('http://localhost:3000/api/users/', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    mode: 'cors',
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(auth => {
    console.log('we are in there. Go us!', auth);
    localStorage.setItem('currentUser', user);
    getAuthToken(user);
  });
}

function getAuthToken(user) {
  // const authtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWM2ZjAxMmQ3MzY4NWM2Yzk5NGY2NWUwIiwidXNlcm5hbWUiOiJwaWVycmUiLCJmaXJzdF9uYW1lIjoiYm9iYnkiLCJsYXN0X25hbWUiOiJ0YWJsZXMifSwiaWF0IjoxNTUwNzgwMjM2LCJleHAiOjE1NTEzODUwMzYsInN1YiI6InBpZXJyZSJ9.FnTg6H1mgA1_Tekce7-ryNvBhQ7ebkamBlh_6xBa_-U';
  const {username, password } = user;
  return fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify({username, password})
  })
  .then(response => response.json())
  .then(auth => {
    localStorage.setItem('authToken', auth.authToken);
    const {username, password} = user;
    talkToProtected(username, password)
  });
}

function talkToProtected(username, password) {
  return fetch('http://localhost:3000/api/protected', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + authtoken
    },
    mode: 'cors',
    body: {username, password}
  })
  .then(response => response.json())
  .then(auth => {
    console.log(auth);
  });
}