import { takeLatest, all, put, call } from 'redux-saga/effects';

import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;
        const response = yield call(api.post, '/sessions', {
            email,
            password,
        });
        const { token, user } = response.data;
        if (!user.provider) {
            console.tron.log('Usuário não é prestador');
            return;
        }
        yield put(signInSuccess(token, user));
        history.push('/dashboard');
    } catch (error) {
        yield put(signFailure());
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
