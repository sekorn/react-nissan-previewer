var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import SubParameterView from 'SubParameterView';

var ParameterView = React.createClass({
  render: function() {
    var {dispatch, getState, modelcode, param, paramName, year, sizes} = this.props;

    var renderParameterView = () => {
      return (
        <div className="parameter-item">
          {getParameterItems()}
        </div>
      );
    };

    var getParameterItems = () => {
        return (
          <div className="parameter-view">
            <SubParameterView sizes={sizes} year={year} modelcode={modelcode} param={param} name={paramName}/>
          </div>
        );
    };

    return (
      <div className="parameter">
        {renderParameterView()}
      </div>
    );
  }
});

export default connect((state) => {
    return state;
  }
)(ParameterView);
