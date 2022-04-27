/* eslint-disable linebreak-style */

$(() => {

  function Dancer (top, left) {
    const dancer = {};
    // Here we use jQuery to create an HTML <div> tag.
    dancer.$node = $('<div class="dancer"></div>');
    Object.assign(dancer, dancerMethods);
    // Now that the dancer object has access to its methods,
    // we can set its position to the desired coordinates.
    dancer.setPosition(top, left);
    return dancer;
  }
  const dancerMethods = {};
  dancerMethods.setPosition = function (top, left) {
    // Here we use the CSS top and left properties to position our dancer
    // where it belongs on the page. See http://api.jquery.com/css/
    this.$node.css({top, left});
  };

  const tapDancerMethods = {};
  tapDancerMethods.blinker = function () {
    this.$node.css('animation','blink 1s step-start infinite');
  };

  function Tapper (top, left) {
    const tapper = Dancer(top, left);
    tapper.$node.addClass('tap-dancer');
    return tapper;
  }

  function Rainbow (top, left) {
    const rainbow = Dancer(top, left);
    rainbow.$node.addClass('tap-rainbow');
    return rainbow;
  }

  // Have a look at the last function in this file and figure out how to
  // make the regular dancers appear on stage. Then come back here
  // and continue with the TapDancer constructor.
  function randomStagePosition () {
    // Implement this function so that it returns an array with
    // the height and width coordinates of a random point on stage,
    // measured as the distance in pixels from its top-left corner.
    // Then use it every time you want to place a new dancer on stage.
    var x = $('#stage').height();
    var y = $('#stage').width();
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX - 20, randomY - 20];
  }

  // $( '#regular' ).click(function () {
  //   alert( 'Handler for .click() called.' );
  // });
  //const el = document.getElementById('regular');
  //el.click(function () {
  $('#regular').on('click', () => {
    console.log('Hello');
    const [top, left] = randomStagePosition();
    const dancer = Dancer(top, left);
    $('#stage').append(dancer.$node);
  });

  $('#tapper').on('click', () => {
    console.log('Hello');
    const [top, left] = randomStagePosition();
    const tapper = Tapper(top, left);
    $('#stage').append(tapper.$node);
  });

  $('#rainbow').on('click', () => {
    console.log('Hello');
    const [top, left] = randomStagePosition();
    const newRainbow = Rainbow(top, left);
    $('#stage').append(newRainbow.$node);
  });
});
