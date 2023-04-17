// parentReducer.js
const initialState = {
  parentVariable: ''
};

const parentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PARENT_VARIABLE':
      return {
        ...state,
        parentVariable: action.payload
      };
    default:
      return state;
  }
};

export default parentReducer;
