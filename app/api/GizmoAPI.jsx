var axios = require('axios');

const PREVIEW_DATA_URL = "http://gizmo.serving-sys.com/api/data/get/674";
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
