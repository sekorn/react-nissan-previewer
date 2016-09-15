var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var $ = require('jquery');

import NissanAPI from 'NissanAPI';
import YearView from 'YearView';
import StaticView from 'StaticView';

var PreviewView = React.createClass({
  render: function() {
    var {currentPreview, filters} = this.props;

    var yearArray = NissanAPI.getFilterSet(filters, "year");
    var linksArray = NissanAPI.getCurrentPreviewItem(currentPreview, "links");

    var renderPreview = () => {
      if (linksArray.length == 0) {
        return yearArray.map((item) => {
          return (
             <YearView year={Object.keys(item)} />
          );
        })
      } else {
        return (
            <StaticView />
        );
      }
    };

    return (
        <div>
          {renderPreview()}
        </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(PreviewView);
