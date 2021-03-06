import axios from 'axios';
import { store } from '~/store';
import { signOut } from '~/store/modules/auth/actions';

const api = axios.create({
    baseURL: 'http://localhost:3335',
});

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {
            store.dispatch(signOut());
        } else {
            return Promise.reject(error);
        }
    }
);

export default api;
