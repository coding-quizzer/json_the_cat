const request = require('request');
const getCatBreedInformation = function(breed, callback) {
  request(`https://api.thcatapi.com/v1/breeds/search?q=${breed}`, (error, message, body) => {
  
    if (error) {
      console.log("error:", error);
      callback("Cat API Access failed:");
      return;
    }
    
    console.log(message.statusCode);
    if (message.statusCode === 404) {
      callback("Error 404: Page not found");
      return;
    }

    const infoArray = JSON.parse(body);
    
    /* console.log(body);
    console.log("status code ", message.statusCode); */
    
    if (!(Array.isArray(infoArray))) {
      callback("Request Failed");
      return;
    }
    
    if (infoArray.length === 0) {
      callback("Cat Breed not found");
      return;
    }
    const breedInfo = JSON.parse(body)[0];
    callback(breedInfo.description);
    // console.log("breedInfo:", breedInfo);
  });
};

const arg = process.argv[2];

getCatBreedInformation(arg, description => console.log(description));