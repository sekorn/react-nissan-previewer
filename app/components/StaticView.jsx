var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import NissanAPI from 'NissanAPI';
import StaticLinkItem from 'StaticLinkItem';

var StaticView = React.createClass({
  render: function () {
    var {filters, currentPreview} = this.props;

    var linksArray = [];
    var parametersArray = [];
    var title = "";

    var renderYearView = () => {
      if (currentPreview.length > 0) {

        debugger;

        title = currentPreview[0].name;
        linksArray = NissanAPI.getCurrentPreviewItem(currentPreview, "links");
        parametersArray = NissanAPI.getCurrentPreviewItem(currentPreview, "parameters");

        return (
          <div className="static-title">
            <div className="static-header">{title}</div>
            {getStaticItems()}
          </div>
        );

      } else {

      }
    };

    var getStaticItems = () => {
      if (parametersArray.length > 1) {

        var teams = parametersArray[0];
        var sizes = parametersArray[1];

        var teamArray = teams.team;
        var sizeArray = sizes.size;

        debugger;

        for (var team in teamArray) {
          if (teamArray.hasOwnProperty(team)) {
            //console.log(teamArray[team]);
            for (var size in sizeArray) {
              if (sizeArray.hasOwnProperty(size)) {
                //console.log("team: ", teamArray[team], "; size: ", sizeArray[size]);
              }
            }
          }
        }
      } else {
        return linksArray.map((link) => {
          return (
            <StaticLinkItem link={link} />
          );
        });
      }
    };

    return (
      <div className="year-view">
        {renderYearView()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(StaticView);
