window.onresize = function(){
  let w = window.innerWidth;
  let smallscreen = false;
  //let submitbutton = document.getElementById("submitbutton");

  console.log(w / 93);
  if (w <= 320) {
    smallscreen = true;
    $('body > :not(#allcontainer)').fadeOut('slow');

  }
  //trying to hide everything except the main container then show "your viewport is too small for this page"
}

