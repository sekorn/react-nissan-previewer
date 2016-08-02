var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

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

var FilterView = React.createClass({
  render: function() {
    return <div></div>
  }
});

export default connect((state) => {
    return state;
  }
)(FilterView);
