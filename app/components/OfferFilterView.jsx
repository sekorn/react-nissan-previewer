var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import FilterItem from 'FilterItem';

const OFFERS = [
  { "apr" : "apr" },
  { "cashback" : "cashback" },
  { "lease": "lease" },
  { "leasecash" : "leasecash" },
  { "leasesignndrive" : "leasesignndrive" },
  { "mathstack" : "mathstack" },
  { "cashback" : "cashback" },
  { "negmathstack" : "negmathstack" },
  { "msrp" : "msrp" }
];

var OfferFilterView = React.createClass({
  render: function() {
    return (
      <div>
        <div>Offers</div>
        <div>
          {
            OFFERS.map((item) => {
              return (
                <FilterItem key={item.id} type="offer" item={item} />
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
)(OfferFilterView);
