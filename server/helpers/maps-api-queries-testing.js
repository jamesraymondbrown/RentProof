require('dotenv').config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");

// We can use the following query to pull addresses from the maps API. 
// The "keyword" refers to a search term. So "tower" will get a building with the name tower,
// "apartments" would get results with a building containing the name/term "apartments".
// Radius is in meters. I'm thinking I could run several requests using a small radius and different
// lat/long starting points, to get data for different neighbourhoods. So if I want to generate some 
// west end addresses, I can set lat/long in the middle of the west-end, have a radius of 1000m, and then 
// the api should spit out addresses in the west end. 

  // https://maps.googleapis.com/maps/api/place/nearbysearch/json
  //   ?location=49.28%2C-123.2&radius=50000&keyword=tower&key=API_KEY


// Each const refers to a neighbourhood in vancouver. We're querying google maps and pulling 20 addresses of apartment
// buildings from each query. Plugging these consts into the generateAddress function produces a URL where you get a response
// from google maps API listing building addresses, coordinates, etc.

const addresses = [];
const mapsApiUrls = [];

const generateAddresses = (latLong, radius, keyword) => {
  const apiCall = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latLong}&radius=${radius}&keyword=${keyword}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
  return apiCall;
};

const cityHall = { latLong: "49.260120%2C-123.116130", radius: "1000", keyword: "apartments"};
const downtownTowers = { latLong: "49.28395%2C-123.12404", radius: "1700", keyword: "tower"};
const downtown = { latLong: "49.28395%2C-123.12404", radius: "1700", keyword: "apartments" };
const mainScience = { latLong: "49.27156%2C-123.09508", radius: "1000", keyword: "apartments" };
const kitsilano = { latLong: "49.25894%2C-123.16928", radius: "2000", keyword: "apartments" };
const eastVan = { latLong: "49.26267%2C-123.05712", radius: "2000", keyword: "apartments" };
const newBrighton = { latLong: "49.29112%2C-123.04027", radius: "1200", keyword: "apartments" };
const loLo = { latLong: "49.31337%2C-123.07769", radius: "800", keyword: "apartments" };
const upperLonsdale = { latLong: "49.33989%2C-123.07148", radius: "2000", keyword: "apartments" };
const northgate = { latLong: "49.32419%2C-123.11503", radius: "1000", keyword: "apartments" };
const westVan = { latLong: "49.33553%2C-123.16144", radius: "2000", keyword: "apartments" };
const southCambie = { latLong: "49.23823%2C-123.11538", radius: "1100", keyword: "apartments" };
const burnaby = { latLong: "49.24306%2C-122.98148", radius: "2000", keyword: "apartments" };
const newWest = { latLong: "49.21882%2C-122.92029", radius: "2000", keyword: "apartments" };

// Create URLs for maps API calls, to retrieve addresses. Push those URLs into an array. 

mapsApiUrls.push(generateAddresses(cityHall.latLong, cityHall.radius, cityHall.keyword));
mapsApiUrls.push(generateAddresses(downtownTowers.latLong, downtownTowers.radius, downtownTowers.keyword));
mapsApiUrls.push(generateAddresses(downtown.latLong, downtown.radius, downtown.keyword));
mapsApiUrls.push(generateAddresses(mainScience.latLong, mainScience.radius, mainScience.keyword));
mapsApiUrls.push(generateAddresses(kitsilano.latLong, kitsilano.radius, kitsilano.keyword));
mapsApiUrls.push(generateAddresses(eastVan.latLong, eastVan.radius, eastVan.keyword));
mapsApiUrls.push(generateAddresses(newBrighton.latLong, newBrighton.radius, newBrighton.keyword));
mapsApiUrls.push(generateAddresses(loLo.latLong, loLo.radius, loLo.keyword));
mapsApiUrls.push(generateAddresses(upperLonsdale.latLong, upperLonsdale.radius, upperLonsdale.keyword));
mapsApiUrls.push(generateAddresses(northgate.latLong, northgate.radius, northgate.keyword));
mapsApiUrls.push(generateAddresses(westVan.latLong, westVan.radius, westVan.keyword));
mapsApiUrls.push(generateAddresses(southCambie.latLong, southCambie.radius, southCambie.keyword));
mapsApiUrls.push(generateAddresses(burnaby.latLong, burnaby.radius, burnaby.keyword));
mapsApiUrls.push(generateAddresses(newWest.latLong, newWest.radius, newWest.keyword));

// console.log(mapsApiUrls);





// app.get(generateAddresses(cityHall.latLong, cityHall.radius, cityHall.keyword), (req, res) => {
//   console.log(JSON.stringify(res));
// });

// console.log("cityHallApts:", generateAddresses(cityHall.latLong, cityHall.radius, cityHall.keyword));
// console.log("downtownTowers:", generateAddresses(downtownTowers.latLong, downtownTowers.radius, downtownTowers.keyword));
// console.log("downtownApartments:", generateAddresses(downtown.latLong, downtown.radius, downtown.keyword));
// console.log("mainScienceApartments:", generateAddresses(mainScience.latLong, mainScience.radius, mainScience.keyword));
// console.log("kitsilanoApartments:", generateAddresses(kitsilano.latLong, kitsilano.radius, kitsilano.keyword));
// console.log("eastVanApartments:", generateAddresses(eastVan.latLong, eastVan.radius, eastVan.keyword));
// console.log("newBrightonApartments:", generateAddresses(newBrighton.latLong, newBrighton.radius, newBrighton.keyword));
// console.log("loLoApartments:", generateAddresses(loLo.latLong, loLo.radius, loLo.keyword));
// console.log("upperLonsdaleApartments:", generateAddresses(upperLonsdale.latLong, upperLonsdale.radius, upperLonsdale.keyword));
// console.log("northgateApartments:", generateAddresses(northgate.latLong, northgate.radius, northgate.keyword));
// console.log("westVanApartments:", generateAddresses(westVan.latLong, westVan.radius, westVan.keyword));
// console.log("southCambieApartments:", generateAddresses(southCambie.latLong, southCambie.radius, southCambie.keyword));
// console.log("burnabyApartments:", generateAddresses(burnaby.latLong, burnaby.radius, burnaby.keyword));
// console.log("newWestApartments:", generateAddresses(newWest.latLong, newWest.radius, newWest.keyword));


for (url of mapsApiUrls) {
  axios.get(url)
  .then(response => {
    // console.log(response.data.results);
    const resultsArray = response.data.results
    for (let result of resultsArray) {
      addresses.push(result.vicinity)
    }
  })
  .then(() => {
    console.log('addresses', addresses)
  })
  .catch(error => {
    console.error(error);
  });
}

module.exports = { generateAddresses, cityHall };
