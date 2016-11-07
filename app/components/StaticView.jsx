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
    var url = "";

    var renderYearView = () => {
      if (currentPreview.length > 0) {

        title = currentPreview[0].name;
        linksArray = NissanAPI.getCurrentPreviewItem(currentPreview, "links");

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
      return linksArray.map((link) => {
        return (
          <StaticLinkItem link={link} />
        );
      });
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
