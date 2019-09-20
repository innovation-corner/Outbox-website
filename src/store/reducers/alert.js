import { 
    UPDATE_ALERT, ACTIVE_MENU
} from '../actionTypes';

const alertState = {
    message: '',
    type: '',
    isActive: false,
    activeMenu: {
        'home': false
    }
};

export const alertReducer = (state = alertState, action) => {
    const { type, payload } = action; 
    switch (type) { 
        case UPDATE_ALERT: 
            return { 
                ...state, 
                message: payload.message,
                type: payload.showType,
                isActive: payload.isActive 
            }; 
        case ACTIVE_MENU:
            return {
                ...state,
                activeMenu: {
                    [payload.key]: payload.value
                }
            }
        default: 
            return state; 
    } 
};