const studios = [
  [
    { year: 2014, price: 1080, bedrooms: 0 },
    { year: 2015, price: 1230, bedrooms: 0 },
    { year: 2016, price: 1340, bedrooms: 0 },
    { year: 2017, price: 1350, bedrooms: 0 },
    { year: 2018, price: 1520, bedrooms: 0 },
    { year: 2019, price: 1570, bedrooms: 0 },
    { year: 2020, price: 1590, bedrooms: 0 },
    { year: 2021, price: 1750, bedrooms: 0 },
    { year: 2022, price: 1980, bedrooms: 0 },
    { year: 2023, price: 2190, bedrooms: 0 }
  ],
  [
    { year: 2014, price: 840, bedrooms: 0 },
    { year: 2015, price: 910, bedrooms: 0 },
    { year: 2016, price: 970, bedrooms: 0 },
    { year: 2017, price: 1020, bedrooms: 0 },
    { year: 2018, price: 1160, bedrooms: 0 },
    { year: 2019, price: 1250, bedrooms: 0 },
    { year: 2020, price: 1320, bedrooms: 0 },
    { year: 2021, price: 1440, bedrooms: 0 },
    { year: 2022, price: 1480, bedrooms: 0 },
    { year: 2023, price: 1670, bedrooms: 0 }
  ],
  [
    { year: 2014, price: 1040, bedrooms: 0 },
    { year: 2015, price: 1100, bedrooms: 0 },
    { year: 2016, price: 1200, bedrooms: 0 },
    { year: 2017, price: 1250, bedrooms: 0 },
    { year: 2018, price: 1310, bedrooms: 0 },
    { year: 2019, price: 1460, bedrooms: 0 },
    { year: 2020, price: 1650, bedrooms: 0 },
    { year: 2021, price: 1760, bedrooms: 0 },
    { year: 2022, price: 2010, bedrooms: 0 },
    { year: 2023, price: 2200, bedrooms: 0 }
  ],
  [
    { year: 2014, price: 1010, bedrooms: 0 },
    { year: 2015, price: 1050, bedrooms: 0 },
    { year: 2016, price: 1100, bedrooms: 0 },
    { year: 2017, price: 1190, bedrooms: 0 },
    { year: 2018, price: 1320, bedrooms: 0 },
    { year: 2019, price: 1390, bedrooms: 0 },
    { year: 2020, price: 1400, bedrooms: 0 },
    { year: 2021, price: 1530, bedrooms: 0 },
    { year: 2022, price: 1610, bedrooms: 0 },
    { year: 2023, price: 1660, bedrooms: 0 }
  ],
  [
    { year: 2014, price: 760, bedrooms: 0 },
    { year: 2015, price: 790, bedrooms: 0 },
    { year: 2016, price: 870, bedrooms: 0 },
    { year: 2017, price: 910, bedrooms: 0 },
    { year: 2018, price: 1010, bedrooms: 0 },
    { year: 2019, price: 1030, bedrooms: 0 },
    { year: 2020, price: 1090, bedrooms: 0 },
    { year: 2021, price: 1110, bedrooms: 0 },
    { year: 2022, price: 1220, bedrooms: 0 },
    { year: 2023, price: 1250, bedrooms: 0 }
  ],
  [
    { year: 2014, price: 670, bedrooms: 0 },
    { year: 2015, price: 720, bedrooms: 0 },
    { year: 2016, price: 780, bedrooms: 0 },
    { year: 2017, price: 830, bedrooms: 0 },
    { year: 2018, price: 880, bedrooms: 0 },
    { year: 2019, price: 880, bedrooms: 0 },
    { year: 2020, price: 920, bedrooms: 0 },
    { year: 2021, price: 1030, bedrooms: 0 },
    { year: 2022, price: 1130, bedrooms: 0 },
    { year: 2023, price: 1180, bedrooms: 0 }
  ]
]

const generatePrices = (properties) => {

  const queryArray = [];

  for (let i = 0; i < properties.length; i++) {
    queryArray.push(`(${i}, 1, 'approved', '2023-02-02', ${properties[i].price}, 'https://www2.gov.bc.ca/assets/gov/housing-and-tenancy/residential-tenancies/forms/rtb1_chrome.pdf', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvancouverforliving.com%2Ffurnished%2Fvancouver-apartments%2F&psig=AOvVaw1ysF0BbEEP4fkSz4PyvgIm&ust=1675718793700000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjqxY2p__wCFQAAAAAdAAAAABAE', 'apartment', 1000, 2, 1)`);
  }

  console.log(queryArray);

}

generatePrices(studios)