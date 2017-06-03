import { INCREMENT, DECREMENT } from '../actions/types';

const INITIAL_STATE = {
  value: 0,
  wtf: true,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return { wtf: false, value: action.payload };
    case DECREMENT:
      return { value: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
