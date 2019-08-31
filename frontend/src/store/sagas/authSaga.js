import { put, call } from 'redux-saga/effects';
import { registerService, loginService } from '../services/authService';
import { 
    SIGNIN, 
    SIGNUP, 
    SIGNIN_FAILURE, 
    SIGNIN_SUCCESS
} from '../actionTypes'

export function* registerSaga(payload) {
    try {
        const response = yield call(registerService, payload);
        yield [
            put({ type: SIGNIN_SUCCESS, response })
        ];
    } catch(error) {
        yield put({ type: SIGNIN_FAILURE, error });
    }
};

export function* loginSaga(payload) {
    try {
        const response = yield call(loginService, payload);
        yield [
            put({ type: SIGNIN_SUCCESS, response })
        ];
    } catch(error) {
        yield put({ type: SIGNIN_FAILURE, error })
    }
};