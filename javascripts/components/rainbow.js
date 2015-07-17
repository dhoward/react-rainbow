React = require('react');
require('react/addons');

module.exports = React.createClass({

  propTypes: {
    settings: React.PropTypes.object.isRequired
  },

  editColor: function(color) {
    this.props.settings.editColor(color);
  },

  renderStripes: function() {
    var _this = this;
    var settings = this.props.settings;
    var colors = settings.colors;
    var doubleRainbow = this.props.settings.doubleRainbow;
    var stripeWidth;

    if(doubleRainbow) {
      colors = colors.concat(colors);
    }

    stripeWidth = (1 / colors.length) * 100; // width as a percentage

    return colors.map( function(color, i){
      var left = stripeWidth * i;
      var style = { backgroundColor: color.color, width: stripeWidth+'%', left: left+'%' };
      return <div key={i} className="stripe" style={style} onClick={_this.editColor.bind(_this, color)}></div>
     });
  },

  render: function() {
    return (
      <div className="rainbow-holder">
        <div className="rainbow">
          { this.renderStripes() }
          <div className="cloud"></div>
        </div>
      </div>
    )
  }

});
