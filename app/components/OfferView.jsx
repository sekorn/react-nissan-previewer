var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import SubOfferView from 'SubOfferView';

var OfferView = React.createClass({
  render: function() {
    var {dispatch, getState, modelcode, offer, year, sizes} = this.props;

    var suboffers = offer[Object.keys(offer)];

    var renderOfferView = () => {
      return (
        <div className="offer-item">
          {getSubOfferItems()}
        </div>
      );
    };

    var getSubOfferItems = () => {
      return suboffers.map((suboffer) => {
        return (
          <div className="offer-view">
            <SubOfferView year={year} modelcode={modelcode} offer={offer} suboffer={suboffer} sizes={sizes} />
          </div>
        );
      });
    };

    return (
      <div className="offer-view">
        {renderOfferView()}
      </div>
    );
  }
});

export default connect((state) => {
    return state;
  }
)(OfferView);
