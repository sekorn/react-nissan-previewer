var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import NissanAPI from 'NissanAPI';
import OfferView from 'OfferView';
import ParameterView from 'ParameterView';

var VehicleView = React.createClass({
  render: function() {
    var {year, vehicle, offers, parameters, sizes, currentPreview} = this.props;

    var renderVehicleView = () => {
      return (
        <div className="vehicle-item">
          <div className="vehicle-title">{vehicle.name}</div>
          {getOfferItems()}
        </div>
      );
    };

    var getOfferItems = () => {
      if (offers.length > 0) {
        return offers.map((offer) => {
          return (
            <OfferView modelcode={vehicle.code} offer={offer} year={year} sizes={sizes} />
          );
        });
      }
      else if (parameters.length > 0) {
        var arrayName = Object.keys(parameters[0]);
        var array = parameters[0][arrayName];
                
        return array.map((param) => {
          return (
            <ParameterView modelcode={vehicle.code} param={param} year={year} sizes={sizes} paramName={arrayName} />
          );
        })
      }

    };

    return (
      <div className="vehicle-view">
        {renderVehicleView()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(VehicleView);
