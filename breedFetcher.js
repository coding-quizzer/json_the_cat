const request = require('request');
const getCatBreedInformation = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, message, body) => {
  
    if (error) {
      console.log("error:", error);
      callback("Cat API Access failed:", null);
      return;
    }
    
    console.log(message.statusCode);
    if (message.statusCode === 404) {
      callback("Error 404: Page not found", null);
      return;
    }

    const infoArray = JSON.parse(body);
    
    /* console.log(body);
    console.log("status code ", message.statusCode); */
    
    if (!(Array.isArray(infoArray))){
      callback("Request Failed", null);
      return;
    }
    
    if (infoArray.length === 0) {
      callback("Cat Breed not found", null);
      return;
    }
    const breedInfo = JSON.parse(body)[0];
    callback(null, breedInfo.description);
    // console.log("breedInfo:", breedInfo);
  });
};

const arg = process.argv[2];

getCatBreedInformation(arg, (error, description) => console.log(error ? error : description));