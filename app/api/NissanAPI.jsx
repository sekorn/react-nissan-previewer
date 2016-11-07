
module.exports = {
  getFilters: function() {
    var stringFilters = localStorage.getItem('nissan_filters');
    var filters = [];

    try {
        filters = JSON.parse(stringFilters);
    } catch (e) {

    }

    return $.isArray(filters) ? filters : this.getDefaultFilterJSON();
  },
  setFilters: function(filters) {
    if ($.isArray(filters)) {
      localStorage.setItem('nissan_filters', JSON.stringify(filters));
      return filters;
    }
  },
  getDefaultFilterJSON: function(filters) {
    var json = [
      { "year" : [ {"2017" : "true"}, {"2016" : "true"}, {"2015" : "true"}]},
      { "offer" :
        [
          {"apr" : "true"},
          {"cashback" : "true"},
          {"lease" : "true"},
          {"leasecash" : "true"},
          {"leasesignndrive" : "true"},
          {"mathstack" : "true"},
          {"cashback" : "true"},
          {"negmathstack" : "true"},
          { "msrp" : "true" }
        ]
      },
      { "vehicle" :
        [
          { "AS" : "true" },
          { "AR" : "true" },
          { "FT" : "true" },
          { "JK" : "true" },
          { "LF" : "true" },
          { "MX" : "true" },
          { "MU" : "true" },
          { "PT" : "true" },
          { "QU" : "true" },
          { "RG" : "true" },
          { "SE" : "true" },
          { "TN" : "true" },
          { "XD" : "true" },
          { "VN" : "true" },
          { "VS" : "true" }
        ]
      }
    ];

    return json;
  },
  getCurrentPreviewItem: function (currentPreview, type) {
    if (!$.isArray(currentPreview)) {
      return undefined;
    }

    var array = currentPreview.filter((item) => {
        return item[type];
    })

    try {
      return array[0][type];
    } catch(e) {
      return [];
    }

  },
  getFilterSet: function(filters, type) {
    if (!$.isArray(filters[0])) {
      return undefined;
    }

    var array = filters[0].filter((item) => {
      if (Object.keys(item) == type) {
        return item[type];
      }
    });

    return array[0][type];
  },
  isFilterOn: function(filters, filterItem, type) {

    if (!$.isArray(filters)) {
      return false;
    }

    var typeArray = filters.filter((item) => {
      if (Object.keys(item) == type) {
        return item;
      }
    });

    var returnValue;
    if (typeArray.length > 0) {
        returnValue = typeArray[0][type].filter((item) => {
          if (Object.keys(item) == filterItem) {
              return item;
          }
        });
    }
    return returnValue[0][filterItem] == "true" ? true : false
  }
};
