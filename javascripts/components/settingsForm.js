React = require('react');
require('react/addons');

module.exports = React.createClass({

  propTypes: {
    settings: React.PropTypes.object.isRequired
  },

  getDefaultProps: function() {
    return {
      settings: {}
    }
  },

  getInitialState: function() {
    return {
      currentColor: {}
    }
  },

  componentWillReceiveProps: function(props) {
    this.setState({ currentColor: props.settings.currentColor || {} })
  },

  changeColor: function(event) {
    var oldColor = this.props.settings.currentColor;
    var newColor = event.target.value;
    this.props.settings.editColor(oldColor, newColor);
  },

  handleDoubleRainbow: function(event) {
    this.props.settings.setDoubleRainbow(event.target.checked);
  },

  render: function() {
    var settings = this.props.settings;
    var currentColor = this.state.currentColor.color || '';

    return (
      <div className="settings-form">
        { settings.editColor ?
            <div>
              <div className="currentColor"></div>
              <input value={currentColor} onChange={this.changeColor} />
            </div>
          :
            <h2>Click on a section of the rainbow to edit a color</h2>
        }
        <div>
          <label>Double rainbow?</label>
          <input type="checkbox" onChange={this.handleDoubleRainbow} />
        </div>
      </div>
    )
  }

});
