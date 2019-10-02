import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  RESET,
} from '../actionTypes';
import { push } from 'connected-react-router';
import { registerService, loginService } from '../services/authService';
import { startLoading, stopLoading, triggerAlert } from '../actions/index';
import { setCookie } from '../../utils/cookies';

export const reset = () => ({
  type: RESET
});

export const register = payload => {
  return (dispatch, getState) => {
    dispatch(startLoading())
    registerService(payload)
    .then(response => {
      if (response.success) { 
        dispatch(stopLoading());
        dispatch(triggerAlert({
          message: response.message,
          showType: 'success',
          isActive: true
        }));  
        dispatch({type: REGISTER_SUCCESS, payload: response.user});
      } else { 
        dispatch(triggerAlert({
          message: response.message,
          showType: 'danger',
          isActive: true
        }));
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

export const login = (data) => {
  return (dispatch, getState) => {
    dispatch(startLoading())
    return loginService(data).then(response => {
      if (response.success) { 
        setCookie("token", response.payload.token, 3); 
        localStorage.setItem("token", response.payload.token); 
        dispatch(stopLoading());
        dispatch({type: LOGIN_SUCCESS, payload: response.payload.user});
        dispatch(push('/home/dashboard'));
      } else {
        dispatch(triggerAlert({
          message: response.message,
          showType: 'danger',
          isActive: true
        }));
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
  return (dispatch, getState) => {
    localStorage.removeItem('state');
    localStorage.clear();
    setCookie("token", '', 3);
    dispatch(push('/'));
  };
};
  