import { 
    UPDATE_ALERT
} from '../actionTypes';

const alertState = {
    message: '',
    type: '',
    isActive: false
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
        default: 
            return state; 
    } 
};