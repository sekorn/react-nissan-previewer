var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import * as GizmoAPI from 'GizmoAPI';

export var PreviewData = React.createClass({
  render: function() {
    var {previewData, getState} = this.props;

    //console.log(getState);
    return (
      <div></div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(PreviewData);
