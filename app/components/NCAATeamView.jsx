var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import StaticLinkItem from 'StaticLinkItem';

var NCAATeamView = React.createClass({
  render: function() {
    var {filters, currentPreview, sizes, team} = this.props;

    var renderStaticLinks = () => {
      return sizes.map((size) => {
        var name = currentPreview[0].name;
        var href = currentPreview[0].url;

        var link = {};
        link.href = href.replace("{size}", size).replace("{team}", team.replace(" ","_")).replace("{name}", name);
        link.value = size;

        return (
          <StaticLinkItem link={link} />
        );
      });
    };

    return (
      <div>
        <div className="static-header">{team}</div>
        {renderStaticLinks()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(NCAATeamView);
