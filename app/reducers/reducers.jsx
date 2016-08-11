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
export var filterReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PREFS':
      return [
        ...state,
        action.filters
      ];
    case 'TOGGLE_VEHICLE_FILTER':
      return [

      ];
    case 'TOGGLE_OFFER_FILTER':
      return [

      ];
    case 'TOGGLE_LANGUAGE_FILTER':
      return [

      ];
    default:
      return state;
  }
};
