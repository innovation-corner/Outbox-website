import { 
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT,
    START_LOADING,
    STOP_LOADING,
    RESET
} from '../actionTypes';
import { initialState } from '../initialState';

export const authReducer = (state = initialState, action) => {
    const { type, payload, message } = action; 
    switch (type) { 
        case LOGIN_SUCCESS: 
            return { 
                ...state, 
                userData: payload, 
            }; 
        case LOGIN_FAILURE: 
            return { 
                ...state, 
                message: message 
            };             
        case LOGOUT: 
            return { 
                ...state, 
            }; 
        case START_LOADING: 
            return { 
                ...state, 
                isLoading: true 
            }; 
        case STOP_LOADING: 
            return { 
                ...state, 
                isLoading: false 
            };
        case RESET:
            return {
                ...state,
                message: null
            };
        default: 
            return state; 
    } 
};