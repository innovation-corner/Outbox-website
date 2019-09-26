import { 
    GET_ALL_LOCATION, 
    ADD_LOCATION_SUCCESS
} from '../actionTypes';

const locationState = {
    locations: [],
    locationDetails: {},
    locationUsers: [],
    locationRooms: []
};

export const locationReducer = (state = locationState, action) => {
    const { type, payload } = action; 
    switch (type) { 
        case GET_ALL_LOCATION: 
            return { 
                ...state, 
                locations: payload
            }; 
        case ADD_LOCATION_SUCCESS:
            return {
                ...state,
                locations: state.locations.concat(payload)
            }
        default: 
            return state; 
    } 
};