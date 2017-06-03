import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const INITIAL_STATE = {};
const reduxLogger = createLogger({ predicate: () => __DEV__ });

const enhancer = compose(
  applyMiddleware(
    reduxLogger,
  ),
);

export default createStore(reducers, INITIAL_STATE, enhancer);
