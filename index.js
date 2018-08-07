$(document).ready(function() {
  var container = $('.container');
  console.log(container);

  setInterval(function() {
    container.toggleClass('container-transition');
    //container.toggle(1000);
  }, 1000);
});
