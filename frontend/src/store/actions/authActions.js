import { 
    SIGNIN,
    SIGNUP,
    LOGOUT
} from '../actionTypes';
import { loginService } from '../services/authService';

export function login() {
    return {
      type: SIGNIN,
    };
};

export function register() {
    return dispatch => {

    };
};
  
export function logout() {
    return {
      type: LOGOUT,
    };
}
  