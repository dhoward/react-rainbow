module.exports = function() {

  this.colors = [
    { color: '#ff0000' },
    { color: '#ffa500' },
    { color: '#ffff00' },
    { color: '#00ff00' },
    { color: '#0000ff' },
    { color: '#551A8B' }
  ];

  this.editColor = function(oldColor, newColor) {
    this.currentColor = oldColor;

    if(newColor) {
      this.currentColor.color = newColor;
    }

    if(this.onUpdate) {
      this.onUpdate();
    }
  };

};