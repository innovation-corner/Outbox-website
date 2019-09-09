import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authSaga';
import { SIGNUP, SIGNIN } from '../actionTypes';

export default function* watchUserAuthentication() {
    yield takeLatest(SIGNUP, registerSaga);
    yield takeLatest(SIGNIN, loginSaga);
};