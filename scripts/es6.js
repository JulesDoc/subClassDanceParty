/* eslint-disable linebreak-style */

$(() => {

  class Dancer {
    constructor (top, left) {
      this.top = top;
      this.left = left;
    }
    setPosition (top, left) { 
      this.$node.css({top, left});
    }
  }

  class Tapper extends Dancer {
    constructor (top, left) {
      super(top, left);
    }
  }

  class Rainbow extends Dancer {
    constructor (top, left) {
      super(top, left);
    }
  }

  function randomStagePosition () {
    // Implement this function so that it returns an array with
    // the height and width coordinates of a random point on stage,
    // measured as the distance in pixels from its top-left corner.
    // Then use it every time you want to place a new dancer on stage.
    var x = 800;
    var y = 1600;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
  }

  $('#regular').on('click', () => {
    console.log('Hello');
    const [top, left] = randomStagePosition();
    const newDancer = Dancer(top, left);
    $('#stage').append(newDancer.$node);
  });

  $('#tapper').on('click', () => {
    console.log('Hello');
    const [top, left] = randomStagePosition();
    const newTapper = Tapper(top, left);
    $('#stage').append(newTapper.$node);
  });

  $('#rainbow').on('click', () => {
    console.log('Hello');
    const [top, left] = randomStagePosition();
    const newRainbow = Rainbow(top, left);
    $('#stage').append(newRainbow.$node);
  });
});

