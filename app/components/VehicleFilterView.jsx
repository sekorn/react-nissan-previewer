var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import FilterItem from 'FilterItem';

const VEHICLES = [
  { "AS" : "Altima" },
  { "AR" : "Armada" },
  { "FT" : "Frontier" },
  { "JK" : "Juke" },
  { "LF" : "Leaf" },
  { "MX" : "Maxima" },
  { "MU" : "Murano" },
  { "PT" : "Pathfinder" },
  { "QU" : "Quest" },
  { "RG" : "Rogue" },
  { "SE" : "Sentra" },
  { "TN" : "Titan" },
  { "XD" : "Titan XD" },
  { "VN" : "Versa Note" },
  { "VS" : "Versa Sedan" }
];

var VehicleFilterView = React.createClass({
  render: function() {
    return (
      <div>
        <div>Vehicles</div>
        <div>
          {
            VEHICLES.map((item) => {
              return (
                <FilterItem type="vehicle" item={item} />
              )
            })
          }
        </div>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(VehicleFilterView);
