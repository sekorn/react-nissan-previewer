var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import LinkItem from 'LinkItem';

var SubOfferView = React.createClass({
  render: function() {
    var {dispatch, getState, modelcode, offer, suboffer, year, sizes} = this.props;

    var renderSubOfferView = () => {
      return (
        <div className="suboffer-item">
          <div className="suboffer-title">{suboffer}</div>
          {getSizeLinkItems()}
        </div>
      );
    };

    var getSizeLinkItems = () => {
      return sizes.map((size) => {
        return (
          <LinkItem title={size.value}
                    modelcode={modelcode}
                    offer={offer}
                    offertemplate={suboffer}
                    year={year}
                    size={size} />
        );
      });
    };

    return (
      <div className="suboffer-view">
        {renderSubOfferView()}
      </div>
    );
  }
});

export default connect((state) => {
    return state;
  }
)(SubOfferView);
