const ADD_FEATURE = 'ADD_FEATURE';
const REMOVE_FEATURE = 'REMOVE_FEATURE';

const addFeature = feature => {
  return {
    type: ADD_FEATURE,
    payload: feature
  };
};

const removeFeature = featurePrice => {
  return {
    type: REMOVE_FEATURE,
    payload: featurePrice
  };
};

export { ADD_FEATURE, addFeature, REMOVE_FEATURE, removeFeature };
