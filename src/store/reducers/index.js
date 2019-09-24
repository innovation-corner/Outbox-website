import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { connectRouter } from 'connected-react-router'
import { alertReducer } from './alert';
import { locationReducer } from './location';

export const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  alert: alertReducer,
  location: locationReducer
});