var axios = require('axios');
//var data = require('test.json');

const PREVIEW_DATA_URL = "/nissan.json";
const OFFER_DATA_URL = "http://gizmo.serving-sys.com/api/data/get/481";

module.exports = {
  getPreviewData: function() {
    var requestUrl = PREVIEW_DATA_URL;

    return axios.get(requestUrl).then((res) => {
      return res.data.NissanPreviewer;
    });
  },
  getOfferData: function() {
    var requestUrl = OFFER_DATA_URL;

    return axios.get(requestUrl).then((res) => {
        return res.data.offers;
    });
  }
};
