var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var $ = require('jquery');

import NissanAPI from 'NissanAPI';
import YearView from 'YearView';
import StaticView from 'StaticView';
import NCAAView from 'NCAAView';

var PreviewView = React.createClass({
  render: function() {
    var {currentPreview, filters} = this.props;

    var yearArray = NissanAPI.getFilterSet(filters, "year");
    var linksArray = NissanAPI.getCurrentPreviewItem(currentPreview, "links");
    var parametersArray = NissanAPI.getCurrentPreviewItem(currentPreview, "parameters");

    var renderPreview = () => {
      if (linksArray.length == 0) {
        if (parametersArray.length <= 1) {
          return yearArray.map((item) => {
            return (
               <YearView year={Object.keys(item)} />
            );
          })
        } else {
          var teams = (parametersArray[0]).team;
          var sizes = (parametersArray[1]).size;

          return (
            <NCAAView teams={teams} sizes={sizes}/>
          );
        }
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
