import {
    GET_ALL_USERS,
    GET_USER_FAILURE,
    ADD_USER_FAILURE,
    ADD_USER_SUCCESS
  } from '../actionTypes';
  // import { push } from 'connected-react-router';
  import { getAllUsers, addNewUser } from '../services/userService';
  import { startLoading, stopLoading, triggerAlert } from '../actions/index';
  
  export const addNew = payload => {
    return (dispatch, getState) => {
      dispatch(startLoading())
      return addNewUser(payload)
      .then(response => {
        if (response.success) {
          dispatch(stopLoading());
          dispatch(triggerAlert({
            message: response.message,
            showType: 'success',
            isActive: true
          }));  
          dispatch({type: ADD_USER_SUCCESS, payload: response.user});
        } else { 
          dispatch(triggerAlert({
            message: response.message,
            showType: 'danger',
            isActive: true
          }));
          dispatch(stopLoading()); 
          dispatch({ type: ADD_USER_FAILURE }); 
        }
      })
      .catch(error => {
        dispatch(stopLoading()); 
        dispatch({ type: ADD_USER_FAILURE });
      });
    }
  };
  
  export const getAll = () => {
    return (dispatch, getState) => {
      dispatch(startLoading());
      return getAllUsers(getState().auth.userData.businessId)
      .then(response => {
        if (response.success) { 
          dispatch(stopLoading());
          dispatch({type: GET_ALL_USERS, payload: response.users});
        } else { 
          dispatch(triggerAlert({
            message: response.message,
            showType: 'danger',
            isActive: true
          }));
          dispatch(stopLoading()); 
          dispatch({ type: GET_USER_FAILURE }); 
        }
      })
      .catch(error => {
        dispatch(stopLoading()); 
        dispatch({ type: GET_USER_FAILURE }); 
      });
    };
  };