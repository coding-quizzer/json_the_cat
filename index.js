const { getCatBreedInformation } = require('./breedFetcher');

const arg = process.argv[2];

getCatBreedInformation(arg, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }

});