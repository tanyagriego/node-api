'use strict';
const {User} = require('./models');
const {router} = require('./router');

module.exports = {User, router};

//This function registers a click event and grabs the user's input/beer query
(function () {
    $(".search-form").submit (event => {
        console.log("Submit function fired");
        event.preventDefault();
        const searchTermVal = $(event.currentTarget).find(".search-box")
        .val();
        localStorage.setItem('searchTermVal', JSON.stringify(searchTermVal));
        window.location.href = "http://localhost:3000/beers";
    })

//This function registers a click event and grabs the user's input for registration
    $(".register-container").submit (event => {
        console.log("registration function fired");
        event.preventDefault();
        const username = $(event.currentTarget).find(".username").val();
        const password = $(event.currentTarget).find(".password").val();
        const first_name = $(event.currentTarget).find(".first-name").val();
        const last_name = $(event.currentTarget).find(".last-name").val();
        const user = {username, password, first_name, last_name};
        registerUser(user);
    })

//somewhere in this function, we will also need to log in the new user
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

  //This function allows an existing user to log in
  $(".login-container").submit (event => {
    console.log("login function fired");
    event.preventDefault();
    const username = $(event.currentTarget).find(".username").val();
    const password = $(event.currentTarget).find(".password").val();
    const existingUser = {username, password};
    getAuthToken(existingUser);
})
})();

//post user to this this endpoint
function getAuthToken(user) {
  return fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(auth => {
    localStorage.setItem('authToken', auth.authToken);
    talkToProtected()
  });
}

//if user is authenticated above, give them access to this endpoint
function talkToProtected() {
  const authToken = localStorage.getItem('authToken');
  return fetch('http://localhost:3000/api/favorites', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + authToken
    },
    mode: 'cors',
  })
  .then(response => response.json())
  .then(auth => {
    console.log(auth);
  });
}