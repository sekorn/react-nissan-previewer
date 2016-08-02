var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var FilterItem = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <checkbox id="newId" checked="false" />
        </div>
        <div>
          <label>Checkbox</label>
        </div>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(FilterItem);
