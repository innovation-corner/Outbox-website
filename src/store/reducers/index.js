import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { connectRouter } from 'connected-react-router'

export const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer
});