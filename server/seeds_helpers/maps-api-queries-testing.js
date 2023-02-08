require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");

// We can use the following query to pull addresses from the maps API.
// The "keyword" refers to a search term. So "tower" will get a building with the name tower,
// "apartments" would get results with a building containing the name/term "apartments".
// Radius is in meters. You can run several requests using a small radius and different
// lat/long starting points, to get data for different neighbourhoods. So if you want to generate some
// west end addresses, set lat/long in the middle of the west-end, have a radius of 1000m, and then
// the api should spit out addresses in the west end.

// https://maps.googleapis.com/maps/api/place/nearbysearch/json
//   ?location=49.28%2C-123.2&radius=50000&keyword=tower&key=API_KEY

// Each const refers to a neighbourhood in vancouver. We're querying google maps and pulling 20 addresses of apartment
// buildings from each query. Plugging these consts into the generateAddress function produces a URL where you get a response
// from google maps API listing building addresses, coordinates, etc.

const mapsApiUrls = [];

const generateAddressUrls = (latLong, radius, keyword) => {
  const apiCall = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latLong}&radius=${radius}&keyword=${keyword}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
  return apiCall;
};

const cityHall = {
  latLong: "49.260120%2C-123.116130",
  radius: "1000",
  keyword: "apartments",
};
const downtownTowers = {
  latLong: "49.28395%2C-123.12404",
  radius: "1700",
  keyword: "tower",
};
const downtown = {
  latLong: "49.28395%2C-123.12404",
  radius: "1700",
  keyword: "apartments",
};
const mainScience = {
  latLong: "49.27156%2C-123.09508",
  radius: "1000",
  keyword: "apartments",
};
const kitsilano = {
  latLong: "49.25894%2C-123.16928",
  radius: "2000",
  keyword: "apartments",
};
const eastVan = {
  latLong: "49.26267%2C-123.05712",
  radius: "2000",
  keyword: "apartments",
};
const newBrighton = {
  latLong: "49.29112%2C-123.04027",
  radius: "1200",
  keyword: "apartments",
};
const loLo = {
  latLong: "49.31337%2C-123.07769",
  radius: "800",
  keyword: "apartments",
};
const upperLonsdale = {
  latLong: "49.33989%2C-123.07148",
  radius: "2000",
  keyword: "apartments",
};
const northgate = {
  latLong: "49.32419%2C-123.11503",
  radius: "1000",
  keyword: "apartments",
};
const westVan = {
  latLong: "49.33553%2C-123.16144",
  radius: "2000",
  keyword: "apartments",
};
const southCambie = {
  latLong: "49.23823%2C-123.11538",
  radius: "1100",
  keyword: "apartments",
};
const burnaby = {
  latLong: "49.24306%2C-122.98148",
  radius: "2000",
  keyword: "apartments",
};
const newWest = {
  latLong: "49.21882%2C-122.92029",
  radius: "2000",
  keyword: "apartments",
};

// Create URLs for maps API calls, to retrieve addresses. Push those URLs into an array.

mapsApiUrls.push(
  generateAddressUrls(cityHall.latLong, cityHall.radius, cityHall.keyword)
);
mapsApiUrls.push(
  generateAddressUrls(
    downtownTowers.latLong,
    downtownTowers.radius,
    downtownTowers.keyword
  )
);
mapsApiUrls.push(
  generateAddressUrls(downtown.latLong, downtown.radius, downtown.keyword)
);
mapsApiUrls.push(
  generateAddressUrls(
    mainScience.latLong,
    mainScience.radius,
    mainScience.keyword
  )
);
mapsApiUrls.push(
  generateAddressUrls(kitsilano.latLong, kitsilano.radius, kitsilano.keyword)
);
mapsApiUrls.push(
  generateAddressUrls(eastVan.latLong, eastVan.radius, eastVan.keyword)
);
mapsApiUrls.push(
  generateAddressUrls(
    newBrighton.latLong,
    newBrighton.radius,
    newBrighton.keyword
  )
);
mapsApiUrls.push(generateAddressUrls(loLo.latLong, loLo.radius, loLo.keyword));
mapsApiUrls.push(
  generateAddressUrls(
    upperLonsdale.latLong,
    upperLonsdale.radius,
    upperLonsdale.keyword
  )
);
mapsApiUrls.push(
  generateAddressUrls(northgate.latLong, northgate.radius, northgate.keyword)
);
mapsApiUrls.push(
  generateAddressUrls(westVan.latLong, westVan.radius, westVan.keyword)
);
mapsApiUrls.push(
  generateAddressUrls(
    southCambie.latLong,
    southCambie.radius,
    southCambie.keyword
  )
);
mapsApiUrls.push(
  generateAddressUrls(burnaby.latLong, burnaby.radius, burnaby.keyword)
);
mapsApiUrls.push(
  generateAddressUrls(newWest.latLong, newWest.radius, newWest.keyword)
);

// console logs to manually verify that we're getting the correct data from google maps

// console.log("cityHallApts:", generateAddressUrls(cityHall.latLong, cityHall.radius, cityHall.keyword));
// console.log("downtownTowers:", generateAddressUrls(downtownTowers.latLong, downtownTowers.radius, downtownTowers.keyword));
// console.log("downtownApartments:", generateAddressUrls(downtown.latLong, downtown.radius, downtown.keyword));
// console.log("mainScienceApartments:", generateAddressUrls(mainScience.latLong, mainScience.radius, mainScience.keyword));
// console.log("kitsilanoApartments:", generateAddressUrls(kitsilano.latLong, kitsilano.radius, kitsilano.keyword));
// console.log("eastVanApartments:", generateAddressUrls(eastVan.latLong, eastVan.radius, eastVan.keyword));
// console.log("newBrightonApartments:", generateAddressUrls(newBrighton.latLong, newBrighton.radius, newBrighton.keyword));
// console.log("loLoApartments:", generateAddressUrls(loLo.latLong, loLo.radius, loLo.keyword));
// console.log("upperLonsdaleApartments:", generateAddressUrls(upperLonsdale.latLong, upperLonsdale.radius, upperLonsdale.keyword));
// console.log("northgateApartments:", generateAddressUrls(northgate.latLong, northgate.radius, northgate.keyword));
// console.log("westVanApartments:", generateAddressUrls(westVan.latLong, westVan.radius, westVan.keyword));
// console.log("southCambieApartments:", generateAddressUrls(southCambie.latLong, southCambie.radius, southCambie.keyword));
// console.log("burnabyApartments:", generateAddressUrls(burnaby.latLong, burnaby.radius, burnaby.keyword));
// console.log("newWestApartments:", generateAddressUrls(newWest.latLong, newWest.radius, newWest.keyword));

const addresses = [];

// Couldn't find a way to return the addresses array after the axios call (I could console.log but not return)
// so I just console.logged and then manually copied that data over to a new file. The same can be done again
// if more seed data is needed/

const generateAddresses = async () => {
  for (url of mapsApiUrls) {
    axios
      .get(url)
      .then((response) => {
        const resultsArray = response.data.results;
        for (let result of resultsArray) {
          addresses.push({
            address: result.vicinity,
            lat: result.geometry.location.lat,
            lng: result.geometry.location.lng,
          });
        }
      })
      .then(() => {
        console.log("addresses", addresses);
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

// console.log(generateAddresses());
