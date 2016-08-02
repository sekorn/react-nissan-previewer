var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var $ = require('jquery');

var PreviewView = React.createClass({
  render: function() {
    var {currentPreview} = this.props;

    var renderPreview = () => {
      if (currentPreview.length > 0) {
        return (
          <div>
          <label>{currentPreview[0].name}</label>
          <label>{currentPreview[0].url}</label>
          </div>
        );
      }
    };

    return (
        <div>{renderPreview()}</div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  })(PreviewView);
