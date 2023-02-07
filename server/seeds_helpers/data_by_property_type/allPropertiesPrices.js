const studios = require("./studioData");
const oneBedrooms = require("./oneBedroomData");
const twoBedrooms = require("./twoBedroomData");
const threeBedrooms = require("./threeBedroomData");
const fourBedrooms = require("./fourBedroomData");
const fiveBedrooms = require("./fiveBedroomData");
const sixBedrooms = require("./sixBedroomData");
const util = require("util");

const allPropertiesPrices = [];

const pushPrices = (properties) => {
  for (const property of properties) {
    allPropertiesPrices.push(property);
  }
};

pushPrices(studios);
pushPrices(oneBedrooms);
pushPrices(twoBedrooms);
pushPrices(threeBedrooms);
pushPrices(fourBedrooms);
pushPrices(fiveBedrooms);
pushPrices(sixBedrooms);

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const shuffledPrices = shuffle(allPropertiesPrices);

module.exports = shuffledPrices;
