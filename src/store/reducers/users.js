import { 
    GET_ALL_USERS,
    ADD_USER_SUCCESS,
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
                ...state,
                users: state.users.concat(payload)
            };
        default: 
            return state; 
    } 
};