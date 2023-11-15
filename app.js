"use strict";


/** Takes nothing. Grabs search term, uses it to get results from GIPHY,
 *  returns X.
 */
async function getGiphy() {


  // Find search value input
  const giphy = $('#search-term').val();

  // Generate URL for fetch
  const params = new URLSearchParams({giphy});

  // Key for Giphy
  const apiKey = "&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

  const response = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${params}${apiKey}`
  );



  // turn found JSON to
  const searchResult = await response.json();
  console.log(`http://api.giphy.com/v1/gifs/search?q=rest&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
  console.log(searchResult);
  console.log(params);

  let int = getRandomInt();

  console.log(searchResult.data[int]["images"]["original"]["url"]);

  return searchResult.data[int]["images"]["original"]["url"];
}

async function appendImage(evt) {
  evt.preventDefault();
  const image = $('<img>');

  const giphy = await getGiphy();

  image.attr("src",giphy);
  $('#giphies').append(image);
  console.log("appendImage");
  console.log("giphy",giphy);
}

function getRandomInt() {
  console.log("getRandomInt")
  return Math.floor(Math.random()*(20-1+1)+1)
}



// Add event listener
$("#submit-form").on("click", appendImage);


