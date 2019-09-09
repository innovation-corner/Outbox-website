import {
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_SUCCESS
} from '../actionTypes';
import { registerService, loginService } from '../services/authService';
import { startLoading, stopLoading } from '../actions/index';

export const register = payload => {
  return (dispatch, getState) => {
    dispatch(startLoading())
    registerService(payload)
    .then(response => {
      const {message, success, user} = response;
      if (success) { 
        dispatch(stopLoading());
        alert(message);  
        dispatch({type: REGISTER_SUCCESS, payload: user});
      } else { 
        dispatch(stopLoading()); 
        dispatch({ type: REGISTER_FAILURE }); 
      }
    })
    .catch(error => {
      console.log(error);
      dispatch(stopLoading()); 
      dispatch({ type: REGISTER_FAILURE });
    });
  }
};

export const login = payload => {
  
};
  
export function logout() {
  return {
    type: LOGOUT,
  };
};
  