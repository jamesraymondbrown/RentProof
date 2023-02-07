const studios = require('./studioData');
const oneBedrooms = require('./oneBedroomData');
const twoBedrooms = require('./twoBedroomData')
const threeBedrooms = require('./threeBedroomData')
const fourBedrooms = require('./fourBedroomData')
const fiveBedrooms = require('./fiveBedroomData')
const sixBedrooms = require('./sixBedroomData')

// console.log(studios.length);
// console.log(oneBedrooms.length);
// console.log(twoBedrooms.length);
// console.log(threeBedrooms.length);
// console.log(fourBedrooms.length);
// console.log(fiveBedrooms.length);
// console.log(sixBedrooms.length);

const allPropertiesPrices = [];

const pushPrices = (properties) => {
  for (const property of properties) {
    allPropertiesPrices.push(property)
  }
}

pushPrices(studios);
pushPrices(oneBedrooms);
pushPrices(twoBedrooms);
pushPrices(threeBedrooms);
pushPrices(fourBedrooms);
pushPrices(fiveBedrooms);
pushPrices(sixBedrooms);

// console.log(allPropertiesPrices.length)

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

console.log(shuffle(allPropertiesPrices));