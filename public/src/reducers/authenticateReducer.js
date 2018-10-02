import { REQUEST_AUTHENTICATION,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE } from '../actions/actionConstants';

const initialState = {
    isFetching: false
};

const authenticateReducer = () => {
    return (state = initialState, action) => {
        if (action.name !== fileName) {
            return state;
        }

        switch (action.type) {
            case REQUEST_AUTHENTICATION: return Object.assign({}, state, {
                isFetching: true
            });

            case AUTHENTICATION_SUCCESS: return Object.assign({}, state, {
                isFetching: false,
                isValid: true
            });

            case AUTHENTICATION_FAILURE: return Object.assign({}, state, {
                isFetching: false,
                isValid: false,
                error: action.error
            });

            default: return state;
        }
    };
};

export default authenticateReducer;
