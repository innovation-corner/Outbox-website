import {
  GET_ALL_LOCATION,
  GET_LOCATION_FAILURE,
  ADD_LOCATION_FAILURE,
  ADD_LOCATION_SUCCESS,
  GET_LOCATION_DETAILS,
  GET_LOCATION_ROOMS
} from '../actionTypes';
// import { push } from 'connected-react-router';
import { getAllLocation, addNewLocation, getDetails } from '../services/locationService';
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

export const getLocationDetails = id => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    try {
      const { data } = await getDetails(id, getState().auth.userData.businessId);
      dispatch(stopLoading());
      dispatch({type: GET_LOCATION_DETAILS, payload: data.location});
      dispatch({type: GET_LOCATION_ROOMS, payload: data.rooms});
    } catch(error) {
      dispatch(stopLoading()); 
    }
  };
};

export const addNewRoom = () => {
  return (dispatch, getState) => {

  };
};