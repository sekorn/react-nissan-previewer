var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var $ = require('jquery');

var LinkItem = React.createClass({
  render: function() {
    var {dispatch, getState, offerData, title, url, year, size, modelcode, offer, param, name, offertemplate, currentPreview} = this.props;

    var renderLinkView = () => {
      debugger;
      if (offer != undefined) {

        var foundOffer = offerData.find((item) => {
          if (item.modelCode == modelcode &&
              item.offerType == Object.keys(offer)[0] &&
              item.offerTypeTemplate == offertemplate &&
              item.year == year[0]){
            return item;
          }
        });

        if (foundOffer != undefined) {
          return (
            <a href={getURL(foundOffer, currentPreview[0].url)} target="_blank">{title}</a>
          );
        } else {
          return (<
            div>-</div>
          );
        }
      }
      else if (param != undefined) {
        return (
          <a href={getURL(null, currentPreview[0].url)} target="_blank">{title}</a>
        );
      }
    }


    var getURL = (foundOffer, url) => {
      var region, dma, offer, offerType, year;

      if (foundOffer) {
        region = foundOffer.region.split(',')[0];
        dma = foundOffer.dma.split(',')[0];
        offer = foundOffer.offerType;
        offerType = foundOffer.offerTypeTemplate
        year = foundOffer.year;

        return url.replace("{modelcode}", foundOffer.modelCode)
          .replace("{dma}", dma)
          .replace("{region}", region)
          .replace("{offer}", offer)
          .replace("{offerType}", offerType)
          .replace("{year}", year)
          .replace("{type}", size.type.toUpperCase())
          .replace("{size}", size.value);

      } else {
        debugger;
        var type = "{" + name + "}";
        return url.replace("{modelcode}", modelcode)
          .replace(type, param);
      }
    };

    return (
      <div className="link-item">
        {renderLinkView()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(LinkItem);
