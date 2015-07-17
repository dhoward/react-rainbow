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

  handleColor: function(event) {
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
    var currentColorStyle = { backgroundColor: currentColor }

    return (
      <div className="settings-form-column">
        <div className="settings-form">

          <div className="headline">
            <h1>Welcome to the</h1>
            <h1>React Rainbow!</h1>
          </div>

          <section>
            <h3>Click on a section of the rainbow to edit its color here</h3>
            <div>
              <div className="currentColor" style={currentColorStyle}></div>
              <input type="text" value={currentColor} onChange={this.handleColor} />
            </div>
          </section>

          <section>
            <h3>Double rainbow?</h3>
            <div>
              <label>Yes, please</label>
              <input type="checkbox" onChange={this.handleDoubleRainbow} />
            </div>
          </section>

        </div>
      </div>
    )
  }

});
