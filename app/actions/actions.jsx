import * as GizmoAPI from 'GizmoAPI';

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

export var updateVehicleFilter = (vehicleFilter) => {
  return {
    type: 'UPDATE_VEHICLE_FILTER',
    vehicleFilter
  }
}

export var updateOfferFilter = (offerFilter) => {
  return {
    type: 'UPDATE_OFFER_FILTER',
    offerFilter
  }
}
