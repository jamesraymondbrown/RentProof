// https://maps.googleapis.com/maps/api/place/findplacefromtext/json
//   ?fields=formatted_address
//   &input=apartment
//   &inputtype=textquery
//   &locationbias=circle%3A2000%49.28%2C-123.2
//   &key=AIzaSyBfkx6vtTumqm093rkUn36xfiNjmWRKeTk

// We can use the following query to pull addresses from the maps API. 
// The "keyword" refers to a search term. So "tower" will get a building with the name tower,
// "apartments" would get results with a building containing the name/term "apartments".
// Radius is in meters. I'm thinking I could run several requests using a small radius and different
// lat/long starting points, to get data for different neighbourhoods. So if I want to generate some 
// west end addresses, I can set lat/long in the middle of the west-end, have a radius of 1000m, and then 
// the api should spit out addresses in the west end. 

  // https://maps.googleapis.com/maps/api/place/nearbysearch/json
  //   ?location=49.28%2C-123.2&radius=50000&keyword=tower&key=AIzaSyBfkx6vtTumqm093rkUn36xfiNjmWRKeTk

const cityHallApartments = ["49.260120%2C-123.116130", "1000", "apartments"]


const generateAddresses = (latLong, radius, keyword) => {
  const apiCall = `https://maps.googleapis.com/maps/api/place/nearbysearch/json
  ?location=${latLong}&radius=${radius}&keyword=${keyword}&key=AIzaSyBfkx6vtTumqm093rkUn36xfiNjmWRKeTk`

  return apiCall;

};

// console.log(cambieApartments)

console.log(generateAddresses(cityHallApartments[0], cityHallApartments[1], cityHallApartments[2]));