const roundToNearest10 = (num) => {
  return Math.round(num / 10) * 10;
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// A function to increase prices, used to create seed data over years.
// It outputs an array of arrays, with each index containing a year, and the rent price for that year/

const generateStudioPrices = () => {
  let bedrooms = 0;
  let bathrooms = 1;
  let query = [];
  let picOptions = [
    "https://hips.hearstapps.com/hmg-prod/images/studio-apartment-ideas-room-divider-ideas-tranebergsva-gen-stockholm-living-room-industry-fantastic-frank-popular-copy-1589570199.jpg",
    "http://cdn.home-designing.com/wp-content/uploads/2018/02/Studio-apartment-decor-ideas.jpg",
    "https://www.interiorzine.com/wp-content/uploads/2017/11/50-small-studio-apartment-design-ideas-modern-tiny-clever.jpg",
    "https://www.decorilla.com/online-decorating/wp-content/uploads/2019/04/small-studio-apartment-layout.jpg",
  ];

  for (let i = 0; i < 50; i++) {
    let squareFootage = getRandomInt(350, 600);
    let price = getRandomInt(600, 1000);
    let propertyPriceHistory = [];
    let photo = picOptions[getRandomInt(0, 3)];
    for (let year = 2014; year < 2024; year++) {
      price = roundToNearest10(price + Math.round((price * Math.random()) / 7));
      propertyPriceHistory.push({
        year: year,
        price: price,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        square_footage: squareFootage,
        photo: photo,
      });
    }
    query.push(propertyPriceHistory);
  }

  return query;
};

// console.log(generateStudioPrices());

const generateOneBedroomPrices = () => {
  let bedrooms = 1;
  let bathrooms = 1;
  let query = [];
  let picOptions = [
    "https://spoonfulofhomedesign.files.wordpress.com/2014/09/15_hb6b_karin_matz2.jpg",
    "https://cdn.mos.cms.futurecdn.net/jGggmwPHncRNy6B5BTvipD.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apartment-decorating-ideas-hbx040122davidfrazier-004-1-1660600471.jpg?crop=0.670xw:1.00xh;0.277xw,0&resize=640:*",
    "https://i.pinimg.com/originals/8f/5f/ef/8f5fef1059edbfe7f888b89049cb9c49.png",
    "https://news2-images.vice.com/uploads/2017/04/Toronto1bed.jpg",
    "https://media.architecturaldigest.com/photos/635fca1de3bc540330136178/16:9/w_2560%2Cc_limit/Living%2520room.jpg",
    "https://media.architecturaldigest.com/photos/635fca198ccaa8231343e32f/master/w_1600%2Cc_limit/Living%2520room1.jpg",
    "https://media.architecturaldigest.com/photos/5e9f0a12d5eaf100086259e0/4:3/w_3000,h_2250,c_limit/Peter_Sandel_0222.jpg",
    "https://i.insider.com/60c8d78f23393a00188e341a?width=1000&format=jpeg&auto=webp",
    "https://www.bh-architects.com/wp-content/uploads/2018/07/The-Wiiliam-contemporary-apartment-interior-design-galley-kitchen.jpg",
    "https://i.pinimg.com/originals/e3/3f/03/e33f0383b7428f6c2b4e2cb6c8a89e13.jpg",
  ];

  for (let i = 0; i < 50; i++) {
    let squareFootage = getRandomInt(450, 800);
    let price = getRandomInt(900, 1400);
    let propertyPriceHistory = [];
    let photo = picOptions[getRandomInt(0, 10)];
    for (let year = 2014; year < 2024; year++) {
      price = roundToNearest10(price + Math.round((price * Math.random()) / 6));
      propertyPriceHistory.push({
        year: year,
        price: price,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        square_footage: squareFootage,
        photo: photo,
      });
    }
    query.push(propertyPriceHistory);
  }

  return query;
};

// console.log(generateOneBedroomPrices());

const generateTwoBedroomPrices = () => {
  let bedrooms = 2;
  let query = [];
  let picOptions = [
    "https://spoonfulofhomedesign.files.wordpress.com/2014/09/15_hb6b_karin_matz2.jpg",
    "https://cdn.mos.cms.futurecdn.net/jGggmwPHncRNy6B5BTvipD.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apartment-decorating-ideas-hbx040122davidfrazier-004-1-1660600471.jpg?crop=0.670xw:1.00xh;0.277xw,0&resize=640:*",
    "https://i.pinimg.com/originals/8f/5f/ef/8f5fef1059edbfe7f888b89049cb9c49.png",
    "https://news2-images.vice.com/uploads/2017/04/Toronto1bed.jpg",
    "https://media.architecturaldigest.com/photos/635fca1de3bc540330136178/16:9/w_2560%2Cc_limit/Living%2520room.jpg",
    "https://media.architecturaldigest.com/photos/635fca198ccaa8231343e32f/master/w_1600%2Cc_limit/Living%2520room1.jpg",
    "https://media.architecturaldigest.com/photos/5e9f0a12d5eaf100086259e0/4:3/w_3000,h_2250,c_limit/Peter_Sandel_0222.jpg",
    "https://i.insider.com/60c8d78f23393a00188e341a?width=1000&format=jpeg&auto=webp",
    "https://www.bh-architects.com/wp-content/uploads/2018/07/The-Wiiliam-contemporary-apartment-interior-design-galley-kitchen.jpg",
    "https://i.pinimg.com/originals/e3/3f/03/e33f0383b7428f6c2b4e2cb6c8a89e13.jpg",
    "http://cdn.home-designing.com/wp-content/uploads/2017/07/beige-sofa.jpg",
  ];

  for (let i = 0; i < 50; i++) {
    let bathrooms = getRandomInt(1, 2);
    let squareFootage = getRandomInt(600, 1000);
    let price = getRandomInt(800, 1700);
    let propertyPriceHistory = [];
    let photo = picOptions[getRandomInt(0, 11)];
    for (let year = 2014; year < 2024; year++) {
      price = roundToNearest10(price + Math.round((price * Math.random()) / 6));
      propertyPriceHistory.push({
        year: year,
        price: price,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        square_footage: squareFootage,
        photo: photo,
      });
    }
    query.push(propertyPriceHistory);
  }

  return query;
};

// console.log(generateTwoBedroomPrices());

const generateThreeBedroomPrices = () => {
  let bedrooms = 3;
  let query = [];
  let picOptions = [
    "https://pyxis.nymag.com/v1/imgs/11b/ff7/e8bab5dcfee7694e42f3a9fa9d59b6a83d-1----.2x.w710.jpg",
    "https://media.architecturaldigest.com/photos/635fca1de3bc540330136178/16:9/w_2560%2Cc_limit/Living%2520room.jpg",
    "https://media.architecturaldigest.com/photos/635fca198ccaa8231343e32f/master/w_1600%2Cc_limit/Living%2520room1.jpg",
    "https://media.architecturaldigest.com/photos/5e9f0a12d5eaf100086259e0/4:3/w_3000,h_2250,c_limit/Peter_Sandel_0222.jpg",
    "https://i.insider.com/60c8d78f23393a00188e341a?width=1000&format=jpeg&auto=webp",
    "https://www.bh-architects.com/wp-content/uploads/2018/07/The-Wiiliam-contemporary-apartment-interior-design-galley-kitchen.jpg",
    "https://i.pinimg.com/originals/e3/3f/03/e33f0383b7428f6c2b4e2cb6c8a89e13.jpg",
    "https://images.unsplash.com/photo-1598528644866-3215eb3e9771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwYXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://images.rentals.ca/property-pictures/medium/vancouver-bc/468498/apartment-14393370.jpg",
    "https://media-cdn.tripadvisor.com/media/vr-splice-j/02/a8/2a/13.jpg",
    "https://www.irvinecompanyapartments.com/rental-living/wp-content/uploads/2018/07/las-palmas.jpg",
    "http://cdn.home-designing.com/wp-content/uploads/2017/07/beige-sofa.jpg",
  ];

  for (let i = 0; i < 50; i++) {
    let bathrooms = getRandomInt(1, 2);
    let squareFootage = getRandomInt(700, 1200);
    let price = getRandomInt(1000, 2000);
    let propertyPriceHistory = [];
    let photo = picOptions[getRandomInt(0, 11)];
    for (let year = 2014; year < 2024; year++) {
      price = roundToNearest10(price + Math.round((price * Math.random()) / 6));
      propertyPriceHistory.push({
        year: year,
        price: price,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        square_footage: squareFootage,
        photo: photo,
      });
    }
    query.push(propertyPriceHistory);
  }

  return query;
};

// console.log(generateThreeBedroomPrices());

const generateFourBedroomPrices = () => {
  let bedrooms = 4;
  let query = [];
  let picOptions = [
    "https://www.bh-architects.com/wp-content/uploads/2018/07/The-Wiiliam-contemporary-apartment-interior-design-galley-kitchen.jpg",
    "https://i.pinimg.com/originals/e3/3f/03/e33f0383b7428f6c2b4e2cb6c8a89e13.jpg",
    "https://images.unsplash.com/photo-1598528644866-3215eb3e9771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwYXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://images.rentals.ca/property-pictures/medium/vancouver-bc/468498/apartment-14393370.jpg",
    "https://media-cdn.tripadvisor.com/media/vr-splice-j/02/a8/2a/13.jpg",
    "https://www.irvinecompanyapartments.com/rental-living/wp-content/uploads/2018/07/las-palmas.jpg",
    "https://pyxis.nymag.com/v1/imgs/11b/ff7/e8bab5dcfee7694e42f3a9fa9d59b6a83d-1----.2x.w710.jpg",
    "https://www.mcdonaldjoneshomes.com.au/sites/default/files/four-4-bedroom-house-designs.jpg",
    "http://edc.h-cdn.co/assets/16/29/2560x1920/sd-aspect-1469205174-bedroom-design-ideas-lead.jpg",
    "http://cdn.home-designing.com/wp-content/uploads/2017/07/beige-sofa.jpg",
  ];

  for (let i = 0; i < 15; i++) {
    let price = getRandomInt(1500, 3000);
    let propertyPriceHistory = [];
    let photo = picOptions[getRandomInt(0, 9)];
    let squareFootage = getRandomInt(1000, 2000);
    let bathrooms = getRandomInt(1, 3);
    for (let year = 2014; year < 2024; year++) {
      price = roundToNearest10(price + Math.round((price * Math.random()) / 6));
      propertyPriceHistory.push({
        year: year,
        price: price,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        square_footage: squareFootage,
        photo: photo,
      });
    }
    query.push(propertyPriceHistory);
  }

  return query;
};

// console.log(generateFourBedroomPrices());

const generateFiveBedroomPrices = () => {
  let bedrooms = 5;
  let query = [];
  let picOptions = [
    "https://www.mcdonaldjoneshomes.com.au/sites/default/files/four-4-bedroom-house-designs.jpg",
    "http://edc.h-cdn.co/assets/16/29/2560x1920/sd-aspect-1469205174-bedroom-design-ideas-lead.jpg",
    "https://www.build-review.com/wp-content/uploads/2021/01/large-house.jpg",
    "https://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2012/5/30/0/Original-colonial-den_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1405413131585.jpeg",
    "https://media.istockphoto.com/id/1208205959/photo/beautiful-living-room-interior-with-hardwood-floors-and-and-view-of-kitchen-in-new-luxury-home.jpg?s=612x612&w=0&k=20&c=16JDpVWFywqqrVwR9g4CGSkIZoyJsg76w4SGNTBr-1I=",
    "http://cdn.home-designing.com/wp-content/uploads/2017/07/beige-sofa.jpg",
    "https://www.mydomaine.com/thmb/tWtBK8v9QKwQuXQvafwBc7zOPTA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/helfordln-1-7556f8609cb94144b0fca16114979ecb.jpg",
    "https://media.architecturaldigest.com/photos/5e9f0a12d5eaf100086259e0/4:3/w_3000,h_2250,c_limit/Peter_Sandel_0222.jpg",
    "https://www.thehousedesigners.com/blog/wp-content/uploads/2019/10/House-Plan-7444-Living-Room.jpg",
    "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/38/08/7c.jpg",
  ];

  for (let i = 0; i < 15; i++) {
    let bathrooms = getRandomInt(2, 4);
    let squareFootage = getRandomInt(1600, 3500);
    let price = getRandomInt(1900, 3700);
    let propertyPriceHistory = [];
    let photo = picOptions[getRandomInt(0, 9)];
    for (let year = 2014; year < 2024; year++) {
      price = roundToNearest10(price + Math.round((price * Math.random()) / 6));
      propertyPriceHistory.push({
        year: year,
        price: price,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        square_footage: squareFootage,
        photo: photo,
      });
    }
    query.push(propertyPriceHistory);
  }

  return query;
};

// console.log(generateFiveBedroomPrices());

const generateSixBedroomPrices = () => {
  let bedrooms = 6;
  let query = [];
  let picOptions = [
    "https://www.mcdonaldjoneshomes.com.au/sites/default/files/four-4-bedroom-house-designs.jpg",
    "http://edc.h-cdn.co/assets/16/29/2560x1920/sd-aspect-1469205174-bedroom-design-ideas-lead.jpg",
    "https://www.build-review.com/wp-content/uploads/2021/01/large-house.jpg",
    "https://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2012/5/30/0/Original-colonial-den_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1405413131585.jpeg",
    "https://media.istockphoto.com/id/1208205959/photo/beautiful-living-room-interior-with-hardwood-floors-and-and-view-of-kitchen-in-new-luxury-home.jpg?s=612x612&w=0&k=20&c=16JDpVWFywqqrVwR9g4CGSkIZoyJsg76w4SGNTBr-1I=",
    "http://cdn.home-designing.com/wp-content/uploads/2017/07/beige-sofa.jpg",
    "https://www.mydomaine.com/thmb/tWtBK8v9QKwQuXQvafwBc7zOPTA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/helfordln-1-7556f8609cb94144b0fca16114979ecb.jpg",
    "https://media.architecturaldigest.com/photos/5e9f0a12d5eaf100086259e0/4:3/w_3000,h_2250,c_limit/Peter_Sandel_0222.jpg",
    "https://www.thehousedesigners.com/blog/wp-content/uploads/2019/10/House-Plan-7444-Living-Room.jpg",
    "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/38/08/7c.jpg",
  ];

  for (let i = 0; i < 7; i++) {
    let bathrooms = getRandomInt(2, 6);
    let squareFootage = getRandomInt(2500, 4000);
    let price = getRandomInt(4500, 7000);
    let propertyPriceHistory = [];
    let photo = picOptions[getRandomInt(0, 9)];
    for (let year = 2014; year < 2024; year++) {
      price = roundToNearest10(price + Math.round((price * Math.random()) / 6));
      propertyPriceHistory.push({
        year: year,
        price: price,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        square_footage: squareFootage,
        photo: photo,
      });
    }
    query.push(propertyPriceHistory);
  }

  return query;
};

console.log(generateSixBedroomPrices());
