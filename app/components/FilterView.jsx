var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import OfferFilterView from 'OfferFilterView';
import VehicleFilterView from 'VehicleFilterView';
import LanguageFilterView from 'LanguageFilterView';

var FilterView = React.createClass({
  render: function() {

    var html = () => {
      return (
        <div>
          <div>
            <OfferFilterView/>
          </div>
          <div>
            <VehicleFilterView/>
          </div>
          <div>
            <LanguageFilterView/>
          </div>
        </div>
      );
    }

    return (
      <div className="row">
        
      </div>
    );
  }
});

export default connect((state) => {
    return state;
  }
)(FilterView);
