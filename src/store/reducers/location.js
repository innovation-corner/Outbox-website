import { 
    GET_ALL_LOCATION, 
    ADD_LOCATION_SUCCESS,
    GET_LOCATION_ROOMS,
    GET_LOCATION_DETAILS
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
        case GET_LOCATION_DETAILS:
            return {
                ...state,
                locationDetails: payload
            }
        case GET_LOCATION_ROOMS:
            return {
                ...state,
                locationRooms: payload
            }
        default: 
            return state; 
    } 
};