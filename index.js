/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . Also make any necessary adjustments to make this app accessible. */

function getDataFromApi(artist, title, callback) {
  //your code here
  //https://lyricsovh.docs.apiary.io/#
  $.ajax({
    url: `https://api.lyrics.ovh/v1/${artist}/${title}`

  }).done(data => callback(data) )
}

function displaySearchData(data) {
  //your code here
  $('.js-search-results').html( data.lyrics);
}

function watchSubmit() {
  //your code here
  $('form').submit( env  =>{
    env.preventDefault;
    getDataFromApi($('.js-query-artist').val(), $('.js-query-title').val(), displaySearchData)
  })
}

$(watchSubmit);
