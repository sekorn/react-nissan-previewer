var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var $ = require('jquery');

var StaticLinkItem = React.createClass({
  render: function() {
    var {dispatch, getState, link, currentPreview} = this.props;

    var renderLinkView = () => {
      if (link != undefined) {
        return (
          <a href={link.href} target="_blank">{link.value}</a>
        );
      } else {
        return (<
          div>-</div>
        );
      }
    }

    return (
      <div className="link-item">
        {renderLinkView()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(StaticLinkItem);
