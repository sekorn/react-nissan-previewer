var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var $ = require('jquery');

import NissanAPI from 'NissanAPI';
import YearView from 'YearView';

var PreviewView = React.createClass({
  render: function() {
    var {currentPreview, filters} = this.props;

    var yearArray = NissanAPI.getFilterSet(filters, "year");

    var renderPreview = () => {
      return yearArray.map((item) => {
        return (
           <YearView year={Object.keys(item)} />
        );
      })
    };

    return (
        <div>{renderPreview()}</div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(PreviewView);
