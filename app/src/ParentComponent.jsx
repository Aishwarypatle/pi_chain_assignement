// ParentComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ParentComponent = () => {
  const parentVariable = useSelector(state => state.parentReducer.parentVariable);
  const dispatch = useDispatch();

  const handleParentVariableUpdate = (newValue) => {
    dispatch({ type: 'UPDATE_PARENT_VARIABLE', payload: newValue });
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Parent Variable: {parentVariable}</p>
      <input
        type="text"
        value={parentVariable}
        onChange={(e) => handleParentVariableUpdate(e.target.value)}
      />
    </div>
  );
};

export default ParentComponent;
