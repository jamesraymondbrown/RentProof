const shuffledPrices = require("./data_by_property_type/allPropertiesPrices");
const util = require("util");

const generatePrices = (properties) => {
  const queryArray = [];
  let propertyId = 1;

  for (const property of properties) {
    for (let i = 0; i < property.length; i++) {
      queryArray.push(
        `(${propertyId}, 1, 'approved', '${property[i].year}-02-02', ${property[i].price}, 'https://www2.gov.bc.ca/assets/gov/housing-and-tenancy/residential-tenancies/forms/rtb1_chrome.pdf', '${property[i].photo}', 'apartment', ${property[i].square_footage}, ${property[i].bedrooms}, ${property[i].bathrooms}),`
      );
    }
    propertyId = propertyId + 1;
  }

  console.dir(queryArray, { maxArrayLength: null });
};

// This will log all lines of the long array to the console (instead of only the first 100 items). Then you can use that data to create seeds (if needed).

const SQLQueries = generatePrices(shuffledPrices);
console.dir(SQLQueries, { maxArrayLength: null });

// console.log(shuffledPrices.length);

// Prices table structure, for reference:

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
