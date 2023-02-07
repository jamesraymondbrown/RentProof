const roundToNearest10 = (num) => {
  return Math.round(num / 10) * 10;
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// A function to increase prices, used to create seed data over years. 
// It outputs an array of arrays, with each index containing a year, and the rent price for that year/
// Now need to format this in an SQL CREATE function. 

const generateStudioPrices = () => {

  let bedrooms = 0
  let bathrooms = 1
  let squareFootage = getRandomInt(300, 500)
  let query = [];

  for (let i = 0; i < 50; i++) {
    let price = getRandomInt(600, 1000)
    let propertyPriceHistory = [];
    for (let year = 2014; year < 2024; year++) {
      price = roundToNearest10(price + Math.round(price * Math.random() / 7))
      propertyPriceHistory.push({'year': year, 'price': price, 'bedrooms': bedrooms, 'bathrooms': bathrooms, 'square_footage': squareFootage})
    }
    query.push(propertyPriceHistory)
  }
  
  return query
}

// console.log(generateStudioPrices())


const generateOneBedroomPrices = () => {
  let bedrooms = 1
  let bathrooms = 1
  let squareFootage = getRandomInt(400, 800)
  let query = [];

  for (let i = 0; i < 50; i++) {
    let price = getRandomInt(900, 1400)
    let propertyPriceHistory = [];
    for (let year = 2014; year < 2024; year++) {
      price = roundToNearest10(price + Math.round(price * Math.random() / 6))
      propertyPriceHistory.push({'year': year, 'price': price, 'bedrooms': bedrooms, 'bathrooms': bathrooms, 'square_footage': squareFootage})
    }
    query.push(propertyPriceHistory)
  }
  
  return query
}

// console.log(generateOneBedroomPrices())

const generateTwoBedroomPrices = () => {
  let bedrooms = 2
  let bathrooms = getRandomInt(1, 2);
  let squareFootage = getRandomInt(500, 1000)
  let query = [];

  for (let i = 0; i < 50; i++) {
    let price = getRandomInt(800, 1700)
    let propertyPriceHistory = [];
    for (let year = 2014; year < 2024; year++) {
      price = roundToNearest10(price + Math.round(price * Math.random() / 6))
      propertyPriceHistory.push({'year': year, 'price': price, 'bedrooms': bedrooms, 'bathrooms': bathrooms, 'square_footage': squareFootage})
    }
    query.push(propertyPriceHistory)
  }
  
  return query
}

// console.log(generateTwoBedroomPrices())


const generateThreeBedroomPrices = () => {
  let bedrooms = 3;
  let bathrooms = getRandomInt(1, 2);
  let squareFootage = getRandomInt(600, 1200)
  let query = [];

  for (let i = 0; i < 50; i++) {
    let price = getRandomInt(1000, 2000)
    let propertyPriceHistory = [];
    for (let year = 2014; year < 2024; year++) {
      price = roundToNearest10(price + Math.round(price * Math.random() / 6))
      propertyPriceHistory.push({'year': year, 'price': price, 'bedrooms': bedrooms, 'bathrooms': bathrooms, 'square_footage': squareFootage})
    }
    query.push(propertyPriceHistory)
  }
  
  return query
}

// console.log(generateThreeBedroomPrices())

const generateFourBedroomPrices = () => {
  let bedrooms = 4
  let bathrooms = getRandomInt(1, 3)
  let squareFootage = getRandomInt(1000, 1800)
  let query = [];

  for (let i = 0; i < 15; i++) {
    let price = getRandomInt(1500, 3000)
    let propertyPriceHistory = [];
    for (let year = 2014; year < 2024; year++) {
      price = roundToNearest10(price + Math.round(price * Math.random() / 6))
      propertyPriceHistory.push({'year': year, 'price': price, 'bedrooms': bedrooms, 'bathrooms': bathrooms, 'square_footage': squareFootage})
    }
    query.push(propertyPriceHistory)
  }
  
  return query
}


// console.log(generateFourBedroomPrices())

const generateFiveBedroomPrices = () => {
  let bedrooms = 5
  let bathrooms = getRandomInt(2, 4)
  let squareFootage = getRandomInt(1600, 3500)
  let query = [];

  for (let i = 0; i < 15; i++) {
    let price = getRandomInt(1700, 3500)
    let propertyPriceHistory = [];
    for (let year = 2014; year < 2024; year++) {
      price = roundToNearest10(price + Math.round(price * Math.random() / 6))
      propertyPriceHistory.push({'year': year, 'price': price, 'bedrooms': bedrooms, 'bathrooms': bathrooms, 'square_footage': squareFootage})
    }
    query.push(propertyPriceHistory)
  }
  
  return query
}

// console.log(generateFiveBedroomPrices())

const generateSixBedroomPrices = () => {
  let bedrooms = 6
  let bathrooms = getRandomInt(2, 6)
  let squareFootage = getRandomInt(2500, 4000)
  let query = [];

  for (let i = 0; i < 7; i++) {
    let price = getRandomInt(2500, 4300)
    let propertyPriceHistory = [];
    for (let year = 2014; year < 2024; year++) {
      price = roundToNearest10(price + Math.round(price * Math.random() / 6))
      propertyPriceHistory.push({'year': year, 'price': price, 'bedrooms': bedrooms, 'bathrooms': bathrooms, 'square_footage': squareFootage})
    }
    query.push(propertyPriceHistory)
  }
  
  return query
}

// console.log(generateSixBedroomPrices())


// const generateProperties = (prices) => {

//   const queryArray = [];

//   for (let i = 0; i < addresses.length; i++) {
//     queryArray.push(`('BC', 'Vancouver', '${addresses[i].address}', ${addresses[i].lat}, ${addresses[i].lng}),`);
//   }

//   // for (let address of addresses) {
//   //   queryArray.push(`('BC', 'Vancouver', '${address.address}', ${address.lat}, ${address.lng}),`);
//   // }

//   console.log(queryArray);

// }
