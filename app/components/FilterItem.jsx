var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var FilterItem = React.createClass({
  render: function() {
    var {dispatch, getState, item, type} = this.props;

    return (
      <div className="filter-item" onClick={() => {
          switch(type) {
            case "offer":
              dispatch(actions.toggleOfferFilter());
            case "vehicle":
              dispatch(actions.toggleVehicleFilter());
            case "language":
              dispatch(actions.toggleLanguageFilter());
            default:
              return;
          }
          dispatch(actions.updateFilter());
        }}>
        <div>
          <input type="checkbox" id={Object.keys(item)} checked="true" />
        </div>
        <div>
          <p>{item[Object.keys(item)]}</p>
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
