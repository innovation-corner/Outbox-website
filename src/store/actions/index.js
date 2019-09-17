import { 
    START_LOADING, 
    STOP_LOADING, 
    UPDATE_ALERT
} from '../actionTypes';

export const startLoading = () => ({ 
    type: START_LOADING 
});

export const stopLoading = () => ({ 
    type: STOP_LOADING 
}); 

export const triggerAlert = (payload) => ({
    type: UPDATE_ALERT,
    payload
});