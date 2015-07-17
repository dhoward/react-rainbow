React = require('react');
require('react/addons');
Rainbow = require('./rainbow')
SettingsForm = require('./settingsForm')
Settings = require('../models/settings')

module.exports = React.createClass({

  propTypes: {
    settings: React.PropTypes.object
  },

  getDefaultProps: function() {
    var settings = new Settings();
    settings.onUpdate = this.handleUpdate;

    return {
      settings: settings
    }
  },

  componentDidMount: function() {
    this.props.settings.onUpdate = this.handleUpdate;
  },

  handleUpdate: function() {
    this.forceUpdate();
  },

  render: function() {
    return (
      <div className="sky">
        <Rainbow settings={this.props.settings} />
        <SettingsForm settings={this.props.settings} />
      </div>
    )
  }

});
