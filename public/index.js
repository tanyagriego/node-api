$(".register-container").hide();
$(".login-container").hide();

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

//This function reveals the sign-up form and hides the button clicked button
    $("#join").click (function(){
      console.log("join-button function fired");
      $(".register-container").show();
    })

    //This function reveals the sign-up form and hides the button clicked button
    $("#Login").click (function(){
      console.log("login-container function fired");
      $(".login-container").show();
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
    console.log("USER==================== ", user)
    localStorage.setItem('currentUser', user);
    getAuthToken(user);
  });
}

  // This function allows an existing user to log in
  $(".login-container").submit (event => {
    console.log("login function fired");
    event.preventDefault();
    const username = $(event.currentTarget).find(".username").val();
    const password = $(event.currentTarget).find(".password").val();
    const existingUser = {username, password};
    localStorage.setItem("userName", username)
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
  .then(response => {
    localStorage.setItem('authToken', response.authToken);
    localStorage.setItem('userId', response.user.id);
    goToFavorites();
  });
}

function goToFavorites() {
  window.location.href = "favorites";
}