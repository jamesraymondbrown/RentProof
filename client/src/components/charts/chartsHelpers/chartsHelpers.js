const getRentIncreaseAverages = (prices, properties, data) => {
  const priceObject = {};
  const allIncreasesPerYear = {
    2014: [],
    2015: [],
    2016: [],
    2017: [],
    2018: [],
    2019: [],
    2020: [],
    2021: [],
    2022: [],
    2023: [],
  };

  // Add an array to the priceObject, for each property. The key is that property's ID
  for (const property of properties) {
    priceObject[property.id] = [];
  }

  // Push the price data for each property into the correct array
  for (const price of prices) {
    priceObject[price.property_id].push(price);
  }

  // Loop through each property to get an integer for querying the priceObject object
  for (let i = 1; i < properties.length + 1; i++) {
    // Another loop for getting the index of the array inside of each priceObject index (priceObject is an object full of arrays)
    for (let j = 1; j < priceObject[i].length; j++) {
      // Compare the current year's price with last year's price, and push the difference as a percentage to the increasePerYear object
      allIncreasesPerYear[priceObject[i][j].date.substring(0, 4)].push(
        Math.round(
          ((parseInt(priceObject[i][j].price) -
            parseInt(priceObject[i][j - 1].price)) /
            parseInt(priceObject[i][j - 1].price)) *
            100 *
            10
        ) / 10
      );
    }
  }

  // now we have an allIncreasesPerYear object, that contains an array with the percentage increase for each property, for each year
  // Loop through that data to get the average increase per year, and push that to our data array

  for (let i = 2015; i <= 2023; i++) {
    let sum = 0;
    for (const indexValue of allIncreasesPerYear[i]) {
      sum += indexValue;
    }
    data.push({
      date: i,
      increase: Math.round((sum / allIncreasesPerYear[i].length) * 100) / 100,
    });
  }

  return data;
};

module.exports = { getRentIncreaseAverages };
