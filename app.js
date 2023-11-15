"use strict";

async function getGiphy() {

  const giphy = $('#search-term').value();
  const params = new URLSearchParams({giphy});
  const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${params}`);
  const searchResult = await response.json();

  console.log(params);

}

console.log("Let's get this party started!");