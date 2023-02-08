const shuffledPrices = require("./data_by_property_type/allPropertiesPrices");
const util = require("util");

const generatePrices = (properties) => {
  const queryArray = [];
  let propertyId = 1;

  for (const property of properties) {
    for (let i = 0; i < property.length; i++) {
      queryArray.push(
        `(${propertyId}, 1, 'approved', '${property[i].year}-02-02', ${property[i].price}, 'https://www2.gov.bc.ca/assets/gov/housing-and-tenancy/residential-tenancies/forms/rtb1_chrome.pdf', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvancouverforliving.com%2Ffurnished%2Fvancouver-apartments%2F&psig=AOvVaw1ysF0BbEEP4fkSz4PyvgIm&ust=1675718793700000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjqxY2p__wCFQAAAAAdAAAAABAE', 'apartment', ${property[i].square_footage}, ${property[i].bedrooms}, ${property[i].bathrooms}),`
      );
    }
    propertyId = propertyId + 1;
  }

  console.dir(queryArray, { maxArrayLength: null });
};

// This will log all lines of the long array to the console (instead of only the first 100 items). Then you can use that data to create seeds (if needed).

const SQLQueries = generatePrices(shuffledPrices);
console.dir(SQLQueries, { maxArrayLength: null });

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
