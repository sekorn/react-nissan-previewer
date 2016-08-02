var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var $ = require('jquery');

var GizmoAPI = require('GizmoAPI');

export var PreviewList = React.createClass({
  render: function() {
    var {dispatch, getState, previewData, versionData} = this.props;

    var renderMenuItem = (item) => {
      return (
        <li key={item}>
          <a href="#">{item}</a>
          <ul className="menu vertical nested">
            {renderDropDown(item)}
          </ul>
        </li>
      );
    };

    var renderDropDown = (item) => {
      return previewData.map((previewItem) => {
        if (previewItem.version === item) {
          return <li key={previewItem.name}><a href="#" onClick={() => {
              dispatch(actions.loadPreview(previewItem));
            }}>{previewItem.name}</a></li>
        }
      });
    };

    var renderList = () => {
      if (versionData.length != 0) {
        return versionData.map((listItem) => {
          return renderMenuItem(listItem);
        });
      } else {
        return <div id="emptyList" className="list-empty">No items to display</div>
      }
    };

    return (
      <div className="list">
        <ul className="vertical menu" data-accordion-menu>
          {renderList()}
        </ul>
      </div>
    );
  },
  componentDidUpdate: function() {    
    if ($("#emptyList").length == 0 && Foundation._uuids.length == 0) {
      $(document).foundation();
    }
  }
});

export default connect(
  (state) => {
    return state;
  })(PreviewList);
