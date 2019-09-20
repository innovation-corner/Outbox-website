import { 
    START_LOADING, 
    STOP_LOADING, 
    UPDATE_ALERT,
    ACTIVE_MENU
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

export const switchActiveMenu = (payload) => ({
    type: ACTIVE_MENU,
    payload
});