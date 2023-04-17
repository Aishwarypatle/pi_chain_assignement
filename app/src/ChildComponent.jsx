// ChildComponent.js
import React from 'react';
import { useDispatch } from 'react-redux';

const ChildComponent = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const newParentVariableValue = 'newValue'; // new value for the parent variable
    dispatch({ type: 'UPDATE_PARENT_VARIABLE', payload: newParentVariableValue });
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleButtonClick}>Update Parent Variable</button>
    </div>
  );
};

export default ChildComponent;
