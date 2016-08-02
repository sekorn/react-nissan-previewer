var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import FilterItem from 'FilterItem';

const OFFERS = [
  { "apr" : ["apr", "cashback"] },
  { "lease": ["lease", "leasecash", "leasesignndrive"] },
  { "mathstack": ["mathstack", "cashback", "negmathstack"] },
  { "msrp" : ["msrp"] }
];

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

const LANG = [
  { "en" : "English" },
  { "es" : "Spanish" }
];

var FilterView = React.createClass({
  render: function() {
    return (
      <div className="filters">
        <div className="filters-title">Offers</div>
        <div>
          {
            OFFERS.map((item) => {
              return <FilterItem />
            })
          }
        </div>
        <div className="filters-title">Vehicles</div>
        <div>
          {
            VEHICLES.map((item) => {
              return <FilterItem />
            })
          }
        </div>
        <div className="filters-title">Languages</div>
        <div>
          {
            LANG.map((item) => {
              return <FilterItem />
            })
          }
        </div>
      </div>
    );
  }
});

export default connect((state) => {
    return state;
  }
)(FilterView);
