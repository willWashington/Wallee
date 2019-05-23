var name = "codemzy";
$.get('https://weather.com/weather/tenday/l/37840:4:US' + name, function(response) {
  console.log(response);
});

