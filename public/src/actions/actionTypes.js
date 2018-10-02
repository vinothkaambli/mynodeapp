import 'isomorphic-fetch';
import qs from 'qs';
import _ from 'lodash';
import Promise from 'bluebird';

const BASE_API_URL = '/home';
const FIVE_SECONDS = 5000;
const GET = 'GET';

export function requestAuthentication() {
    return { 
        type: ac.REQUEST_AUTHENTICATION
    };
}

export function authenticationSuccess() {
    return {
        type: ac.AUTHENTICATION_SUCCESS
    };
}

export function authenticationFailure(err) {
    return {
        type: ac.AUTHENTICATION_FAILURE,
        error: err
    };
}

export function authenticateUser(username, password) {
    return (dispatch) => {
        const state = getState();
        
        const url = '${BASE_API_URL}/login';

        dispatch(requestAuthentication());

        return fetch(url, {
            method: GET,
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => {
                if(response.status >= 200 && response.status < 300) {
                    return dispatch(authenticationSuccess());
                }
                throw new Error("Invalid credentials");
        }).catch(err => dispatch(authenticationFailure(err.message)));
    };
}
