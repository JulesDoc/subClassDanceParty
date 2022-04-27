/* eslint-disable linebreak-style */

$(() => {

  function Dancer (top, left) {
    this.$node = $('<div class="dancer"></div>');
    this.setPosition(top, left);
  }

  Dancer.prototype.setPosition = function (top, left) {
    this.$node.css({top, left});
  };

  function Tapper (top, left) {
    Dancer.call(this, top, left);
    this.$node.addClass('tap-dancer');
  }
  Tapper.prototype = Object.create(Dancer.prototype);
  Tapper.prototype.constructor =  Tapper;

  function Rainbow (top, left) {
    Dancer.call(this, top, left);
    this.$node.addClass('tap-rainbow');
  }
  Rainbow.prototype = Object.create(Dancer.prototype);
  Rainbow.prototype.constructor =  Rainbow;

  function randomStagePosition () {
    var x = $('#stage').height();
    var y = $('#stage').width();
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX - 20, randomY - 20];
  }

  $('#regular').on('click', () => {
    console.log('Hello');
    const [top, left] = randomStagePosition();
    const dancer = new Dancer(top, left);
    $('#stage').append(dancer.$node);
  });

  $('#tapper').on('click', () => {
    console.log('Hello');
    const [top, left] = randomStagePosition();
    const tapper = new Tapper(top, left);
    $('#stage').append(tapper.$node);
  });

  $('#rainbow').on('click', () => {
    console.log('Hello');
    const [top, left] = randomStagePosition();
    const newRainbow = new Rainbow(top, left);
    $('#stage').append(newRainbow.$node);
  });

});
