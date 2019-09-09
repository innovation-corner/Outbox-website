import {
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from '../actionTypes';
import { push } from 'connected-react-router';
import { registerService, loginService } from '../services/authService';
import { startLoading, stopLoading } from '../actions/index';
import { setCookie } from '../../utils/cookies';

export const register = payload => {
  return (dispatch, getState) => {
    dispatch(startLoading())
    registerService(payload)
    .then(response => {
      if (response.success) { 
        dispatch(stopLoading());
        alert(response.message);  
        dispatch({type: REGISTER_SUCCESS, payload: response.user});
      } else { 
        dispatch(stopLoading()); 
        dispatch({ type: REGISTER_FAILURE }); 
      }
    })
    .catch(error => {
      dispatch(stopLoading()); 
      dispatch({ type: REGISTER_FAILURE });
    });
  }
};

export const login = data => {
  return (dispatch, getState) => {
    dispatch(startLoading())
    loginService(data)
      .then(response => {
        if (response.success) { 
          setCookie("token", response.payload.token, 3); 
          localStorage.setItem("token", response.payload.token); 
          dispatch(stopLoading());
          dispatch({type: LOGIN_SUCCESS, payload: response.payload.user});
          dispatch(push('/dashboard'));
        } else {
          alert(response.message);
          dispatch(stopLoading()); 
          dispatch({ type: LOGIN_FAILURE }); 
        }
      })
      .catch(error => {
        dispatch(stopLoading()); 
        dispatch({ type: LOGIN_FAILURE });
      });
  }
};
  
export function logout() {
  return {
    type: LOGOUT,
  };
};
  