const shuffledPrices = require('./data_by_property_type/allPropertiesPrices')
const util = require('util')

const studios = [
  [
    {
      year: 2014,
      price: 760,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 439
    },
    {
      year: 2015,
      price: 770,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 439
    },
    {
      year: 2016,
      price: 770,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 439
    },
    {
      year: 2017,
      price: 780,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 439
    },
    {
      year: 2018,
      price: 800,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 439
    },
    {
      year: 2019,
      price: 820,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 439
    },
    {
      year: 2020,
      price: 930,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 439
    },
    {
      year: 2021,
      price: 1060,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 439
    },
    {
      year: 2022,
      price: 1110,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 439
    },
    {
      year: 2023,
      price: 1230,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 439
    }
  ],
  [
    {
      year: 2014,
      price: 740,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 353
    },
    {
      year: 2015,
      price: 760,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 353
    },
    {
      year: 2016,
      price: 760,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 353
    },
    {
      year: 2017,
      price: 870,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 353
    },
    {
      year: 2018,
      price: 910,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 353
    },
    {
      year: 2019,
      price: 980,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 353
    },
    {
      year: 2020,
      price: 1060,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 353
    },
    {
      year: 2021,
      price: 1060,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 353
    },
    {
      year: 2022,
      price: 1090,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 353
    },
    {
      year: 2023,
      price: 1190,
      bedrooms: 0,
      bathrooms: 1,
      square_footage: 353
    }
  ]
]

const generatePrices = (properties) => {

  const queryArray = [];
  let propertyId = 1;

  // console.log(properties)

  for (const property of properties) {
    for (let i = 0; i < property.length; i++) {
      queryArray.push(`(${propertyId}, 1, 'approved', '${property[i].year}-02-02', ${property[i].price}, 'https://www2.gov.bc.ca/assets/gov/housing-and-tenancy/residential-tenancies/forms/rtb1_chrome.pdf', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvancouverforliving.com%2Ffurnished%2Fvancouver-apartments%2F&psig=AOvVaw1ysF0BbEEP4fkSz4PyvgIm&ust=1675718793700000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjqxY2p__wCFQAAAAAdAAAAABAE', 'apartment', ${property[i].square_footage}, ${property[i].bedrooms}, ${property[i].bathrooms}),`);
    }
    propertyId = propertyId + 1;
  }

  // console.log('queryArray', queryArray);
  console.dir(queryArray, {'maxArrayLength': null})

}

const SQLQueries = generatePrices(shuffledPrices)

// console.log('snail', util.inspect(generatePrices(shuffledPrices), {maxArrayLength: null, depth:null }))

// console.dir(generatePrices(shuffledPrices), {depth: null, colors: true, maxArrayLength: null})

// console.log(util.inspect(SQLQueries, { maxArrayLength: null }))

console.dir(SQLQueries, {'maxArrayLength': null})

// console.log(JSON.stringify(SQLQueries, null, 3));


// CREATE TABLE prices (
//   id SERIAL PRIMARY KEY NOT NULL,
//   property_id INTEGER REFERENCES properties(id),
//   user_id INTEGER REFERENCES users(id),
//   admin_status VARCHAR(255) NOT NULL DEFAULT "pending",
//   date DATE NOT NULL,
//   price NUMERIC NOT NULL,
//   documentation VARCHAR(255) NOT NULL, --url
//   photo VARCHAR(255), --url 
//   property_type VARCHAR(255) NOT NULL,
//   square_footage INTEGER NOT NULL,
//   number_of_bedrooms INTEGER NOT NULL,
//   number_of_bathrooms INTEGER NOT NULL,  
// );

// generatePrices(studios)