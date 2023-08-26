// this is an arrow function
const loadCountryAPI = () =>{
    // fetch url of rest country from website
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

// displaying all countries
const displayCountries = countries =>{
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country));
    // displaying div to html
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

// get data and set it to html
const getCountry = (country) =>{
    console.log(country)
    return `
        <div class="country-div">
        <hr>
        <h4>Name: ${country.name}</h4>
        <h4>Email: ${country.email}</h4>
        <h4>Street: ${country.address.street}</h4>
        <h4>City: ${country.address.city}</h4>
        </div>
    `
}
// call the funtion to get output in console
loadCountryAPI()