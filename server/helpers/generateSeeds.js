const { addresses } = require('./addressData');

// console.log(addresses.length);

const generateProperties = (addresses) => {

  const queryArray = [];

  for (let i = 0; i < addresses.length; i++) {
    queryArray.push(`('BC', 'Vancouver', '${addresses[i].address}', ${addresses[i].lat}, ${addresses[i].lng}),`);
  }

  // for (let address of addresses) {
  //   queryArray.push(`('BC', 'Vancouver', '${address.address}', ${address.lat}, ${address.lng}),`);
  // }

  console.log(queryArray);

}

generateProperties(addresses)


