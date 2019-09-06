import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authSaga';
import { REGISTER, LOGIN } from '../actionTypes';

export default function* watchUserAuthentication() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
};