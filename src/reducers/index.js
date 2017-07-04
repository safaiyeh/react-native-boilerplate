import { combineReducers } from 'redux';
import counterReducer from './CounterReducer';
import navReducer from './NavReducer';

export default combineReducers({
  counter: counterReducer,
  nav: navReducer,
});
