//This function registers a click event and grabs the user's input
function submit () {
    $(".submit-button").submit (event => {
        event.preventDefault();
    })
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