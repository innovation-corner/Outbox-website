import { postFunc, getFunc } from "./httpService";

export const getAllUsers = business_id => {
    return getFunc(`business/${business_id}/users`);
};

export const addNewUser = payload => {
    return postFunc('user/invite', payload, true);
};