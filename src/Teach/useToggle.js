import { useReducer } from 'react';

function toggleReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return !state;
    default:
      return state;
  }
}

function useToggle(initialState = false) {
  const [state, dispatch] = useReducer(toggleReducer, initialState);

  const toggle = () => {
    dispatch({ type: 'TOGGLE' });
  };

  return [state, toggle];
}

export default useToggle;
