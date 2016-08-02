import  GizmoAPI from 'GizmoAPI';

export var previewDataReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_PREVIEW_DATA':
      return [
        ...state,
        ...action.previewData
      ];
    default:
      return state;
  }
};
export var currentPreviewReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_PREVIEW':
      return [
        action.currentPreview
      ];
    default:
      return state;
  }
};
export var versionDataReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_VERSIONS':
      return [
        ...state,
        ...action.versionSet
      ];
    default:
      return state;
  }
};
export var offerDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_OFFER_DATA':
      return [
        ...state,
        ...action.offerData
      ];
    default:
      return state;
  }
};
export var vehicleFilterReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_VEHICLE_FILTER':
      return [
        ...state,
        ...action.vehicleFilter
      ];
    default:
      return state;
  }
};
export var offerFilterReducer = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_OFFER_FILTER':
      return [
        ...state,
        ...action.offerFilter
      ];
    default:
      return state;
  }
};
