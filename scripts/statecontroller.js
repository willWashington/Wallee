
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
    $(prompt.fadeIn('fast'));
    $(choices.fadeIn('fast'));
    $(btntext.text('Submit'));
  } else {
    prettylogger('user', 'Submit button clicked.');
    //$(statedisplays.fadeIn('slow'));
    $(choices.fadeOut('fast'));
    $(prompt.fadeOut('fast'));
    $(btntext.text('Home'));
  }
};

