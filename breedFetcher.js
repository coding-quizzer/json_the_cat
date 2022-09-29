const request = require('request');
const getCatBreedInformation = function() {
  request('https://api.thecatapi.com/v1/breeds/search?q=siberian', (error, message, body) => {
  
    if (error) {
      console.log("error:", error);
    }  
    // console.log("message: ", message);
    const breedInfo = JSON.parse(body)[0]; 
    // console.log("typeof(body)", typeof(body))
    // console.log("body", body);
    // console.log("breedInfo:", breedInfo);
    console.log(breedInfo.description);
  });
}

getCatBreedInformation('siberian');