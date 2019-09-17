import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { connectRouter } from 'connected-react-router'
import { alertReducer } from './alert';

export const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  alert: alertReducer
});