import { 
  LOGIN,
  REGISTER,
  LOGOUT
} from '../actionTypes';

export const login = payload => {
  return {
    type: LOGIN,
    payload
  };
};

export const register = payload => {
  return {
    type: REGISTER,
    payload
  }
};
  
export function logout() {
  return {
    type: LOGOUT,
  };
};
  