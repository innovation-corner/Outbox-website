import { put, call } from 'redux-saga/effects';
import { registerService, loginService } from '../services/authService';
import {  
    LOGIN_FAILURE, 
    LOGIN_SUCCESS,
} from '../actionTypes';
import { startLoading, stopLoading } from '../actions/index';
import { setCookie } from '../../utils/cookies';

export function* registerSaga(payload) {
    try {
        yield put(startLoading()); 
        const { data, success, message } = yield call( 
            registerService, 
            payload 
        ); 
        console.log("TCL: function*loginUser -> data", data); 
        yield put(stopLoading()); 
        if (success) { 
            cookie.set("token", data.access_token, { expires: 1 }); 
            localStorage.setItem("token", data.access_token); 
            localStorage.setItem("userId", data.user.userId); 
            yield put({type: LOGIN_SUCCESS, payload: data.user}); 
            Router.push("/home/dashboard"); 
        } else { 
            yield put(stopLoading()); 
            yield put({ type: LOGIN_FAILURE, message }); 
        } 
    } catch(error) {
        yield put({ type: LOGIN_FAILURE, error });
    }
};

export function* loginSaga(payload) {
    try {
        yield put(startLoading()); 
        const { data, success, message } = yield call(loginService, payload); 
        console.log("TCL: function*loginUser -> data", data); 
        yield put(stopLoading()); 
        if (success) { 
            setCookie("token", data.access_token, 3); 
            localStorage.setItem("token", data.access_token); 
            localStorage.setItem("userId", data.user.userId); 
 
            yield put({ 
                type: LOGIN_SUCCESS, 
                payload: data.user 
            }); 

            Router.push("/dashboard"); 
        } else { 
            yield put(stopLoading()); 
            yield put({ type: LOGIN_FAILURE, message }); 
        } 
    } catch(error) {
        yield put({ type: LOGIN_FAILURE, error })
    }
};