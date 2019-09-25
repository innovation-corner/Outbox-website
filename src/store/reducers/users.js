import { 
    GET_ALL_USERS,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE
} from '../actionTypes';

const usersState = {
    users: [],
};

export const usersReducer = (state = usersState, action) => {
    const { type, payload } = action; 
    switch (type) { 
        case GET_ALL_USERS: 
            return { 
                ...state, 
                users: payload
            };
        case ADD_USER_SUCCESS:
            return {
                ...state
            };
        default: 
            return state; 
    } 
};