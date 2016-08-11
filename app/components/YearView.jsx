var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import NissanAPI from 'NissanAPI';
import VehicleView from 'VehicleView';

var YearView = React.createClass({
  render: function () {
    var {year, filters, currentPreview} = this.props;

    var vehiclesArray = [];
    var offersArray = [];
    var sizeArray = [];
    var parametersArray = [];

    var renderYearView = () => {
      if (currentPreview.length > 0) {

        vehiclesArray = NissanAPI.getCurrentPreviewItem(currentPreview, "vehicles");
        offersArray = NissanAPI.getCurrentPreviewItem(currentPreview, "offers");
        sizeArray = NissanAPI.getCurrentPreviewItem(currentPreview, "sizes");
        parametersArray = NissanAPI.getCurrentPreviewItem(currentPreview, "parameters");

        var yearItem = "year"+year;
        return (
          <div id={yearItem} className="year-item accordion" data-accordion>
            <div className="year-header">{year}</div>
            {getVehicleItems()}
          </div>
        );
      } else {

      }
    };

    var getVehicleItems = () => {
      return vehiclesArray.map((vehicle) => {
        return (
          <VehicleView key={vehicle.code} year={year} vehicle={vehicle} offers={offersArray} parameters={parametersArray} sizes={sizeArray} />
        );
      });
    };

    return (
      <div className="year-view">
        {renderYearView()}
      </div>
    );
  },
  componentDidUpdate: function() {
    var {year} = this.props;
    var yearItem = "#year"+year;

    if ($(yearItem).length > 0) {
      $(yearItem).foundation();
    }
  }
});

export default connect(
  (state) => {
    return state;
  }
)(YearView);
