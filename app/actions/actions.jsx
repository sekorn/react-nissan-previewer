import * as GizmoAPI from 'GizmoAPI';
import * as NissanAPI from 'NissanAPI';

export var loadFilterPrefs = (filters) => {
  return {
    type: 'LOAD_FILTER_PREFS',
    filters
  };
};

export var loadPreview = (currentPreview) => {
  return {
    type: 'LOAD_PREVIEW',
    currentPreview
  };
};

export var startLoadPreviewData = () => {
    return (dispatch, getState) => {
      return GizmoAPI.getPreviewData().then((res) => {
        dispatch(loadPreviewData(res));

        var versionSet = new Set();

        res.map((item) => {
            versionSet.add(item.version);
        });

        dispatch(getVersions(versionSet));
      }, (e) => {
        console.log(e);
      });
    };
};

export var loadPreviewData = (previewData) => {
  return {
    type: 'GET_PREVIEW_DATA',
    previewData
  };
};

export var startLoadOfferData = () => {
  return (dispatch, getState) => {
    return GizmoAPI.getOfferData().then((res) => {
      dispatch(loadOfferData(res));
    }, (e) => {
      console.log(e);
    });
  }
}

export var loadOfferData = (offerData) => {
  return {
    type: 'GET_OFFER_DATA',
    offerData
  }
}

export var getVersions = (versionSet) => {
  return {
    type: 'GET_VERSIONS',
    versionSet
  }
}

export var toggleVehicleFilter = (vehicleFilter) => {
  return {
    type: 'TOGGLE_VEHICLE_FILTER',
    vehicleFilter
  }
}

export var toggleOfferFilter = (offerFilter) => {
  return {
    type: 'TOGGLE_OFFER_FILTER',
    offerFilter
  }
}

export var toggleLanguageFilter = (languageFilter) => {
  return {
    type: 'TOGGLE_LANGUAGE_FILTER',
    languageFilter
  }
}
