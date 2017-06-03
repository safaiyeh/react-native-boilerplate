import { INCREMENT, DECREMENT } from '../actions/types';

const INITIAL_STATE = {
  value: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: action.payload };
    case DECREMENT:
      return { value: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
