import { combineReducers } from 'redux';
import * as reducers from './reducers';

const allReducer = combineReducers({
    drawerState: reducers.authenticateReducer
});

export default allReducer;
