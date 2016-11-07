var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import NCAATeamView from 'NCAATeamView';

var NCAAView = React.createClass({
  render: function() {
    var {filters, currentPreview, teams, sizes} = this.props;

    var name = currentPreview[0].name;

    var renderNCAAView = () => {
      return teams.map((team) => {
        return (
          <NCAATeamView sizes={sizes} team={team} />
        );
      });
    };

    return (
      <div>
        <div className="vehicle-item">{name}</div>
        {renderNCAAView()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(NCAAView);
