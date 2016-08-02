var React = require('react');
var {Provider} = require('react-redux');
var ReactDOM = require('react-dom');

// this syntax is basically doing this
// create a variable called X where { X } will be set to requre('react-router').X
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();

var PreviewApp = require('PreviewApp');

store.dispatch(actions.startLoadPreviewData());
store.dispatch(actions.startLoadOfferData());

// Load foundation
//$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <PreviewApp />
  </Provider>,
  document.getElementById('app')
);
