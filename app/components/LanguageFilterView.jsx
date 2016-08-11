var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import FilterItem from 'FilterItem';

const LANG = [
  { "en" : "English" },
  { "es" : "Spanish" }
];

var LanguageFilterView = React.createClass({
  render: function() {
    return (
      <div>
        <div>Language</div>
        <div>
          {
            LANG.map((item) => {
              return (
                <FilterItem type="language" item={item} />
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
)(LanguageFilterView);
