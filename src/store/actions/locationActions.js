import {
  GET_ALL_LOCATION,
  GET_LOCATION_FAILURE,
  ADD_LOCATION_FAILURE,
  ADD_LOCATION_SUCCESS
} from '../actionTypes';
// import { push } from 'connected-react-router';
import { getAllLocation, addNewLocation } from '../services/locationService';
import { startLoading, stopLoading, triggerAlert } from '../actions/index';

export const addNew = payload => {
  return (dispatch, getState) => {
    dispatch(startLoading())
    return addNewLocation(payload)
    .then(response => {
      if (response.success) {
        dispatch(stopLoading());
        dispatch(triggerAlert({
          message: response.message,
          showType: 'success',
          isActive: true
        }));  
        dispatch({type: ADD_LOCATION_SUCCESS, payload: response.location});
      } else { 
        dispatch(triggerAlert({
          message: response.message,
          showType: 'danger',
          isActive: true
        }));
        dispatch(stopLoading()); 
        dispatch({ type: ADD_LOCATION_FAILURE }); 
      }
    })
    .catch(error => {
      dispatch(stopLoading()); 
      dispatch({ type: ADD_LOCATION_FAILURE });
    });
  }
};

export const getAll = payload => {
  return (dispatch, getState) => {
    dispatch(startLoading());
    return getAllLocation(getState().auth.userData.businessId)
    .then(response => {
      if (response.success) { 
        dispatch(stopLoading());
        dispatch({type: GET_ALL_LOCATION, payload: response.locations});
      } else { 
        dispatch(triggerAlert({
          message: response.message,
          showType: 'danger',
          isActive: true
        }));
        dispatch(stopLoading()); 
        dispatch({ type: GET_LOCATION_FAILURE }); 
      }
    })
    .catch(error => {
      dispatch(stopLoading()); 
      dispatch({ type: GET_LOCATION_FAILURE }); 
    });
  };
};