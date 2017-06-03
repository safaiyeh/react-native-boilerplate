import { combineReducers } from 'redux';
import counterReducer from './CounterReducer';

export default combineReducers({
  counter: counterReducer,
});
