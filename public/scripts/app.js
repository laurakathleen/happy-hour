
$(document).ready(function() {
	console.log('app.js loaded!');

  // render multiple listings for homepage
  $.ajax({
  method: 'GET',
  url: '/api/happyHours',
  success: renderMultipleListings,
  error: renderMultipleError
  }); 
});

function onHappyHourSuccess(json){
  renderOneListing(json);
}

function onHappyHourError(error) {
  console.log('on happy hour error is', error);
}

function renderMultipleError(error) {
  console.log('render multiple error is', error);
}



function renderListing(happyHour) {
   console.log('happyHour:', happyHour);
  var happyHourSource = $('#happy-hour-template').html();
  console.log(happyHourSource);
  var happyHourTemplate = Handlebars.compile(happyHourSource);
  var happyHourHtml = happyHourTemplate(happyHour);
  $('#happy-hour-section').append(happyHourHtml);
  // console.log(reviewHtml); 
}

function renderMultipleListings(listings) {
  console.log(listings);
  listings.forEach(function(listing) {
    renderListing(listing);
  });
}



function onError(error) {
	console.log('error is', error);
}

