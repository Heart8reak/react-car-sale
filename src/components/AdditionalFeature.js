import React from 'react';
import { addFeature } from '../actions/buttonAction';
import { useDispatch } from 'react-redux';

const AdditionalFeature = props => {
  const dispatch = useDispatch();
  return (
    <li>
      <button
        onClick={() => dispatch(addFeature(props.feature))}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
