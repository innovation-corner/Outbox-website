import { postFunc, singlePostFunc, putFunc, getFunc } from "./httpService";

export const getAllLocation = business_id => {
    return getFunc(`business/${business_id}/locations`);
};

export const addNewLocation = payload => {
    return postFunc('location/new', payload, true);
};

export const updateLocation = id => {
    return putFunc('location', id);
};

export const getLocationUsers = id => {
    return getFunc(`location/${id}/users`);
}

export const getLocationRooms = id => {
    return getFunc(`location/${id}/rooms`);
};