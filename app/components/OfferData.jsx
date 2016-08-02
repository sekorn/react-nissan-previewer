var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import * as GizmoAPI from 'GizmoAPI';

export var OfferData = React.createClass({
  render: function() {
    var {offerData} = this.props;

    return (<div></div>);
  },
  getRecord: function(model, offer, suboffer, year) {
    var {offerData} = this.props;
    var modelyear = year;

    var foundsOffers = [];
    foundOffers = offerList.find((item) => {
      if (item.modelCode === model &&
          item.offerType === offer &&
          item.offerTypeTemplate === suboffer &&
          item.year === year){
        return item;
      }
    });

    console.log("foundOffers", foundOffers);
    return foundsOffers;
  }
});

export default connect(
  (state) => {
    return state;
  })(OfferData);
