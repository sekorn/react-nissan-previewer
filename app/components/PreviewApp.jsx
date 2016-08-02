var React = require('react');
var $ = require('jquery');

import OfferData from 'OfferData';
import PreviewList from 'PreviewList';
import PreviewData from 'PreviewData';
import PreviewView from 'PreviewView';
import FilterView from 'FilterView';

var PreviewApp = React.createClass({
  render: function() {
    return (
      <div>
        <OfferData/>
        <PreviewData/>        

        <h1 className="page-title">Nissan Preview App</h1>
        <div className="row">
          <div className="medium-3 columns">
            <PreviewList/>
          </div>
          <div className="medium-9 columns">
            <ul className="tabs" data-tabs id="view">
              <li className="tabs-title is-active"><a href="#links" aria-selected="true" onClick={() => {

                }}>Links</a></li>
              <li className="tabs-title"><a href="#filters" onClick={() => {

                }}>Filters</a></li>
            </ul>

            <div className="tabs-content" data-tabs-content="view">
              <div className="tabs-panel" id="filters">
                <FilterView/>
              </div>
              <div className="tabs-panel is-active" id="links">
                <PreviewView />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PreviewApp;
