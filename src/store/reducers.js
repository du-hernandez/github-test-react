import { combineReducers } from 'redux';

import reduceGists from '../services/getGists/reducer';

export default combineReducers({
    gists: reduceGists
});