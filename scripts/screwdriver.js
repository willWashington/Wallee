let checked = $('.cbox');
let zip = $('#zipform');

let requestweather = false;
let requestwnews = false;
let requestastronomy = false;


$(checked).click(function (event) {
  if ($(event.target).is(":checked")) {
    clickprocessor(event.target);
    $(event.target).css('background-color', 'antiquewhite');
  } else {
    clickprocessor(event.target);
    $(event.target).css('background-color', '#505050');
  }
});

function clickprocessor(target) {
  let id = target.id;
  switch (id) {
    // USER CLICKS LOCAL WEATHER CHECKBOX
    case 'weathercheck':
      if ($(target).is(":checked")) {
        console.log('[USER REQUEST] Weather Requested');
        window.localStorage.setItem('weather', 'true');
        zip.fadeIn('slow');
      } else {
        console.log('[USER REQUEST] Weather Request Rescinded');
        window.localStorage.setItem('weather', 'false');
        zip.fadeOut('slow');
      }
      break;

      // USER CLICKS WORLD NEWS CHECKBOX
    case 'wnewscheck':
      if ($(target).is(":checked")) {
        console.log('[USER REQUEST] World News Requested');
        window.localStorage.setItem('wnews', 'true');
      } else {
        console.log('[USER REQUEST] World News Request Rescinded');
        window.localStorage.setItem('wnews', 'false');
      }
      break;

      // USER CLICKS ASTRONOMY CHECKBOX
    case 'astroncheck':
      if ($(target).is(":checked")) {
        console.log('[USER REQUEST] Astronomy Requested');
        window.localStorage.setItem('astron', 'true');
      } else {
        console.log('[USER REQUEST] Astronomy Request Rescinded');
        window.localStorage.setItem('astron', 'false');
      }
      break;
  }
}


// Screwdriver.js Inspired by Sasha Tran - https://twitter.com/sa_sha26
// https://codepen.io/sashatran/pen/dWNYEv
// Mutilated by William Washington - https://github.com/willwashington