import * as redux from 'redux'
import thunk from 'redux-thunk'

var {versionDataReducer, previewDataReducer, currentPreviewReducer, offerDataReducer, filterReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    previewData: previewDataReducer,
    offerData: offerDataReducer,
    versionData: versionDataReducer,
    currentPreview: currentPreviewReducer,
    filters: filterReducer    
  })

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
