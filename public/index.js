//This function submits a GET request/registers a click event and grabs the user's input
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
})();  

//This function creates a fetch request to the server
// function fetchBeer (searchTermVal) {
//     fetch(`http://localhost:3000/api/beers?type=${searchTermVal}`)
//     .then(function(response) {
//         return response.json();
//       })
//       .then(function(myJson) {
//         //something like linke 68 in JS— should be a function where you grab the data and use it. 
//       });
// }
  
//This function submits a DELETE request for businesses
function deleteBusiness() {
    
}

//This function submits a PUT request for beers
function updateBeer() {

}

//This function submits a PUT request for businesses
function updateBusiness() {

}

//This function submits a POST request for beers
function addBeer() {

}

//This function submits a POST request for businesses
function addBusiness() {

}

//This function creates a container for the business data which is eventually appended to the DOM
// function appendBuinessData (business) {
//     return `<h2 class="business-name">"${business.business_name}"</h2>
//             <div>
//                 <p class="business-website">"${business.business_webiste}"</p>
//                 <p class="business-neighborhood">"${business.business_neighborhood}"</p>
//                 <p class="business-address">"${business.business_address}"</p>
//                 <p class="business-open">"${business.hours_open}"</p>
//                 <p class="business-close">"${business.hours_close}"/p>
//             </div>`
// };

// function displayApiData (business) {
//     console.log("Business Data:", );
//     const results = business
// }
