const request = require('request');
const getCatBreedInformation = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, message, body) => {
  
    if (error) {
      callback(error, null);
      return;
    }
    
    if (message.statusCode === 404) {
      callback("Error 404: Page not found", null);
      return;
    }

    const infoArray = JSON.parse(body);
   
    if (!(Array.isArray(infoArray))) {
      callback("Request Failed", null);
      return;
    }
    
    if (infoArray.length === 0) {
      callback("Cat Breed not found", null);
      return;
    }
    const breedInfo = JSON.parse(body)[0];
    callback(null, breedInfo.description);
  });
};


module.exports = { getCatBreedInformation };