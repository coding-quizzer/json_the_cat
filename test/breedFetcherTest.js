// breedFetcherTest.js

const { getCatBreedInformation} = require('../breedFetcher');
const { assert } = require('chai');

describe('getCatBreedInformation', () => {
  it('returns a string description for a valid breed, via callback', (done) => {

    getCatBreedInformation('Siberian', (err, desc) => {

      assert.strictEqual(err, null);

      const expectedDesc = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.';

      // compare returned description

      assert.strictEqual(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error for an invalid breed, via callback', (done) => {

    getCatBreedInformation(undefined, (err, desc) => {

      // compare returned error
      const expectedError = 'Cat Breed not found';

      assert.strictEqual(expectedError, err.trim());


      assert.strictEqual(desc, null);

      done();
    });
  });
});