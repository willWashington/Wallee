
let submit = $('#submitbutton');
let choices = $('.choice-container');
let prompt = $('#interest-prompt');
let btntext = $('#btnspan');

var states = {
  weather: false,
  apod: false,
  worldnews: false,
  homedisplay: true
};

$(submit).click(function (event) {

  stateswap();
});

var stateswap = () => {

  if (btntext.text() === "Home") {
    prettylogger('user', 'Home button clicked.');
    //$(statedisplays.fadeOut('slow'));
    $(prompt.fadeIn('slow'));
    $(choices.fadeIn('slow'));
    $(btntext.text('Submit'));
  } else {
    prettylogger('user', 'Submit button clicked.');
    //$(statedisplays.fadeIn('slow'));
    $(choices.fadeOut('slow'));
    $(prompt.fadeOut('slow'));
    $(btntext.text('Home'));
  }
};

