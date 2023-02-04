function roundToNearest10(num) {
  return Math.round(num / 10) * 10;
}

// A function to increase prices, used to create seed data over years. 
// It outputs an array of arrays, with each index containing a year, and the rent price for that year/
// Now need to format this in an SQL CREATE function. 

const generatePrices = () => {

  let query = [];
  let price = 1200

  // query.push(`INSERT INTO properties (year, price) VALUES (${year}, ${price});`)

  for (let year = 2010; year < 2024; year++) {
    price = roundToNearest10(price + Math.round(price * Math.random() / 8))
    query.push([year, price])
    price
  };

  return query
}

console.log(generatePrices())

