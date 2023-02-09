const getPhotoFromPrices = (property, prices) => {
  let photo = "";
  for (let price of prices) {
    if (price.property_id === property.id) {
      // console.log(price.photo);
      photo = price.photo;
      return photo;
    }
  }
  return photo;
};

const getCostFromPrices = (property, prices) => {
  let cost = 2000;
  for (let price of prices) {
    // console.log("price");
    if (price.property_id === property.id) {
      cost = price.price;
      return cost;
    }
  }
  return cost;
};

const getBedroomsFromPrices = (property, prices) => {
  let bedrooms = 2;
  for (let price of prices) {
    if (price.property_id === property.id) {
      bedrooms = price.number_of_bedrooms;
      return bedrooms;
    }
  }
  return bedrooms;
};

const getBathroomsFromPrices = (property, prices) => {
  let bathrooms = 2;
  for (let price of prices) {
    if (price.property_id === property.id) {
      bathrooms = price.number_of_bathrooms;
      return bathrooms;
    }
  }
  return bathrooms;
};

module.exports = {
  getPhotoFromPrices,
  getCostFromPrices,
  getBedroomsFromPrices,
  getBathroomsFromPrices,
};
