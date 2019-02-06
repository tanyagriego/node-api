//This function submits a GET request/registers a click event and grabs the user's input
function submit () {
    $(".submit-button").submit (event => {
        event.preventDefault();
    })
}

//This function submits a DELETE request for beers
function deleteBeer() {

}
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
function appendBuinessData (business) {
    return `<h2 class="business-name">"${business_name}"</h2>
            <div>
                <p class="business-website">"${business_webiste}"</p>
                <p class="business-neighborhood">"${business_neighborhood}"</p>
                <p class="business-address">"${business_address}"</p>
                <p class="business-open">"${hours_open}"</p>
                <p class="business-close">"${hours_close}"/p>
            </div>`
};