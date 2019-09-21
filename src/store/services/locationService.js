import { postFunc, singlePostFunc, putFunc, getFunc } from "./httpService";

export const getAllLocation = payload => {
    return postFunc('auth/login', payload);
};

export const addNewLocation = payload => {
    return postFunc('location/new', payload);
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