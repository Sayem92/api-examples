const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
};

const displayCountries = countries => {
    // for(const country of countries){
    //     console.log(country)
    // }                                       // same kaj version change
    const countryContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
        <h3>Name : ${country.name.common} </h3>
        <p>Capital : ${country.capital ? country.capital[0] : 'No capital'} </p>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countryContainer.appendChild(countryDiv);
    });
};

const loadCountryDetails = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('Get country details', code)
   fetch(url)
   .then(res => res.json())
   .then(data => displayCoutryDetails(data[0]))
}

const displayCoutryDetails = country => {
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
    <h2>Details : ${country.name.common} </h2>
    <img src="${country.flags.png}">
    `
}

loadCountries()