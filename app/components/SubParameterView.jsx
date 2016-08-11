var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import LinkItem from 'LinkItem';

var SubParameterView = React.createClass({
  render: function() {
    var {dispatch, getState, modelcode, param, name, year, sizes} = this.props;

    var renderSubParameterView = () => {
      return (
        <div className="subparameter-item">
          <div className="subparameter-title">{param}</div>
          {getSizeLinkItems()}
        </div>
      );
    };

    var getSizeLinkItems = () => {      
      return sizes.map((size) => {
        return (
          <LinkItem title={size.value}
                    modelcode={modelcode}
                    param={param}
                    year={year}
                    size={size}
                    name={name} />
        );
      });
    };

    return (
      <div className="subparameter-view">
        {renderSubParameterView()}
      </div>
    );
  }
});

export default connect((state) => {
    return state;
  }
)(SubParameterView);
