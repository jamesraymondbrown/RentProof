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

const findLastIndex = (array, predicate) => {
  var l = array.length;
  while (l--) {
    if (predicate(array[l], l, array)) return l;
  }
  return -1;
};

const getCostFromPrices = (property, prices) => {
  let cost = 2000;
  const reversedPrices = [...prices].reverse();
  // console.log("reverse", reversedPrices);
  for (let price of reversedPrices) {
    if (price.property_id === property.id) {
      cost = price.price;
      return cost;
    }
  }
  return cost;
};

const getSizeFromPrices = (property, prices) => {
  let size = "";
  for (let price of prices) {
    if (price.property_id === property.id) {
      // console.log(price.photo);
      size = price.square_footage;
      return size;
    }
  }
  return size;
};

// const lastIndex = prices.map(price =>
//   price.property_id === currentShape).lastIndexOf(true);

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

const getPriceHistory = (propertyId, prices) => {
  const propertyPriceHistory = prices.filter(
    (price) => price.property_id === propertyId
  );
  // console.log("priceHistory", propertyPriceHistory);
  return propertyPriceHistory;
};

module.exports = {
  getPhotoFromPrices,
  getCostFromPrices,
  getBedroomsFromPrices,
  getBathroomsFromPrices,
  getPriceHistory,
  getSizeFromPrices
};
