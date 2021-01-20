import { Dispatch } from 'redux';

interface Counter {
  counter: number;
}

// Action Types
export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';

// Action Creators, Redux Thunk
export const decrement = () => (dispatch: Dispatch, getState: () => Counter): void => {
  dispatch({
    // Action
    counter: getState().counter - 1,
    type: DECREMENT,
  });
};

export const increment = () => (dispatch: Dispatch, getState: () => Counter): void => {
  dispatch({
    counter: getState().counter + 1,
    type: INCREMENT,
  });
};

// Reducer
export const counter = (state = 0, action: { counter: number; type: string }): number => {
  switch (action.type) {
    case DECREMENT:
    case INCREMENT:
      return action.counter;
    default:
      return state;
  }
};
