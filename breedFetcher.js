const request = require("request");

const fetchPage = function (breed, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(apiUrl, (error, response, body) => {
    if (error) {
      callback(`Failed to request details. Details: `, null);
    }

    const data = JSON.parse(body); 

    if (!data[0]) callback(undefined, undefined);
    else callback(undefined, data[0].description);
  });
};

module.exports = { fetchPage };