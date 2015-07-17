module.exports = function() {

  this.colors = [
    { color: '#ff0000' },
    { color: '#ffa500' },
    { color: '#ffff00' },
    { color: '#00ff00' },
    { color: '#0000ff' },
    { color: '#551A8B' }
  ];

  this.doubleRainbow = false;

  this.editColor = function(oldColor, newColor) {
    this.currentColor = oldColor;

    if(newColor) {
      this.currentColor.color = newColor;
    }

    if(this.onUpdate) {
      this.onUpdate();
    }
  };

  this.setDoubleRainbow = function(doubleRainbow) {
    this.doubleRainbow = doubleRainbow;

    if(this.doubleRainbow) {
      var sound = new Audio("double-rainbow.mp3");
      sound.play();
    }

    if(this.onUpdate) {
      this.onUpdate();
    }
  };

};